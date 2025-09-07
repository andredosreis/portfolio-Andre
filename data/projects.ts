/*
 * Array de projetos em destaque.
 *
 * Cada objeto representa um estudo de caso curto. Você pode alterar, remover ou
 * adicionar quantos projetos desejar. Campos comuns:
 *   - title: título do projeto.
 *   - summary: breve descrição do problema/solução.
 *   - tags: tecnologias utilizadas (palavras simples).
 *   - metrics: lista de métricas ou resultados (percentuais, números). Opcional.
 *   - live: URL de demonstração do projeto ao vivo. Pode ser omitido.
 *   - repo: URL do repositório no GitHub ou outra plataforma.
 *   - cover: URL da imagem de capa (use uma URL externa ou coloque um arquivo em
 *            `/public` e referencie como '/meu-projeto.png').
 */
export const PROJETOS = [
  {
    title: 'Laura SaaS – Agenda e Pacotes',
    summary: 'Sistema SaaS para clínica estética: agendamentos, pacotes e relatórios.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
    metrics: ['-37% no tempo de marcação', '+22% taxa de retorno'],
    live: 'https://laura-saas.dev',
    repo: 'https://github.com/andredosreis/laura-saas-agenda',
    cover: 'https://picsum.photos/seed/laura/960/540',
  },
  
  {
    title: 'Agente IA n8n + WhatsApp',
    summary: 'Assistente que entende mensagens e agenda automaticamente via WhatsApp.',
    tags: ['n8n', 'OpenAI', 'Webhook', 'Docker'],
    metrics: ['-60% tempo de suporte', '+18% conversão'],
    live: 'https://demo-agente.dev',
    repo: 'https://github.com/user/agente-ia-n8n',
    cover: 'https://picsum.photos/seed/ia/960/540',
  },
] as const;
