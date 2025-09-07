/*
 * Página de projetos da Facudldade /em andamento.
 *
 * Esta página lista iniciativas que ainda não estão concluídas. Você pode usar
 * esta secção para mostrar ideias em desenvolvimento ou provas de conceito.
 * Para adicionar ou remover projetos, edite o ficheiro `data/futureProjects.ts`.
 */

'use client'

import { FACULDADE } from '@/data/facudadeProjects'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function FaculdadePage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Projetos da Faculdade</h1>
        <p className="mb-8 text-muted-foreground max-w-2xl">
          Aqui estão os projetos e ideias que estou a desenvolver actualmente. Trabalhos que realizei durante a faculdade, Algumas atividades foram feitas em grupo e outra individualmente.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACULDADE.map((p) => (
            <Card key={p.title} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* botão de retorno à página inicial */}
        <div className="mt-12">
          <Link href="/" className="text-primary underline hover:no-underline">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  )
}