import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { getChatReply } from '../chat/replyFromProfile'
import { fetchPortfolioAssistantReply } from '../chat/client/fetchChat'
import { profile } from '../data/profile'

type Msg = { role: 'user' | 'assistant'; text: string }

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/\*\*/)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

const WELCOME: Msg = {
  role: 'assistant',
  text: `Hi! I’m an **AI assistant** for **${profile.name}**’s portfolio. I answer from the same profile you see on this page (skills, experience, projects, education, contact). Ask anything — if the AI isn’t configured, you’ll still get quick answers from the built-in helper.`,
}

export function ChatBot() {
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([WELCOME])
  const [draft, setDraft] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollBottom = useCallback(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollBottom()
  }, [messages, open, loading, scrollBottom])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 50)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = async () => {
    const text = draft.trim()
    if (!text || loading) return
    setDraft('')

    const historyPayload = [
      ...messages.slice(1).map((m) => ({
        role: m.role,
        content: m.text,
      })),
      { role: 'user' as const, content: text },
    ]

    setMessages((m) => [...m, { role: 'user', text }])
    setLoading(true)

    try {
      const result = await fetchPortfolioAssistantReply(historyPayload)

      if (result.ok) {
        setMessages((m) => [...m, { role: 'assistant', text: result.reply }])
      } else if (!result.ok && result.message === 'no_key') {
        setMessages((m) => [
          ...m,
          { role: 'assistant', text: getChatReply(text) },
        ])
      } else if (!result.ok) {
        setMessages((m) => [
          ...m,
          {
            role: 'assistant',
            text: `${getChatReply(text)}\n\n_(AI is temporarily unavailable — answered with the on-site helper.)_`,
          },
        ])
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: getChatReply(text) },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot-root fixed z-[100] flex flex-col items-end gap-3">
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Portfolio assistant chat"
          className="chatbot-panel flex max-h-[min(72vh,520px)] w-[min(calc(100vw-1.5rem),400px)] flex-col overflow-hidden rounded-2xl border border-border-strong bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-indigo-100"
        >
          <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3">
            <div>
              <p className="font-display text-sm font-bold text-white">
                AI · {profile.name.split(' ')[0]}
              </p>
              <p className="text-[11px] text-indigo-100">
                Answers grounded in this portfolio
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div
            ref={listRef}
            className="flex flex-1 flex-col gap-3 overflow-y-auto bg-slate-50/80 px-3 py-4"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((m, i) => (
              <div
                key={`${i}-${m.role}-${m.text.slice(0, 12)}`}
                className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'ml-auto bg-indigo-600 text-white'
                    : 'mr-auto border border-border-strong bg-white text-muted shadow-sm'
                }`}
              >
                {m.role === 'assistant' ? (
                  <div className="whitespace-pre-wrap">
                    <FormattedText text={m.text} />
                  </div>
                ) : (
                  m.text
                )}
              </div>
            ))}
            {loading ? (
              <div className="mr-auto rounded-2xl border border-border-strong bg-white px-4 py-3 text-sm text-muted shadow-sm">
                <span className="inline-flex gap-1" aria-label="Thinking">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400" />
                </span>
              </div>
            ) : null}
          </div>

          <div className="border-t border-border bg-white p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    void send()
                  }
                }}
                disabled={loading}
                placeholder="Ask anything about his profile…"
                className="min-w-0 flex-1 rounded-xl border border-border-strong bg-surface-raised px-3 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:opacity-60"
                aria-label="Your question"
                autoComplete="off"
              />
              <button
                type="button"
                disabled={loading}
                onClick={() => void send()}
                className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="chatbot-fab flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/35 transition-transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? 'Close portfolio chat' : 'Open portfolio AI chat'}
      >
        {open ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8.5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  )
}
