import * as React from 'react'
import { cn } from '@/lib/utils'
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => { return (<textarea className={cn('flex min-h-[80px] w-full rounded-2xl border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary', className)} ref={ref} {...props} />)})
Textarea.displayName='Textarea'
