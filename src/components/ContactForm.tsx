import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('error')
      setErrorMsg('Please fill in all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setStatus('sending')

    if (!accessKey) {
      const subject = encodeURIComponent(`Portfolio message from ${trimmedName}`)
      const body = encodeURIComponent(
        `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      )
      window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`
      setStatus('idle')
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Portfolio contact from ${trimmedName}`,
          from_name: profile.name,
        }),
      })

      const data = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !data.success) {
        throw new Error(data.message ?? 'Unable to send message.')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="contact-form__intro">
        Send a message — I typically reply within 24 hours.
      </p>

      <div className="contact-form__field">
        <label className="contact-form__label font-mono" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className="contact-form__input"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          required
          disabled={status === 'sending'}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label font-mono" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          className="contact-form__input"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          autoComplete="email"
          required
          disabled={status === 'sending'}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label font-mono" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="contact-form__input contact-form__textarea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the role or project..."
          rows={5}
          maxLength={800}
          required
          disabled={status === 'sending'}
        />
        <span className="contact-form__count font-mono">{message.length}/800</span>
      </div>

      {status === 'success' ? (
        <p className="contact-form__feedback contact-form__feedback--success" role="status">
          Message sent! I&apos;ll get back to you soon.
        </p>
      ) : null}

      {status === 'error' && errorMsg ? (
        <p className="contact-form__feedback contact-form__feedback--error" role="alert">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-gradient contact-form__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : accessKey ? 'Send Message' : 'Open in Email App'}
      </button>

      {!accessKey ? (
        <p className="contact-form__hint font-mono">
          Add <code>VITE_WEB3FORMS_ACCESS_KEY</code> to enable direct send.
        </p>
      ) : null}
    </form>
  )
}
