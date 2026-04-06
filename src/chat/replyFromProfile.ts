import { profile } from '../data/profile'

const allSkills = profile.skillGroups.flatMap((g) => g.items)

function skillsByGroupText(): string {
  return profile.skillGroups
    .map((g) => `**${g.title}:** ${g.items.join(', ')}`)
    .join('\n')
}

function projectsText(): string {
  return profile.projects
    .map(
      (p) =>
        `• **${p.title}** — ${p.description} (Tags: ${p.tags.join(', ')}. Link: ${p.href})`,
    )
    .join('\n\n')
}

function educationText(): string {
  return profile.education
    .map((e) => `• ${e.title} — ${e.subtitle}`)
    .join('\n')
}

function experienceText(): string {
  return profile.experience
    .map(
      (x) =>
        `**${x.title}** at ${x.company} (${x.period})\n${x.detail}`,
    )
    .join('\n\n')
}

/** Answers from public portfolio data only — keyword / phrase matching. */
export function getChatReply(raw: string): string {
  const q = raw.toLowerCase().trim().replace(/\s+/g, ' ')
  if (!q) {
    return `Ask about ${profile.name.split(' ')[0]}’s skills, testing experience, projects, education, or how to contact him.`
  }

  if (
    /^(hi|hello|hey|hii|yo|good morning|good afternoon|good evening)\b/.test(
      q,
    ) ||
    q === 'hi' ||
    q === 'hello'
  ) {
    return `Hi! I’m a portfolio assistant for **${profile.name}**. Ask about his role, tech stack, QA automation, projects, education, or contact links.`
  }

  if (
    q.includes('thank') ||
    q === 'thanks' ||
    q === 'ty' ||
    q.includes('appreciate')
  ) {
    return 'You’re welcome! If you need anything else about his background, just ask.'
  }

  if (
    q.includes('email') ||
    q.includes('gmail') ||
    (q.includes('contact') &&
      (q.includes('how') || q.includes('reach') || q.includes('get'))) ||
    q.includes('reach out') ||
    q.includes('message him') ||
    q.includes('write to')
  ) {
    return `**Contact**\n• Email: ${profile.contact.email}\n• Phone: ${profile.contact.phoneDisplay}\n• WhatsApp: ${profile.contact.whatsapp}\n• LinkedIn: ${profile.contact.linkedin}\n• GitHub: ${profile.contact.github}`
  }

  if (q.includes('linkedin') || q.includes('linked in')) {
    return `LinkedIn: ${profile.contact.linkedin}`
  }

  if (q.includes('github') || q.includes('git hub')) {
    return `GitHub: ${profile.contact.github}`
  }

  if (
    q.includes('phone') ||
    q.includes('whatsapp') ||
    q.includes('call') ||
    q.includes('mobile') ||
    (q.includes('number') && (q.includes('phone') || q.includes('contact')))
  ) {
    return `**Phone:** ${profile.contact.phoneDisplay} (tap to call: \`${profile.contact.phoneTel}\`)\n**WhatsApp:** ${profile.contact.whatsapp}`
  }

  if (
    q.includes('where') &&
    (q.includes('live') || q.includes('located') || q.includes('based'))
  ) {
    return `He’s based in **${profile.location}**.`
  }

  if (q.includes('location') || q.includes('hyderabad') || q.includes('india')) {
    return `**Location:** ${profile.location}`
  }

  if (
    q.includes('availability') ||
    q.includes('open to') ||
    q.includes('hiring') ||
    q.includes('job') ||
    q.includes('full-time') ||
    q.includes('contract') ||
    q.includes('remote')
  ) {
    return `**Availability:** ${profile.availability ?? 'See the portfolio for current status.'}`
  }

  if (
    q.includes('who') ||
    q.includes('introduce') ||
    q.includes('about him') ||
    q.includes('about niyaz') ||
    q.includes('who is')
  ) {
    return `**${profile.name}** — ${profile.role}.\n\n${profile.tagline}\n\n${profile.about[0]}`
  }

  if (q.includes('name') && (q.includes('what') || q.includes('his'))) {
    return `His name is **${profile.name}**.`
  }

  if (
    q.includes('role') ||
    q.includes('title') ||
    q.includes('position') ||
    q.includes('what does he do')
  ) {
    return `**Role:** ${profile.role}\n\n${profile.tagline}`
  }

  if (
    q.includes('year') ||
    q.includes('experience') ||
    q.includes('how long') ||
    q.includes('seniority')
  ) {
    if (
      q.includes('work') ||
      q.includes('career') ||
      q.includes('professional') ||
      q.includes('job') ||
      q.includes('experience')
    ) {
      return `He has **${profile.yearsExperience.value}${profile.yearsExperience.suffix}** ${profile.yearsExperience.caption.toLowerCase()}.\n\n${experienceText()}`
    }
  }

  if (
    q.includes('skill') ||
    q.includes('stack') ||
    q.includes('technology') ||
    q.includes('technologies') ||
    q.includes('tech stack') ||
    q.includes('tools') ||
    q.includes('know') ||
    q.includes('expertise')
  ) {
    return `**Skills (by area)**\n${skillsByGroupText()}`
  }

  if (
    q.includes('test') ||
    q.includes('qa') ||
    q.includes('quality') ||
    q.includes('selenium') ||
    q.includes('cucumber') ||
    q.includes('playwright') ||
    q.includes('testng') ||
    q.includes('postman') ||
    q.includes('restassured') ||
    q.includes('automation') ||
    q.includes('junit')
  ) {
    const qaGroup = profile.skillGroups.find((g) =>
      g.title.toLowerCase().includes('test'),
    )
    const qa = qaGroup?.items.join(', ') ?? ''
    return `**Testing & QA focus:** ${qa}\n\nFrom his experience: ${profile.experience[0]?.detail ?? ''}`
  }

  if (
    q.includes('spring') ||
    q.includes('react') ||
    q.includes('java') ||
    q.includes('node') ||
    q.includes('typescript') ||
    q.includes('python') ||
    q.includes('tailwind') ||
    q.includes('aws') ||
    q.includes('docker') ||
    q.includes('mysql') ||
    q.includes('mongodb')
  ) {
    const hits = allSkills.filter((s) =>
      q.includes(s.toLowerCase().replace(/[^a-z0-9]/g, '')),
    )
    if (hits.length) {
      return `Yes — **${hits.join(', ')}** appears in his stack. Full skills:\n${skillsByGroupText()}`
    }
    return `**Stack highlights** (see site for full list):\n${skillsByGroupText()}`
  }

  if (
    q.includes('work') ||
    q.includes('job') ||
    q.includes('career') ||
    q.includes('ptr') ||
    q.includes('employer') ||
    q.includes('company')
  ) {
    if (q.includes('ptr') || q.includes('experience') || q.includes('work')) {
      return `**Experience**\n\n${experienceText()}`
    }
  }

  if (q.includes('experience') || q.includes('employment')) {
    return `**Experience**\n\n${experienceText()}`
  }

  if (
    q.includes('education') ||
    q.includes('degree') ||
    q.includes('university') ||
    q.includes('college') ||
    q.includes('b.tech') ||
    q.includes('btech') ||
    q.includes('graduate') ||
    q.includes('ssc') ||
    q.includes('intermediate')
  ) {
    return `**Education**\n${educationText()}`
  }

  if (
    q.includes('project') ||
    q.includes('portfolio') ||
    q.includes('e-commerce') ||
    q.includes('ecommerce') ||
    q.includes('cloud') ||
    q.includes('ai agent')
  ) {
    return `**Projects**\n\n${projectsText()}`
  }

  if (
    q.includes('language') &&
    (q.includes('speak') || q.includes('hindi') || q.includes('urdu') || q.includes('english'))
  ) {
    return profile.about[2] ?? 'Languages: English, Urdu, and Hindi.'
  }

  if (q.includes('summary') || q.includes('overview') || q.includes('background')) {
    return `${profile.tagline}\n\n${profile.about.join('\n\n')}`
  }

  if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
    return profile.resumeUrl
      ? `You can use the **Download CV** button on the site, or open: \`${profile.resumeUrl}\` (add the PDF file in the site’s public folder if the link is new).`
      : 'Use the contact section to request a resume.'
  }

  // Word overlap with skills / project titles as last resort
  const words = q.split(/\s+/).filter((w) => w.length > 2)
  for (const w of words) {
    const skillHit = allSkills.find((s) => s.toLowerCase().includes(w))
    if (skillHit) {
      return `**${skillHit}** is part of his toolkit. Broader stack:\n${skillsByGroupText()}`
    }
    const proj = profile.projects.find((p) =>
      p.title.toLowerCase().includes(w),
    )
    if (proj) {
      return `**${proj.title}** — ${proj.description}\nMore: ${proj.href}`
    }
  }

  return `I’m tuned to this portfolio’s public info. Try asking about:\n• **Skills** or testing tools (Selenium, Postman, etc.)\n• **Experience** at PTR Technology\n• **Projects** (e-commerce, cloud, AI agents)\n• **Education** or **contact** (email, LinkedIn, GitHub)\n\nOr scroll the page — the same details are in each section.`
}
