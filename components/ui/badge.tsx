import * as React from 'react'
import { cn } from '@/lib/utils'
export function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'secondary' | 'outline' }) {return (<div className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',variant==='default'&&'border-transparent bg-primary/10 text-foreground',variant==='secondary'&&'border-transparent bg-muted text-foreground',variant==='outline'&&'text-muted-foreground',className)} {...props} />)}
