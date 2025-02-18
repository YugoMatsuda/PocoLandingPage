'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { en } from '@/locales/en'
import { ja } from '@/locales/ja'

type Locale = 'en' | 'ja'
type Translations = typeof en

interface LocaleContextType {
  locale: Locale
  translations: Translations
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const translations = locale === 'ja' ? ja : en

  return (
    <LocaleContext.Provider value={{ locale, translations, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
} 