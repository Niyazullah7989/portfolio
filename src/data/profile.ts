/** Portfolio copy — aligned with resume (Mohd Niyaz Ullah). */

const GITHUB_PROFILE = 'https://github.com/Niyazullah7989'
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/md-niyaz-ullah/'

export const profile = {
  name: 'Mohd Niyaz Ullah',
  initials: 'MN',
  role: 'Full Stack Developer · Software Test Engineer',
  roleTitles: [
    'Full Stack Developer',
    'Software Test Engineer',
    'QA Automation Engineer',
  ],
  location: 'Hyderabad, Telangana, India',
  heroSummary:
    'Full Stack Developer and Software Test Engineer with 3+ years building Spring Boot APIs, React experiences, and automation frameworks. Specialized in Playwright, Selenium WebDriver, and REST API testing — with a strong background in Agile delivery, CI/CD pipelines, and cross-functional collaboration across cloud-native systems.',
  coreCompetencies: [
    'Full Stack Development',
    'Spring Boot & REST APIs',
    'React & TypeScript',
    'Automation Framework Development',
    'Playwright & Selenium WebDriver',
    'REST API Testing',
    'Microservices Validation',
    'CI/CD Integration',
    'Agile / Scrum',
    'Root Cause Analysis',
  ],
  languages: ['English', 'Urdu', 'Hindi'],
  /** Shown near hero — set null to hide */
  availability: 'Open to full-time & contract roles',
  /** Right-side hero art: computers, monitors, laptop & systems */
  heroSystemsImage: '/images/hero-systems.svg',
  heroSystemsAlt:
    'Illustration of desk setup with monitors, laptop, and server hardware',
  portrait: '/images/profile.svg',
  portraitAlt:
    'Stylized illustration representing a developer with code and workspace',
  /** Add `resume.pdf` to /public — delete this key or set to `undefined` to hide Download CV */
  resumeUrl: '/resume.pdf',
  yearsExperience: {
    value: '3',
    suffix: '+',
    caption: 'Years shipping APIs, interfaces, and automated quality',
  },
  tagline:
    'Engineering and quality as one practice: Spring Boot services and React experiences, hardened with disciplined API and UI automation across cloud-native, microservices environments.',
  about: [
    'I operate at the intersection of product engineering and verification — building REST APIs with Java and Spring Boot, shaping React front ends, and owning the test strategy that keeps releases predictable. Three-plus years in Agile teams delivering web and cloud systems where integration risk is real.',
    'Stack spans Java, TypeScript, JavaScript, and Python; React with Redux Toolkit and Tailwind; Node and Express where needed; MySQL, MongoDB, and DynamoDB; AWS, Docker, GitHub Actions, and CI/CD. On the QA side: Selenium WebDriver, Playwright, Cucumber BDD, TestNG, JUnit, Postman, and RestAssured.',
    'Known for clear communication, fast ramp-up on new domains, and maintainable code. English, Urdu, and Hindi.',
  ],
  focusAreas: [
    {
      title: 'Build robust products',
      description:
        'I turn product ideas into resilient systems — blending backend architecture, polished UI work, and maintainable code so features land with confidence.',
      points: ['Spring Boot APIs', 'React experiences', 'Clean architecture'],
    },
    {
      title: 'Automate quality',
      description:
        'I design test strategies that reduce regression risk early, shorten feedback loops, and keep releases predictable in fast-moving sprints.',
      points: ['Playwright', 'Selenium', 'API automation'],
    },
    {
      title: 'Bridge delivery teams',
      description:
        'I work comfortably across engineering, QA, and product conversations — translating ambiguity into clear execution and measurable progress.',
      points: ['Agile collaboration', 'RCA', 'CI/CD'],
    },
  ],
  skillGroups: [
    {
      title: 'Programming Languages',
      items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      title: 'Automation',
      items: ['Playwright', 'Selenium WebDriver', 'Cucumber BDD', 'TestNG', 'JUnit'],
    },
    {
      title: 'Software Testing',
      items: [
        'Manual Testing',
        'Regression Testing',
        'Functional Testing',
        'Integration Testing',
        'E2E Testing',
        'Database Testing',
      ],
    },
    {
      title: 'API Testing',
      items: ['Postman', 'RestAssured', 'API Automation', 'API Validation'],
    },
    {
      title: 'Backend',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Redux Toolkit', 'Tailwind CSS', 'HTML & CSS'],
    },
    {
      title: 'Database',
      items: ['MySQL', 'MongoDB', 'DynamoDB'],
    },
    {
      title: 'DevOps & Tools',
      items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'AWS', 'CI/CD', 'Maven'],
    },
  ],
  skillsBanner: '/images/skills-banner.svg',
  projects: [
    {
      title: 'Website application',
      description:
        'Responsive client websites and web apps — React, mobile-first UI, and clean handoff.',
      tags: ['React', 'Tailwind CSS', 'Responsive web'],
      href: GITHUB_PROFILE,
      label: 'GitHub',
      image: '/images/project-website.svg',
      imageAlt: 'Illustration of a responsive website in a browser window',
      visual3d: 'website' as const,
    },
    {
      title: 'E-Commerce application',
      description:
        'Spring Boot + React commerce — catalog, auth, orders, with QA built into delivery.',
      tags: ['Spring Boot', 'React', 'Full stack'],
      href: GITHUB_PROFILE,
      label: 'GitHub',
      image: '/images/project-ecommerce.svg',
      imageAlt: 'Colorful illustration of e-commerce storefront and products',
      visual3d: 'ecommerce' as const,
    },
    {
      title: 'Cloud application',
      description:
        'Cloud deployment, API automation, and platform validation for scale and stability.',
      tags: ['Cloud', 'API & automation', 'DevOps'],
      href: GITHUB_PROFILE,
      label: 'GitHub',
      image: '/images/project-cloud.svg',
      imageAlt: 'Illustration of cloud infrastructure and connected services',
      visual3d: 'cloud' as const,
    },
    {
      title: 'AI agents',
      description:
        'OpenAI agent workflows with n8n and LangFlow — prompt design plus test patterns.',
      tags: ['OpenAI', 'n8n', 'LangFlow'],
      href: GITHUB_PROFILE,
      label: 'GitHub',
      image: '/images/project-ai.svg',
      imageAlt: 'Illustration of AI neural network and automation nodes',
      visual3d: 'ai' as const,
    },
  ],
  experience: [
    {
      period: '2024 — Present',
      title: 'Freelance Full Stack Developer',
      company: 'Independent — Web & Mobile Applications',
      points: [
        'Build responsive websites and full-stack web applications for freelance clients.',
        'Develop mobile-friendly interfaces and cross-device experiences with React and Tailwind CSS.',
        'Design and implement REST APIs with Spring Boot for business dashboards and e-commerce flows.',
        'Handle requirements gathering, development, testing, and client handoff end to end.',
        'Deliver cloud-backed applications with a focus on clean UI, reliable APIs, and QA discipline.',
      ],
    },
    {
      period: 'Nov 2023 — Jan 2026',
      title: 'Software Test Engineer · Full Stack Developer',
      company: 'PTR Technology — Hyderabad, India',
      points: [
        'Designed and developed scalable backend REST APIs with Java and Spring Boot.',
        'Performed manual, regression, and API testing for web and cloud applications.',
        'Built automation frameworks with Selenium WebDriver, Cucumber BDD, and TestNG.',
        'Validated cloud-based applications — business logic, database integrity, and microservices.',
        'Collaborated in Agile/Scrum teams on defect resolution, RCA, and release quality.',
        'Improved test coverage through automation and reusable test components.',
      ],
    },
  ],
  education: [
    {
      title: 'B.Tech — Computer Science & Engineering',
      subtitle: 'Graduated 2023',
      year: '2023',
    },
    {
      title: 'Intermediate (12th grade)',
      subtitle: 'Completed 2019',
      year: '2019',
    },
    {
      title: 'Secondary School Certificate (SSC)',
      subtitle: 'Completed 2017',
      year: '2017',
    },
  ],
  contact: {
    email: 'mohdniyazullah@gmail.com',
    emails: ['mohdniyazullah@gmail.com'],
    linkedin: LINKEDIN_PROFILE,
    github: GITHUB_PROFILE,
    /** Shown on site + chat; `tel` must be E.164 without spaces */
    phoneDisplay: '+91 79894 78780',
    phoneTel: '+917989478780',
    whatsapp: 'https://wa.me/917989478780',
  },
}
