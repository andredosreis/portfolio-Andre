export const translations = {
  pt: {
    nav: {
      sobre: 'Sobre',
      projetos: 'Projetos',
      futuros: 'Projetos em Desenvolvimento',
      experiencia: 'Experiência',
      skills: 'Skills',
      contato: 'Contacto',
      cta: 'Fale comigo',
    },
    hero: {
      cta: 'Ver projetos',
      download: 'Download CV',
      tagline: 'Engenheiro full-stack especializado em SaaS multi-tenant, automação com IA e integração de sistemas — do MVP ao produto em produção.',
    },
    sections: {
      sobre: { title: 'Sobre mim', desc: 'Rápido resumo de quem eu sou e como posso ajudar o seu negócio.' },
      projetos: { title: 'Projetos em destaque', desc: 'Estudos de caso curtos com impacto de negócio.' },
      experiencia: { title: 'Experiência', desc: 'Onde atuei e no que entreguei.' },
      skills: { title: 'Skills', desc: 'Tecnologias e competências que uso no dia a dia.' },
      contato: { title: 'Contacto', desc: 'Quer tirar uma ideia do papel? Vamos falar.' },
    },
    skillCategories: {
      'Linguagens': 'Linguagens',
      'Frontend': 'Frontend',
      'Backend': 'Backend',
      'Base de Dados': 'Base de Dados',
      'IA & LLM': 'IA & LLM',
      'DevOps': 'DevOps',
      'Mensageria': 'Mensageria',
    } as Record<string, string>,
    projects: [
      {
        summary: 'SaaS multi-tenant em produção para o sector de estética/saúde. Chatbot WhatsApp com Two-Tier LLM (GPT-3.5 + GPT-4o-mini Function Calling), PWA com Web Push, isolamento total por BD e CI/CD completo.',
        metrics: [
          'Multi-tenant com isolamento total por base de dados',
          'Agendamento automático via linguagem natural (WhatsApp)',
          'Deploy split: Render + Vercel com GitHub Actions CI/CD',
        ],
      },
      {
        summary: 'Análise técnica completa de uma stack em produção com dados reais: monorepo Turborepo, orquestração de agentes IA com cadeia de comando multi-agente (fork AIOX) e avaliação de qualidade arquitectural.',
        metrics: [
          'Mapeamento completo do monorepo e fronteiras de serviço',
          'Identificação de padrões, acoplamentos e riscos arquitecturais',
          'Análise da cadeia de agentes IA e quality gates',
        ],
      },
      {
        summary: 'Engenharia reversa de plataforma multi-tenant para infoprodutores: mapeamento da arquitectura de segurança (RLS PostgreSQL), fluxo de autenticação, automação de acesso pós-compra via webhooks e entrega de conteúdo como PWA.',
        metrics: [
          'Arquitectura de segurança mapeada end-to-end (RLS + Edge Functions)',
          'Fluxo de pagamento e liberação de acesso totalmente documentados',
        ],
      },
    ],
    experiences: [
      {
        role: 'Software Engineer & Founder',
        location: 'Portugal (independente)',
        bullets: [
          'SaaS multi-tenant em produção para o sector de estética/saúde — arquitectura, desenvolvimento, deploy e roadmap como único engenheiro.',
          'Multi-tenant com isolamento total por base de dados (Mongoose useDb()) — migrado após identificar risco de cross-tenant data leak em produção.',
          'Chatbot WhatsApp com IA: estratégia Two-Tier LLM (GPT-3.5 classificador + GPT-4o-mini Function Calling) para agendamento automático via linguagem natural.',
          'PWA instalável com notificações Web Push (VAPID), service worker e lembretes automáticos via CRON — dual-channel: WhatsApp (clientes) + Web Push (profissional).',
          'Segurança: JWT (access 1h + refresh 7d), rate limiting, Helmet.js, Zod, Pino, Sentry. Deploy: Render (backend) + Vercel (frontend) com CI/CD via GitHub Actions.',
        ],
      },
      {
        role: 'Operador de Cerâmica',
        location: 'Portugal',
        bullets: [
          'Operação em linha de produção cerâmica industrial com foco em qualidade e melhoria contínua segundo a metodologia Kaizen.',
          'Em paralelo, construí competências de engenharia de software de forma autodidacta. Saí em Março de 2026 para me dedicar a tempo inteiro ao desenvolvimento de software.',
        ],
      },
      {
        role: 'Analista de Planejamento e Dados Sénior',
        location: 'Brasil',
        bullets: [
          'Sistema de automação em VBA/Excel integrado ao SAP — eliminou trabalho manual repetitivo e aumentou a produtividade da equipa em +50%, com rastreabilidade de stocks em tempo real.',
          'Análise de dados operacionais e financeiros para suporte à tomada de decisão estratégica.',
          'Participação activa no programa ISO 9001 — responsável pelos processos de análise e planeamento ao nível de qualidade exigido pela certificação.',
        ],
      },
      {
        role: 'Consultor Técnico',
        location: 'Portugal',
        bullets: [
          'Análise de dados financeiros e encerramento de faturamentos referentes a projectos de engenharia petrolífera (âmbito Petrobras).',
          'Planeamento e controlo de projectos com foco em melhoria de resultados operacionais e financeiros.',
        ],
      },
    ],
    contact: {
      cardTitle: 'Vamos conversar',
      cardDesc: 'Descreva rapidamente qual desafio ou problema está a enfrentar. Eu respondo em até 24h úteis.',
      gmail: 'Enviar via Gmail',
      mailto: 'Enviar via e-mail',
      whatsapp: 'WhatsApp',
      emailSubject: 'Olá, Como podemos ajudar-te?',
      emailBody: 'Conte-me um pouco como podemos ajudar-te aqui',
      waMessage: 'Olá André! Eu gostaria de saber mais sobre os seus serviços. Poderia ajudar-me?',
      faqTitle: 'Perguntas frequentes',
      faq: [
        { label: 'Prazos', value: 'MVPs entre 4–8 semanas, conforme escopo.' },
        { label: 'Stack', value: 'React/Next, Python, Node, DB relacional ou NoSQL, integrações.' },
        { label: 'Contrato', value: 'Proposta + cronograma + milestones.' },
      ],
    },
    footer: { rights: 'Todos os direitos reservados.' },
  },

  en: {
    nav: {
      sobre: 'About',
      projetos: 'Projects',
      futuros: 'Projects in Development',
      experiencia: 'Experience',
      skills: 'Skills',
      contato: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      cta: 'See projects',
      download: 'Download CV',
      tagline: 'Full-stack engineer specialised in multi-tenant SaaS, AI automation, and systems integration — from MVP to production product.',
    },
    sections: {
      sobre: { title: 'About me', desc: 'Quick summary of who I am and how I can help your business.' },
      projetos: { title: 'Featured projects', desc: 'Short case studies with real business impact.' },
      experiencia: { title: 'Experience', desc: 'Where I worked and what I delivered.' },
      skills: { title: 'Skills', desc: 'Technologies and competencies I use daily.' },
      contato: { title: 'Contact', desc: 'Want to bring an idea to life? Let\'s talk.' },
    },
    skillCategories: {
      'Linguagens': 'Languages',
      'Frontend': 'Frontend',
      'Backend': 'Backend',
      'Base de Dados': 'Databases',
      'IA & LLM': 'AI & LLM',
      'DevOps': 'DevOps',
      'Mensageria': 'Messaging',
    } as Record<string, string>,
    projects: [
      {
        summary: 'Multi-tenant SaaS in production for the aesthetics/health sector. WhatsApp chatbot with Two-Tier LLM (GPT-3.5 + GPT-4o-mini Function Calling), PWA with Web Push, full DB-level tenant isolation, and complete CI/CD.',
        metrics: [
          'Multi-tenant with full database-level isolation',
          'Automatic scheduling via natural language (WhatsApp)',
          'Split deploy: Render + Vercel with GitHub Actions CI/CD',
        ],
      },
      {
        summary: 'Complete technical analysis of a live production stack with real client data: Turborepo monorepo, multi-agent AI orchestration (AIOX framework fork), and architectural quality assessment.',
        metrics: [
          'Full monorepo and service boundary mapping',
          'Patterns, couplings, and architectural risks identified',
          'AI agent chain and quality gates analysed',
        ],
      },
      {
        summary: 'Reverse engineering of a multi-tenant platform for content creators: security architecture mapping (PostgreSQL RLS), authentication flow, post-purchase access automation via webhooks, and PWA content delivery.',
        metrics: [
          'End-to-end security architecture mapped (RLS + Edge Functions)',
          'Payment and access-release flow fully documented',
        ],
      },
    ],
    experiences: [
      {
        role: 'Software Engineer & Founder',
        location: 'Portugal (independent)',
        bullets: [
          'Multi-tenant SaaS in production for the aesthetics/health sector — sole engineer responsible for architecture, development, deployment, and roadmap.',
          'Multi-tenant isolation at database level (Mongoose useDb()) — migrated after identifying a cross-tenant data leak risk in production.',
          'WhatsApp AI chatbot: Two-Tier LLM strategy (GPT-3.5 classifier + GPT-4o-mini Function Calling) for automated scheduling via natural language.',
          'Installable PWA with Web Push notifications (VAPID), service worker, and automatic CRON reminders — dual-channel: WhatsApp (clients) + Web Push (practitioner).',
          'Security: JWT (access 1h + refresh 7d), rate limiting, Helmet.js, Zod, Pino, Sentry. Deploy: Render (backend) + Vercel (frontend) with CI/CD via GitHub Actions.',
        ],
      },
      {
        role: 'Ceramics Operator',
        location: 'Portugal',
        bullets: [
          'Industrial ceramic production line operation focused on quality and continuous improvement using the Kaizen methodology.',
          'In parallel, I built software engineering skills self-taught. Left in March 2026 to focus on software development full-time.',
        ],
      },
      {
        role: 'Senior Planning and Data Analyst',
        location: 'Brazil',
        bullets: [
          'VBA/Excel automation system integrated with SAP — eliminated repetitive manual work and increased team productivity by +50%, with real-time stock traceability.',
          'Operational and financial data analysis to support strategic decision-making.',
          'Active participation in the ISO 9001 programme — responsible for analysis and planning processes at the required certification quality level.',
        ],
      },
      {
        role: 'Technical Consultant',
        location: 'Portugal',
        bullets: [
          'Financial data analysis and billing settlement for petroleum engineering projects (Petrobras scope).',
          'Project planning and control focused on improving operational and financial results.',
        ],
      },
    ],
    contact: {
      cardTitle: "Let's talk",
      cardDesc: 'Briefly describe the challenge or problem you\'re facing. I reply within 24 business hours.',
      gmail: 'Send via Gmail',
      mailto: 'Send via email',
      whatsapp: 'WhatsApp',
      emailSubject: 'Hi, how can I help you?',
      emailBody: 'Tell me a bit about how I can help you',
      waMessage: 'Hi André! I\'d like to know more about your services. Could you help me?',
      faqTitle: 'Frequently asked questions',
      faq: [
        { label: 'Timelines', value: 'MVPs in 4–8 weeks depending on scope.' },
        { label: 'Stack', value: 'React/Next, Python, Node, relational or NoSQL DB, integrations.' },
        { label: 'Contract', value: 'Proposal + timeline + milestones.' },
      ],
    },
    footer: { rights: 'All rights reserved.' },
  },
} as const

export type Translations = typeof translations
export type Lang = keyof Translations
export type T = Translations[Lang]
export type TranslatedProject = T['projects'][number]
export type TranslatedExperience = T['experiences'][number]
