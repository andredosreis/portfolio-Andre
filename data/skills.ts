export type Skill = { name: string; icon: string }

export const SKILLS: Record<string, readonly Skill[]> = {
  Linguagens: [
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'Python',     icon: '/icons/python.png' },
    { name: 'SQL',        icon: '/icons/sql.png' },
  ],
  Frontend: [
    { name: 'React',    icon: '/icons/react.png' },
    { name: 'Next.js',  icon: '/icons/nextjs.png' },
    { name: 'Tailwind', icon: '/icons/tailwind.png' },
    { name: 'Vite',     icon: '/icons/react.png' },
    { name: 'PWA',      icon: '/icons/react.png' },
  ],
  Backend: [
    { name: 'Node.js',  icon: '/icons/nodejs.png' },
    { name: 'Express',  icon: '/icons/express.png' },
    { name: 'Zod',      icon: '/icons/typescript.png' },
    { name: 'JWT',      icon: '/icons/nodejs.png' },
    { name: 'Sentry',   icon: '/icons/javascript.png' },
    { name: 'Pino',     icon: '/icons/nodejs.png' },
  ],
  'Base de Dados': [
    { name: 'MongoDB',    icon: '/icons/mongodb.png' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
    { name: 'Supabase',   icon: '/icons/postgresql.png' },
  ],
  'IA & LLM': [
    { name: 'OpenAI',    icon: '/icons/openai.png' },
    { name: 'LangGraph', icon: '/icons/openai.png' },
    { name: 'CrewAI',    icon: '/icons/openai.png' },
    { name: 'n8n',       icon: '/icons/n8n.png' },
    { name: 'RAG',       icon: '/icons/rag.png' },
  ],
  DevOps: [
    { name: 'Docker',         icon: '/icons/docker.png' },
    { name: 'GitHub Actions', icon: '/icons/vercel.png' },
    { name: 'Vercel',         icon: '/icons/vercel.png' },
  ],
  Mensageria: [
    { name: 'Evolution API', icon: '/icons/n8n.png' },
    { name: 'Z-API',         icon: '/icons/n8n.png' },
    { name: 'WhatsApp',      icon: '/icons/n8n.png' },
  ],
} as const
