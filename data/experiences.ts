/*
 * Lista de experiências profissionais e projetos pessoais.
 *
 * Cada objeto representa uma linha do tempo com:
 *   - company: nome da empresa ou projeto.
 *   - role: cargo ou função desempenhada.
 *   - period: intervalo de tempo (ex.: '2023 — hoje').
 *   - location: cidade/país ou remoto.
 *   - bullets: lista de responsabilidades, conquistas ou highlights. Cada item
 *              aparece como bullet na timeline.
 *
 * Adicione novos itens ou ajuste as datas conforme necessário.
 */
export const EXPERIENCIAS = [
  {
    company: 'Freelancer',
    role: 'Full‑Stack Developer',
    period: '2023 — hoje',
    location: 'Portugal (remoto)',
    bullets: [
      'Entrego MVPs em 4–8 semanas com foco em métricas de negócio.',
      'Arquitetura escalável, testes e monitorização desde o dia 1.',
    ],
  },

] as const;

/*
  {
    company: 'Projeto Pessoal',
    role: "Autor – 'A Virada de Chave'",
    period: '2025',
    location: 'PT/BR',
    bullets: [
      'Conteúdo sobre mentalidade, tecnologia e carreira para devs.',
    ],
  },
*/