import type { Plugin } from 'vite'

/**
 * Injects canonical + absolute og:image / twitter:image when a public site URL is known.
 * - Vercel: uses VERCEL_URL during build (preview/prod) so shared links work without extra config.
 * - Custom domain: set VITE_SITE_URL=https://yourdomain.com in env (and in Vercel project settings for builds).
 */
export function htmlShareMetaPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '')
  return {
    name: 'vite-plugin-html-share-meta',
    transformIndexHtml(html) {
      if (!base) return html
      const block = `
    <link rel="canonical" href="${base}/" />
    <meta property="og:url" content="${base}/" />
    <meta property="og:image" content="${base}/images/profile.svg" />
    <meta name="twitter:image" content="${base}/images/profile.svg" />`
      return html.replace('</head>', `${block}\n  </head>`)
    },
  }
}
