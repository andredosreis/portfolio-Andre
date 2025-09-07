/*
 * Lista de skills organizada por categoria.
 *
 * Cada categoria (Linguagens, Frontend, Backend, etc.) contém um array de objetos
 * com `name` e `icon`. A propriedade `icon` deve apontar para um arquivo de ícone
 * dentro de `public/icons/`. Todos os ícones foram gerados automaticamente em
 * `public/icons` como placeholders (pequenos círculos cianos com abreviações).
 *
 * Para adicionar ou remover skills, basta editar os arrays abaixo. Se adicionar
 * uma nova tecnologia, crie um ícone correspondente em `public/icons/` ou
 * altere a propriedade `icon` para apontar para uma imagem sua.
 */
export type Skill = { name: string; icon: string }

export const SKILLS: Record<string, readonly Skill[]> = {
  // Linguagens de programação e consulta de dados
  Linguagens: [
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'SQL',        icon: '/icons/sql.png' },
    { name: 'Python',     icon: '/icons/python.png' },
  ],
  // Bibliotecas e frameworks de frontend
  Frontend: [
    { name: 'React',     icon: '/icons/react.png' },
    { name: 'Next.js',   icon: '/icons/nextjs.png' },
    { name: 'Tailwind',  icon: '/icons/tailwind.png' },
   
  ],
  // Ferramentas e frameworks de backend
  Backend: [
    { name: 'Node.js',     icon: '/icons/nodejs.png' },
    { name: 'Express',     icon: '/icons/express.png' },
    { name: 'MongoDB',     icon: '/icons/mongodb.png' },
    { name: 'PostgreSQL',  icon: '/icons/postgresql.png' },
  ],
  // Serviços e ferramentas de devops/deploy
  DevOps: [
    { name: 'Docker', icon: '/icons/docker.png' },
    { name: 'Vercel', icon: '/icons/vercel.png' },
    
  ],
  // Inteligência Artificial e automações
  IA: [
    { name: 'OpenAI',  icon: '/icons/openai.png' },
    { name: 'n8n',     icon: '/icons/n8n.png' },
    { name: 'RAG',     icon: '/icons/rag.png' },
    { name: 'Vetores', icon: '/icons/vetores.png' },
  ],
} as const;
