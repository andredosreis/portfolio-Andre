'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Globe, Github, Linkedin, Mail, MapPin, Phone, Sun, Moon, ExternalLink, Sparkles, Instagram } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { SITE } from '@/data/site'
import { PROJETOS } from '@/data/projects'
import { EXPERIENCIAS } from '@/data/experiences'
import { SKILLS } from '@/data/skills'
import { translations, type TranslatedProject, type TranslatedExperience } from '@/data/translations'
import { useLanguage } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

function Section({ id, title, description, children }: { id: string; title: string; description?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
          </div>
          <Sparkles className="h-6 w-6 opacity-30" />
        </div>
        {children}
      </div>
    </section>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(true)
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])
  return (
    <Button variant="outline" size="icon" aria-label="Alternar tema" onClick={() => setDark(!dark)}>
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

function LangToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Switch language"
      onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
    >
      <span className="text-xs font-bold tracking-wider">{lang.toUpperCase()}</span>
    </Button>
  )
}

function Socials({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a aria-label="GitHub" className="opacity-80 hover:opacity-100" href={SITE.socials.github} target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
      <a aria-label="LinkedIn" className="opacity-80 hover:opacity-100" href={SITE.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
      <a aria-label="Instagram" className="opacity-80 hover:opacity-100" href={SITE.socials.instagram} target="_blank" rel="noreferrer"><Instagram className="h-5 w-5" /></a>
      <a aria-label="Website" className="opacity-80 hover:opacity-100" href={SITE.website} target="_blank" rel="noreferrer"><Globe className="h-5 w-5" /></a>
    </div>
  )
}

function Header() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const NAV = [
    { href: '#sobre',       label: t.nav.sobre },
    { href: '#projetos',    label: t.nav.projetos },
    { href: '/futuros',     label: t.nav.futuros },
    { href: '#experiencia', label: t.nav.experiencia },
    { href: '#skills',      label: t.nav.skills },
    { href: '#contato',     label: t.nav.contato },
  ]
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="font-bold tracking-tight">{SITE.name}</a>
        <nav className="hidden gap-6 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <Button asChild><a href="#contato">{t.nav.cta}</a></Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(1200px_600px_at_50%_-20%,hsl(var(--primary)_/_0.25),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold leading-tight sm:text-5xl">{SITE.name}</motion.h1>
          <p className="mt-3 text-xl text-muted-foreground">{SITE.role}</p>
          <p className="mt-4 max-w-xl text-muted-foreground">{t.hero.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild><a href="#projetos">{t.hero.cta} <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
            <Button variant="outline" asChild><a href="/cv-andre.pdf" download><Download className="mr-2 h-4 w-4" />{t.hero.download}</a></Button>
            <Socials />
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {SITE.location}</span>
            <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> {SITE.email}</span>
            <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {SITE.phone}</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-sm"
        >
          <Image src="/hero.webp" alt="Foto do proprietário do portfólio" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" priority />
        </motion.div>
      </div>
    </section>
  )
}

function AboutContent({ lang }: { lang: 'pt' | 'en' }) {
  if (lang === 'en') {
    return (
      <div className="prose dark:prose-invert">
        <p>
          Full Stack Software Engineer specialised in multi-tenant SaaS systems, AI automation, and systems integration.
          Founder and sole engineer of <strong>Marcaí</strong> — a production SaaS for the aesthetics/health sector,
          featuring a WhatsApp chatbot (Two-Tier LLM), PWA, CI/CD, and full architecture built from scratch.
        </p>
        <p>
          Driven by formal technical documentation: PRD, HLD, FDD, and ADRs. Currently studying:{' '}
          <strong>MBA in Software Engineering with AI</strong> at <strong>Full Cycle</strong> and{' '}
          <strong>Bachelor&apos;s in Applied Technology</strong> at <strong>BYU–Idaho</strong>.
          Based in <strong>{SITE.location}</strong>, available for remote projects.
        </p>
      </div>
    )
  }
  return (
    <div className="prose dark:prose-invert">
      <p>
        Engenheiro de Software Full Stack especializado em sistemas SaaS multi-tenant,
        automação com IA e integração de sistemas. Fundador e único engenheiro do{' '}
        <strong>Marcaí</strong> — SaaS em produção para o sector de estética/saúde,
        com chatbot WhatsApp (Two-Tier LLM), PWA, CI/CD e arquitectura completa do zero.
      </p>
      <p>
        Trabalho orientado por documentação técnica formal: PRD, HLD, FDD e ADRs.
        Formação em curso:{' '}
        <strong>MBA em Engenharia de Software com IA</strong> pela{' '}
        <strong>Full Cycle</strong> e{' '}
        <strong>Bachelor&apos;s em Applied Technology</strong> pela{' '}
        <strong>BYU–Idaho</strong>. Baseado em <strong>{SITE.location}</strong>,
        disponível para projectos remotos.
      </p>
    </div>
  )
}

function ProjetoCard({ p, t }: { p: (typeof PROJETOS)[number]; t: TranslatedProject }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={p.cover}
          alt={`Capa do projeto ${p.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span>{p.title}</span>
          <div className="flex gap-2">
            {p.live && (<a href={p.live} target="_blank" rel="noreferrer" aria-label="Ver site"><ExternalLink className="h-5 w-5 opacity-80 hover:opacity-100" /></a>)}
            {p.repo && (<a href={p.repo} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5 opacity-80 hover:opacity-100" /></a>)}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{t.summary}</p>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((tag) => (<Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>))}
        </div>
        {t.metrics.length > 0 && (
          <ul className="mt-2 grid gap-1 text-sm">
            {t.metrics.map((m) => (<li key={m} className="text-emerald-400">• {m}</li>))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

function ExperienciaItem({ item, t }: { item: (typeof EXPERIENCIAS)[number]; t: TranslatedExperience }) {
  return (
    <li className="relative pl-6">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary" />
      <div className="flex flex-wrap items-baseline gap-x-2">
        <h3 className="font-semibold">{t.role}</h3>
        <span className="text-muted-foreground">@ {item.company} • {item.period}</span>
      </div>
      <div className="text-xs text-muted-foreground">{t.location}</div>
      <ul className="mt-2 grid gap-1 text-sm">
        {t.bullets.map((b, i) => (<li key={i}>• {b}</li>))}
      </ul>
    </li>
  )
}

function SkillsList() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {Object.entries(SKILLS).map(([categoria, lista]) => (
        <Card key={categoria}>
          <CardHeader>
            <CardTitle className="text-base">{t.skillCategories[categoria] ?? categoria}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {lista.map((skill) => (
              <span key={skill.name} className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs">
                <img src={skill.icon} alt={skill.name} className="h-4 w-4" loading="lazy" />
                {skill.name}
              </span>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function Contato() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const to = SITE.email
  const subject = encodeURIComponent(t.contact.emailSubject)
  const body    = encodeURIComponent(t.contact.emailBody)
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`
  const mailto    = `mailto:${to}?subject=${subject}&body=${body}`
  const waLink    = `https://wa.me/message/JSQGFMRD36PGE1?text=${encodeURIComponent(t.contact.waMessage)}`

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader><CardTitle>{t.contact.cardTitle}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{t.contact.cardDesc}</p>
          <div className="flex flex-wrap gap-2">
            <Button asChild><a href={gmailLink} target="_blank" rel="noreferrer">{t.contact.gmail}</a></Button>
            <Button variant="outline" asChild><a href={mailto}>{t.contact.mailto}</a></Button>
            <Button variant="outline" asChild><a href={waLink} target="_blank" rel="noreferrer">{t.contact.whatsapp}</a></Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>{t.contact.faqTitle}</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          {t.contact.faq.map((item) => (
            <p key={item.label}><strong>{item.label}</strong>: {item.value}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default function Page() {
  const { lang } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    document.title = `${SITE.name} — ${SITE.role}`
    const metaDesc = document.querySelector('meta[name="description"]')
    const content = `${SITE.tagline} ${SITE.location}.`
    if (metaDesc) metaDesc.setAttribute('content', content)
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m) }
  }, [lang])

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name, jobTitle: SITE.role, email: `mailto:${SITE.email}`, telephone: SITE.phone, url: SITE.website,
    sameAs: [SITE.socials.github, SITE.socials.linkedin], knowsAbout: SITE.keywords,
    address: { '@type': 'PostalAddress', addressLocality: SITE.location },
  }), [])

  const tp = t.projects as unknown as TranslatedProject[]
  const te = t.experiences as unknown as TranslatedExperience[]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero />
      <Section id="sobre" title={t.sections.sobre.title} description={t.sections.sobre.desc}>
        <AboutContent lang={lang} />
      </Section>
      <Section id="projetos" title={t.sections.projetos.title} description={t.sections.projetos.desc}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJETOS.map((p, i) => <ProjetoCard key={p.title} p={p} t={tp[i]!} />)}
        </div>
      </Section>
      <Section id="experiencia" title={t.sections.experiencia.title} description={t.sections.experiencia.desc}>
        <ol className="relative space-y-6 border-l pl-6">
          {EXPERIENCIAS.map((item, i) => <ExperienciaItem key={item.company + item.period} item={item} t={te[i]!} />)}
        </ol>
      </Section>
      <Section id="skills" title={t.sections.skills.title} description={t.sections.skills.desc}>
        <SkillsList />
      </Section>
      <Section id="contato" title={t.sections.contato.title} description={t.sections.contato.desc}>
        <Contato />
      </Section>
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {SITE.name}. {t.footer.rights}</p>
          <Socials />
        </div>
      </footer>
    </main>
  )
}
