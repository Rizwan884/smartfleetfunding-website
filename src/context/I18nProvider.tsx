'use client'

import { getLocale } from '@/app/[lang]/locales'
import { IJSON } from '@/utils/types'
import React, { createContext, useContext, useEffect, useState } from 'react'

export interface II18nContext {
  t: IJSON
}

const I18nContext = createContext<II18nContext>({
  t: {}
})

export const useI18nProvider = (): II18nContext => useContext(I18nContext)

export const I18nProvider: React.FC<{
  children: React.ReactNode
  lang: string
}> = ({ children, lang }) => {
  const [t, setT] = useState<II18nContext>({
    t: getLocale(lang)
  })

  useEffect(() => {
    setT(() => ({
      t: getLocale(lang)
    }))
  }, [lang])

  return <I18nContext.Provider value={t}>{children}</I18nContext.Provider>
}
