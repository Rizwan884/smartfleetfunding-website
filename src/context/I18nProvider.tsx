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
          iconback: ''
        }
      ],
      carinfo: [
        {
          title: '',
          sections: [{ heading: '', items: [] }],
          icon: '',
          iconback: ''
        }
      ],
      headercardinfo: [{ header: '', descripcion: '' }],
      sectionvideo: [{ title: '', descripcion: '', strong: '' }],
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
      sectioninfo: [
        {
          title: '',
          descripcion: '',
          linebreak: '',
          breaktext: '',
          button: ''
        }
      ],
      slider: [
        { title: '', strong: '', button: '', image: '', imagemobile: '' }
      ],
      cardstitle: ''
    },
    fullcard: {
      header: [],
      carruzel: [],
      helptittle: '',
      helpcards: [],
      helpcardstwo: [],
      form: [],
      testimonials: [],
      accordionItems: [],
      titleform: '',
      pagetittle: '',
      pagestrong: ''
    },
    fespay: {
      pagetittle: '',
      pagestrong: '',
      welcometittle: '',
      welcomedescripcion: '',
      stepstittle: '',
      steps: [],
      Benefits: [],
      Benefitstwo: [],
      benefitstitle: '',
      form: [],
      accordiontittle: '',
      accordionItems: []
    },
    fuelcard: {
      pagetittle: '',
      pagetittlestrong: '',
      road: [],
      cardsfuel: [],
      fuelcardsection: [],
      fuelcardsectiontitle: '',
      fuelcardsectiondescription: '',
      formtitle: '',
      formselectsoptions: [],
      formfullname: '',
      formemail: '',
      formcompany: '',
      formphone: '',
      formmessage: '',
      formcheck: '',
      formbreak: '',
      formbutton: '',
      checkboxError: '',
      formSubmitted: ''
    },
    freightbroker: {
      pagetitle: '',
      titlestrong: '',
      titleform: '',
      needstitle: '',
      needs: [],
      needstwo: [],
      needsbutton: '',
      needsbuttontwo: '',
      needsfinaltext: '',
      needsfinaltextstrong: '',
      programtitle: '',
      programtitleweb: '',
      programtitlewebbreak: '',
      programs: [],
      provide: [],
      providetitle: '',
      helpyou: { title: '', image: '', items: [] },
      formfullname: '',
      formemail: '',
      formcompany: '',
      formphone: '',
      formmessage: '',
      formcheck: '',
      formbreak: '',
      formbutton: '',
      checkboxError: '',
      formSubmitted: ''
    },
    faqs: {
      accordionInstaItems: [],
      faqtitle: ''
    },
    about: {
      pagetitle: '',
      pagestrong: '',
      knowtitle: '',
      knowstrong: '',
      cards: [],
      cardstwo: [],
      knowsection: []
    },
    contact: {
      titleform: '',
      contacttitle: '',
      contacttitleform: '',
      contacttitlestrong: '',
      contacttitlebreak: '',
      formname: '',
      formemail: '',
      formcompany: '',
      formphone: '',
      formmessage: '',
      formcheck: '',
      formbreak: '',
      formbutton: '',
      checkboxError: '',
      formSubmitted: ''
    },
    blogs: {
      bloginfo: []
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
