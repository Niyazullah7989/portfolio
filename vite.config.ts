import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { chatApiPlugin } from './vite/chatApiPlugin.ts'
import { htmlShareMetaPlugin } from './vite/htmlShareMetaPlugin.ts'

function resolvePublicSiteUrl(mode: string): string {
  const env = loadEnv(mode, process.cwd(), '')
  const explicit = env.VITE_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`
  return ''
}

// https://vite.dev/config/
// GitHub Pages (project site): set by CI, e.g. VITE_BASE_PATH=/my-repo/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
    chatApiPlugin(),
    htmlShareMetaPlugin(resolvePublicSiteUrl(mode)),
  ],
}))
