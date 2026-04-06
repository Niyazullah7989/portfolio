export type ChatTurn = { role: 'user' | 'assistant'; content: string }

type ApiBody = { reply?: string; error?: string; detail?: string }

export type ChatFetchResult =
  | { ok: true; reply: string }
  | { ok: false; source: 'error'; message: string }

export async function fetchPortfolioAssistantReply(
  history: ChatTurn[],
): Promise<ChatFetchResult> {
  let res: Response
  try {
    res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    })
  } catch {
    return { ok: false, source: 'error', message: 'network' }
  }

  let data: ApiBody = {}
  try {
    data = (await res.json()) as ApiBody
  } catch {
    return { ok: false, source: 'error', message: 'bad_json' }
  }

  if (res.status === 503 && data.error === 'no_key') {
    return { ok: false, source: 'error', message: 'no_key' }
  }

  if (res.ok && typeof data.reply === 'string' && data.reply.trim()) {
    return { ok: true, reply: data.reply.trim() }
  }

  return {
    ok: false,
    source: 'error',
    message: data.error || data.detail || `http_${res.status}`,
  }
}
