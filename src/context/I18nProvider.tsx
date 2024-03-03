'use client'

import { getLocale } from '@/app/[lang]/locales'
import React, { createContext, useContext, useEffect, useState } from 'react'

export interface II18nContext {
  t: any
}

const I18nContext = createContext<II18nContext>({
  t: {}
})

export const useI18nProvider = (): II18nContext => useContext(I18nContext)

export const I18nProvider: React.FC<{
  children: React.ReactNode
  lang: string
}> = ({ children, lang }) => {
  const [t, setT] = useState<II18nContext>(getLocale(lang))

  useEffect(() => {
    setT(() => getLocale(lang))
  }, [lang])

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>
}
