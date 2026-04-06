import OpenAI from 'openai'
import { buildProfileContextForAI } from '../profileContext'

const MODEL = 'gpt-4o-mini'

const INSTRUCTIONS = `You are a helpful AI assistant on a personal portfolio website. You speak on behalf of the professional whose profile data is provided below.

Rules:
- Answer ONLY using the PROFILE DATA section. Do not invent employers, dates, skills, projects, or contact details that are not explicitly there.
- If the visitor asks something not covered in the profile, say honestly that it is not in the public portfolio and suggest they use the email or LinkedIn link from CONTACT.
- Be concise, friendly, and professional. Short paragraphs or bullet lists are fine.
- You may use **bold** sparingly for emphasis (markdown-style with double asterisks).
- For contact details, repeat them exactly as given (email, phone, links).
- If asked in another language, reply in that language when possible, still using only the profile facts.`

export type ChatTurn = { role: 'user' | 'assistant'; content: string }

function sanitizeHistory(history: ChatTurn[]): ChatTurn[] {
  const maxMessages = 24
  const trimmed = history.slice(-maxMessages)
  return trimmed.map((m) => ({
    role: m.role,
    content: m.content.slice(0, 4000),
  }))
}

export async function runPortfolioChat(
  apiKey: string,
  history: ChatTurn[],
): Promise<string> {
  const client = new OpenAI({ apiKey })
  const profileBlock = buildProfileContextForAI()
  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `${INSTRUCTIONS}\n\n--- PROFILE DATA (only source of truth) ---\n${profileBlock}`,
    },
    ...sanitizeHistory(history).map((m) => ({
      role: m.role,
      content: m.content,
    })),
  ]

  const completion = await client.chat.completions.create({
    model: MODEL,
    messages,
    temperature: 0.35,
    max_tokens: 800,
  })

  const out = completion.choices[0]?.message?.content?.trim()
  if (!out) throw new Error('empty_completion')
  return out
}
