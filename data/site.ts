/*
 * Informações pessoais e de contacto usadas no portfólio.
 *
 * Ajuste estes campos para personalizar o seu nome, cargo, tagline,
 * localização, email e links de redes sociais. As chaves da propriedade
 * `socials` controlam os ícones de redes na navegação e no rodapé.
 *
 * A propriedade `keywords` fornece palavras‑chave usadas para SEO. Pode
 * incluir até 50 termos separados por vírgulas. Isto ajuda motores de
 * busca a entender o contexto do seu site.
 */
export const SITE = {
  // Nome completo ou marca pessoal
  name: 'André dos Reis',
  // Cargo ou título profissional
  role: 'Full‑Stack Developer',
  // Frase de efeito que resume o seu propósito
  tagline: 'Crio produtos digitais rápidos, acessíveis e orientados a resultados.',
  // Cidade e país onde está baseado (pode ser remoto)
  location: 'Batalha, Portugal',
  // E‑mail profissional. Usado no formulário de contacto e link mailto
  email: 'andredosreis@gmail.com',
  // Telefone para contacto (inclua código do país)
  phone: '+351 9124-62033',
  // URL do seu site pessoal ou domínio onde o portfólio será hospedado
  website: 'https://portfolio-exemplo.dev',
  // Links para redes sociais. Adicione mais campos (ex.: twitter) conforme desejar
  socials: {
    github: 'https://github.com/andredosreis',
    linkedin: 'https://www.linkedin.com/in/andredosreispro',
  },
  // Palavras-chave para SEO. Inclua tecnologias, cargo, nicho, etc.
  keywords: [
    'desenvolvedor full stack',
    'react',
    'next.js',
    'node.js',
    'portfólio dev',
  ],
} as const;
