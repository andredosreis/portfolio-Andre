/*
 * Lista de projetos futuros ou em andamento (renderizada em /futuros).
 *
 * Estes projetos representam iniciativas que ainda não estão concluídas. A página
 * `app/futuros/page.tsx` usa apenas `title`, `summary` e `tags` de cada objecto
 * (`live` e `repo` ficam disponíveis para uso futuro). Para adicionar um projeto,
 * copie um objecto existente e ajuste os campos.
 */
export const FUTUROS = [
  {
    title: 'VoxLoop',
    summary:
      'Em desenvolvimento: PWA de prática de pronúncia de inglês com avaliação por IA em tempo real (Azure Pronunciation Assessment + Gemini). Arquitetado do zero com metodologia Harness Engineering: PRD completo, invariantes de sistema e quality gates.',
    tags: ['React', 'TypeScript', 'ASP.NET Core', 'Azure AI'],
    live: null,
    repo: null,
  },
  {
    title: 'Gestão de Orçamento Familiar',
    summary:
      'Em desenvolvimento: PWA multi-tenant de gestão financeira familiar com leitura de recibos por IA (foto → despesa lançada) e calendário financeiro com notificações push. Modular monolith com fronteiras validadas por testes de arquitetura.',
    tags: ['C#', 'ASP.NET Core', 'PostgreSQL (RLS)', 'React', 'Python/FastAPI'],
    live: null,
    repo: null,
  },
] as const;
