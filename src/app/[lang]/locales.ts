import { IJSON } from '@/utils/types'
import enUS from '../../locales/en.json'
import es from '../../locales/es.json'

interface ILocale {
  [lang: string]: IJSON
}

const locales: ILocale = {
  'en-US': enUS,
  es: es
}

export const getLocale = (lang: string) => locales[lang]
