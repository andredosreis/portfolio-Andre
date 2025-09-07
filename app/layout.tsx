import type { Metadata } from 'next'
import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

// Carrega as fontes do Google. As variáveis definidas aqui são usadas em
// `globals.css` para configurar as classes utilitárias do Tailwind.
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

/*
 * Metadados globais para a aplicação. Ajuste `title`, `description` e
 * `metadataBase` para reflectirem a sua marca pessoal e domínio.
 */
export const metadata: Metadata = {
  title: 'André dos Reis — Full‑Stack Developer',
  description: 'Crio produtos digitais rápidos, acessíveis e orientados a resultados. , PT.',
  metadataBase: new URL('https://portfolio-exemplo.dev'),
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className="dark" suppressHydrationWarning>
      {/*
        O atributo `class="dark"` aplica o tema escuro por padrão. Para iniciar
        no modo claro, remova "dark" daqui e controle via localStorage (veja
        ThemeToggle em `page.tsx`).
      */}
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  )
}
