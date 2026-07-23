import { profile } from '../data/profile'

/** Full public profile as plain text for the model system prompt (single source of truth). */
export function buildProfileContextForAI(): string {
  const skills = profile.skillGroups
    .map((g) => `${g.title}: ${g.items.join(', ')}`)
    .join('\n')

  const projects = profile.projects
    .map(
      (p) =>
        `- ${p.title}: ${p.description} [Tags: ${p.tags.join(', ')}] Link: ${p.href}`,
    )
    .join('\n')

  const exp = profile.experience
    .map(
      (e) =>
        `- ${e.title} at ${e.company} (${e.period})\n${e.points.map((p) => `  • ${p}`).join('\n')}`,
    )
    .join('\n\n')

  const edu = profile.education
    .map((e) => `- ${e.title} — ${e.subtitle}`)
    .join('\n')

  const about = profile.about.map((p, i) => `${i + 1}. ${p}`).join('\n')

  return [
    `FULL_NAME: ${profile.name}`,
    `ROLE: ${profile.role}`,
    `LOCATION: ${profile.location}`,
    `AVAILABILITY: ${profile.availability ?? 'not specified'}`,
    `TAGLINE: ${profile.tagline}`,
    `YEARS_EXPERIENCE: ${profile.yearsExperience.value}${profile.yearsExperience.suffix} — ${profile.yearsExperience.caption}`,
    '',
    'ABOUT:',
    about,
    '',
    'SKILLS:',
    skills,
    '',
    'PROJECTS:',
    projects,
    '',
    'EXPERIENCE:',
    exp,
    '',
    'EDUCATION:',
    edu,
    '',
    'CONTACT:',
    `Email: ${profile.contact.emails.join(', ')}`,
    `Phone: ${profile.contact.phoneDisplay}`,
    `WhatsApp: ${profile.contact.whatsapp}`,
    `LinkedIn: ${profile.contact.linkedin}`,
    `GitHub: ${profile.contact.github}`,
    profile.resumeUrl ? `Resume/CV path on site: ${profile.resumeUrl}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}
