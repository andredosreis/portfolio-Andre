/*
 * Lista de projetos futuros ou em andamento.
 *
 * Estes projetos representam iniciativas que ainda não estão concluídas. Mantenha as
 * informações breves até terem resultados mensuráveis. Use o mesmo formato de
 * `projects.ts` para facilitar a manutenção: title, summary, tags, live (opcional),
 * repo (opcional) e cover (imagem). Para adicionar um novo projeto, copie um
 * objecto existente e ajuste os campos.
 */
export const FUTUROS = [
  {
    title: 'Plataforma de Mentoria',
    summary: 'Em desenvolvimento: uma plataforma que conecta mentores e mentorados de tecnologia.',
    tags: ['Next.js', 'MongoDB', 'Stripe'],
    live: null,
    repo: null,
    cover: '/icons/netlify.png', // placeholder, substitua pela capa do projeto quando estiver pronta
  },
  
  {
    title: 'Portal De Curso EAD',
    summary: 'Plataforma de cursos com alta segurança, autenticação e pagamentos.',
    tags: ['React', 'Node', 'PostgreSQL', 'Stripe'],
    metrics: ['99,9% uptime', '+40% de retenção'],
    live: 'https://cursos-mayara.dev',
    repo: 'https://github.com/user/portal-cursos',
    cover: 'https://picsum.photos/seed/cursos/960/540',
  },
] as const;