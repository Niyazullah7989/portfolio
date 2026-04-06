/**
 * Vercel Serverless (Node). Set OPENAI_API_KEY in the Vercel project env.
 * Ensure `openai` is in dependencies.
 */
import { runPortfolioChat } from '../src/chat/server/openaiChat'
import type { ChatTurn } from '../src/chat/server/openaiChat'

export default async function handler(req: {
  method?: string
  body?: { messages?: unknown }
}, res: {
  status: (code: number) => { json: (body: unknown) => void }
}): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method' })
    return
  }

  const key = process.env.OPENAI_API_KEY
  if (!key) {
    res.status(503).json({ error: 'no_key' })
    return
  }

  const raw = req.body?.messages
  if (!Array.isArray(raw)) {
    res.status(400).json({ error: 'invalid_messages' })
    return
  }

  const messages: ChatTurn[] = []
  for (const m of raw) {
    if (!m || typeof m !== 'object') continue
    const role = (m as { role?: string }).role
    const content = (m as { content?: string }).content
    if (role !== 'user' && role !== 'assistant') continue
    if (typeof content !== 'string' || !content.trim()) continue
    messages.push({ role, content: content.trim() })
  }

  if (!messages.length) {
    res.status(400).json({ error: 'empty_messages' })
    return
  }

  try {
    const reply = await runPortfolioChat(key, messages)
    res.status(200).json({ reply })
  } catch (e: unknown) {
    const detail = e instanceof Error ? e.message : String(e)
    res.status(502).json({ error: 'openai_error', detail })
  }
}
