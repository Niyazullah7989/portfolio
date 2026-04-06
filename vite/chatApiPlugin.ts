import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { loadEnv } from 'vite'
import { runPortfolioChat } from '../src/chat/server/openaiChat.ts'
import type { ChatTurn } from '../src/chat/server/openaiChat.ts'

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (c: Buffer) => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function parseMessages(raw: unknown): ChatTurn[] | null {
  if (!raw || typeof raw !== 'object') return null
  const messages = (raw as { messages?: unknown }).messages
  if (!Array.isArray(messages)) return null
  const out: ChatTurn[] = []
  for (const m of messages) {
    if (!m || typeof m !== 'object') continue
    const role = (m as { role?: string }).role
    const content = (m as { content?: string }).content
    if (role !== 'user' && role !== 'assistant') continue
    if (typeof content !== 'string' || !content.trim()) continue
    out.push({ role, content: content.trim() })
  }
  return out.length ? out : null
}

export function chatApiPlugin(): Plugin {
  return {
    name: 'vite-plugin-portfolio-chat-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const im = req as IncomingMessage
        const sr = res as ServerResponse
        if (!im.url?.startsWith('/api/chat')) return next()
        if (im.method !== 'POST') return next()

        const env = loadEnv(server.config.mode, process.cwd(), '')
        const key = env.OPENAI_API_KEY

        if (!key) {
          sr.statusCode = 503
          sr.setHeader('Content-Type', 'application/json')
          sr.end(JSON.stringify({ error: 'no_key' }))
          return
        }

        let body: string
        try {
          body = await readBody(im)
        } catch {
          sr.statusCode = 400
          sr.setHeader('Content-Type', 'application/json')
          sr.end(JSON.stringify({ error: 'read_body' }))
          return
        }

        let json: unknown
        try {
          json = JSON.parse(body)
        } catch {
          sr.statusCode = 400
          sr.setHeader('Content-Type', 'application/json')
          sr.end(JSON.stringify({ error: 'invalid_json' }))
          return
        }

        const messages = parseMessages(json)
        if (!messages) {
          sr.statusCode = 400
          sr.setHeader('Content-Type', 'application/json')
          sr.end(JSON.stringify({ error: 'invalid_messages' }))
          return
        }

        try {
          const reply = await runPortfolioChat(key, messages)
          sr.statusCode = 200
          sr.setHeader('Content-Type', 'application/json')
          sr.end(JSON.stringify({ reply }))
        } catch (e: unknown) {
          const detail = e instanceof Error ? e.message : String(e)
          sr.statusCode = 502
          sr.setHeader('Content-Type', 'application/json')
          sr.end(JSON.stringify({ error: 'openai_error', detail }))
        }
      })
    },
  }
}
