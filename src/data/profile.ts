/** Portfolio copy — aligned with resume (Mohd Niyaz Ullah). */

export const profile = {
  name: 'Mohd Niyaz Ullah',
  role: 'Full Stack Developer · Software Test Engineer',
  location: 'Hyderabad, Telangana, India',
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
    value: '2',
    suffix: '+',
    caption: 'Years shipping APIs, interfaces, and automated quality',
  },
  tagline:
    'Engineering and quality as one practice: Spring Boot services and React experiences, hardened with disciplined API and UI automation across cloud-native, microservices environments.',
  about: [
    'I operate at the intersection of product engineering and verification — building REST APIs with Java and Spring Boot, shaping React front ends, and owning the test strategy that keeps releases predictable. Two-plus years in Agile teams delivering web and cloud systems where integration risk is real.',
    'Stack spans Java, TypeScript, JavaScript, and Python; React with Redux Toolkit and Tailwind; Node and Express where needed; MySQL, MongoDB, and DynamoDB; AWS, Docker, GitHub Actions, and CI/CD. On the QA side: Selenium WebDriver, Playwright, Cucumber BDD, TestNG, JUnit, Postman, and RestAssured.',
    'Known for clear communication, fast ramp-up on new domains, and maintainable code. English, Urdu, and Hindi.',
  ],
  skillGroups: [
    {
      title: 'Languages',
      items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    },
    {
      title: 'Frontend',
      items: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML & CSS'],
    },
    {
      title: 'Backend & APIs',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices'],
    },
    {
      title: 'Testing & QA',
      items: [
        'Selenium WebDriver',
        'Playwright',
        'Cucumber BDD',
        'TestNG',
        'JUnit',
        'Postman',
        'RestAssured',
      ],
    },
    {
      title: 'Data',
      items: ['MySQL', 'MongoDB', 'DynamoDB'],
    },
    {
      title: 'Cloud & delivery',
      items: ['AWS', 'Docker', 'Git & GitHub', 'GitHub Actions', 'CI/CD'],
    },
    {
      title: 'Tooling',
      items: ['Maven', 'npm', 'VS Code', 'IntelliJ IDEA'],
    },
    {
      title: 'AI & automation',
      items: [
        'AI-assisted testing',
        'Prompt engineering',
        'OpenAI APIs',
        'n8n',
        'LangFlow',
      ],
    },
  ],
  skillsBanner: '/images/skills-banner.svg',
  projects: [
    {
      title: 'E-Commerce application',
      description:
        'Full-stack commerce: Spring Boot services and a React client for catalog, auth, and orders — with performance and reliability validation baked into delivery.',
      tags: ['Spring Boot', 'React', 'Full stack'],
      href: 'https://github.com/MohdNiyazUllah-javadeveloper',
      label: 'GitHub',
      image: '/images/project-ecommerce.svg',
      imageAlt: 'Colorful illustration of e-commerce storefront and products',
      visual3d: 'ecommerce' as const,
    },
    {
      title: 'Cloud-based application',
      description:
        'Deployment and monitoring context: API coverage, automation suites, and system validation to support scale and stability of cloud infrastructure.',
      tags: ['Cloud', 'API & automation', 'Platform QA'],
      href: 'https://github.com/MohdNiyazUllah-javadeveloper',
      label: 'GitHub',
      image: '/images/project-cloud.svg',
      imageAlt: 'Illustration of cloud infrastructure and connected services',
      visual3d: 'cloud' as const,
    },
    {
      title: 'AI agents',
      description:
        'Agent-style workflows with OpenAI APIs, orchestration in n8n and LangFlow, and deliberate prompt design — including testing patterns where AI compounds leverage.',
      tags: ['AI agents', 'OpenAI APIs', 'n8n', 'LangFlow'],
      href: 'https://github.com/MohdNiyazUllah-javadeveloper',
      label: 'GitHub',
      image: '/images/project-ai.svg',
      imageAlt: 'Illustration of AI neural network and automation nodes',
      visual3d: 'ai' as const,
    },
  ],
  experience: [
    {
      period: 'Nov 2023 — Jan 2026',
      title: 'Software Test Engineer · Full Stack Developer',
      company: 'PTR Technology — Hyderabad, India',
      detail:
        'Designed and developed scalable backend REST APIs with Java and Spring Boot. Performed manual, regression, and API testing for web and cloud applications. Built automation with Selenium WebDriver, Cucumber BDD, and TestNG. Worked on testing and validation for a cloud-based application, including business logic, database integrity, and microservices integrations. Collaborated in cross-functional Agile/Scrum teams on defect resolution, RCA, and quality. Improved test coverage through automation and reusable test components.',
    },
  ],
  education: [
    {
      title: 'B.Tech — Computer Science & Engineering',
      subtitle: 'Graduated 2023',
    },
    {
      title: 'Intermediate (12th grade)',
      subtitle: 'Completed 2019',
    },
    {
      title: 'Secondary School Certificate (SSC)',
      subtitle: 'Completed 2017',
    },
  ],
  contact: {
    email: 'mohdniyazullah@gmail.com',
    linkedin: 'https://www.linkedin.com/in/md-niyaz-ullah',
    github: 'https://github.com/MohdNiyazUllah-javadeveloper',
    /** Shown on site + chat; `tel` must be E.164 without spaces */
    phoneDisplay: '+91 79894 78780',
    phoneTel: '+917989478780',
    whatsapp: 'https://wa.me/917989478780',
  },
}
