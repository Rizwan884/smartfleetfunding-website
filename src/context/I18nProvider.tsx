'use client'

import { getLocale } from '@/app/[lang]/locales'
import { IJSON } from '@/utils/types'
import React, { createContext, useContext, useEffect, useState } from 'react'

export interface II18nContext {
  t: IJSON
}

const I18nContext = createContext<II18nContext>({
  t: {
    navbar: {
      home: '',
      services: '',
      faq: '',
      aboutUs: '',
      contact: ''
    },
    languages: {
      current: { title: '', locale: '' },
      available: []
    },
    home: {
      cards: [
        {
          title: '',
          shortDescription: '',
          regular: '',
          strong: '',
          icon: '',
          iconBack: ''
        }
      ],
      cardsInfo: [
        {
          title: '',
          href: '',
          sections: [{ heading: '', items: [] }],
          icon: '',
          iconBack: ''
        }
      ],
      headerCardInfo: [{ header: '', descripcion: '' }],
      SectionVideo: [{ title: '', descripcion: '', strong: '' }],
      footer: [
        {
          home: '',
          services: '',
          fullfact: '',
          fespay: '',
          freightbroke: '',
          fuelcard: '',
          faq: '',
          aboutus: '',
          contact: '',
          curious: ''
        }
      ],
      sectionInfo: [
        {
          title: '',
          titleBreak: '',
          descripcion: '',
          lineBreak: '',
          breakText: '',
          button: ''
        }
      ],
      slider: [
        {
          title: '',
          strong: '',
          button: '',
          image: '',
          imageMobile: '',
          href: ''
        }
      ],
      cardsTitle: ''
    },
    fullcard: {
      header: [],
      carruzel: [],
      helpTitle: '',
      helpCards: [],
      helpcardsTwo: [],
      form: [],
      testimonials: [],
      accordionItems: [],
      titleForm: '',
      pageTitle: '',
      pagestrong: ''
    },
    fespay: {
      pageTitle: '',
      pagestrong: '',
      welcomeTitle: '',
      welcomeDescription: '',
      stepsTitle: '',
      steps: [],
      Benefits: [],
      BenefitsTwo: [],
      benefitsTitle: '',
      form: [],
      accordionTitle: '',
      accordionItems: []
    },
    fuelcard: {
      pageTitle: '',
      pagetitleStrong: '',
      road: [],
      cardsFuel: [],
      fuelCardSection: [],
      fuelCardSectionTitle: '',
      fuelCardSectionDescription: '',
      formTitle: '',
      formSelectsOptions: [],
      formFullName: '',
      formEmail: '',
      formCompany: '',
      formPhone: '',
      formMessage: '',
      formCheck: '',
      formBreak: '',
      formButton: '',
      checkboxError: '',
      formSubmitted: ''
    },
    freightbroker: {
      pageTitle: '',
      titleStrong: '',
      titleForm: '',
      needsTitle: '',
      needs: [],
      needsTwo: [],
      needsButton: '',
      needsButtontwo: '',
      needsFinalText: '',
      needsFinalTextStrong: '',
      programTitle: '',
      programTitleWeb: '',
      programTitleWebBreak: '',
      programs: [],
      provide: [],
      provideTitle: '',
      helpYou: { title: '', image: '', items: [] },
      formFullName: '',
      formEmail: '',
      formCompany: '',
      formPhone: '',
      formMessage: '',
      formCheck: '',
      formBreak: '',
      formButton: '',
      checkboxError: '',
      formSubmitted: ''
    },
    faqs: {
      accordionInstaItems: [],
      faqTitle: ''
    },
    about: {
      pageTitle: '',
      pagestrong: '',
      knowTitle: '',
      knowStrong: '',
      cards: [],
      cardsTwo: [],
      knowSection: []
    },
    contact: {
      titleForm: '',
      contactTitle: '',
      contactTitleForm: '',
      contactTitleStrong: '',
      contacttitleBreak: '',
      formName: '',
      formEmail: '',
      formCompany: '',
      formPhone: '',
      formMessage: '',
      formCheck: '',
      formBreak: '',
      formButton: '',
      checkboxError: '',
      formSubmitted: ''
    },
    blogs: {
      blogInfo: []
    }
  }
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
