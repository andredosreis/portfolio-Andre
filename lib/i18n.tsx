'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'pt' | 'en'

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nCtx>({ lang: 'pt', setLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') setLangState(saved)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('lang', l)
    document.documentElement.lang = l === 'pt' ? 'pt-PT' : 'en'
  }

  return <I18nContext.Provider value={{ lang, setLang }}>{children}</I18nContext.Provider>
}

export function useLanguage() {
  return useContext(I18nContext)
}
