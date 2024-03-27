interface Navbar {
  home: string
  services: string
  faq: string
  aboutUs: string
  contact: string
}

interface CurrentLanguage {
  title: string
  locale: string
}

interface AvailableLanguage {
  title: string
  locale: string
}

interface HomeCard {
  title: string
  shortDescription: string
  regular: string
  strong: string
  icon: string
  iconback: string
}

interface HomeSection {
  heading: string
  items: string[]
}

interface HomeCarInfo {
  title: string
  sections: HomeSection[]
  icon: string
  iconback: string
}

interface HeaderCardInfo {
  header: string
  descripcion: string
}

interface SectionVideo {
  title: string
  descripcion: string
  strong: string
}

interface Footer {
  home: string
  services: string
  fullfact: string
  instapay: string
  freightbroke: string
  fuelcard: string
  faq: string
  aboutus: string
  contact: string
  curious: string
}

interface SectionInfo {
  title: string
  descripcion: string
  linebreak: string
  breaktext: string
  button: string
}

interface Slider {
  title: string
  strong: string
  button: string
  image: string
  imagemobile: string
}

interface FullCardHeader {
  title: string
  descripcion: string
  strong: string
}

interface CarruzelItem {
  title: string
  icon: string
  descripcion: string
  strong: string
}

interface HelpCard {
  icon: string
  strong: string
  descripcion: string
}

interface FormItem {
  name: string
  email: string
  company: string
  phone: string
  descripcion: string
  check: string
  strong: string
  button: string
}

interface Testimonial {
  title: string
  descripcion: string
  author: string
  position: string
  image: string
}

interface AccordionItem {
  title: string
  descripcion: string
  icon: string
  eventKey: number
}

interface InstapayStep {
  title: string
  text: string
}

interface InstapayBenefit {
  tittle: string
  descripcion: string
  icon: string
}

interface InstapayForm {
  title: string
  name: string
  email: string
  company: string
  phone: string
  broker: string
  comments: string
  check: string
  strong: string
  button: string
}

interface InstapayAccordionItem {
  title: string
  descripcion: string[]
  eventKey: number
}

interface RoadCard {
  title: string
  descripcion: string
}

interface FuelCardItem {
  icon: string
  strong: string
}

interface FuelCardSection {
  title: string
  descripcion: string[]
  eventKey: number
}

interface FuelCardSelectOption {
  label: string
  value: string
}

interface Need {
  title: string
  descripcion: string
  icon: string
}

interface Program {
  title: string
  items: string[]
  icon: string
}

interface Provide {
  title: string
  items: string[]
  icon: string
}

interface HelpYou {
  title: string
  image: string
  items: HelpYouItem[]
}

interface HelpYouItem {
  title: string
  details: HelpYouDetail[]
}

interface HelpYouDetail {
  icon: string
  text: string
}

interface AccordionInstaItem {
  title: string
  descriptions: string[]
  icon: string
  eventKey: number
  width?: number
  height?: number
}

interface Card {
  title: string
  text: string
  icon: string
}

interface KnowSection {
  title: string
  descripcion: string
  strong: string
}

export interface BlogInfo {
  id: number
  title: string
  description: string
  content: string
  imageSrc: string
  desktopSrc:string
  date: string
  type: string
}

export type IJSON = {
  navbar: Navbar
  languages: {
    current: CurrentLanguage
    available: AvailableLanguage[]
  }

  home: {
    cards: HomeCard[]
    carinfo: HomeCarInfo[]
    headercardinfo: HeaderCardInfo[]
    sectionvideo: SectionVideo[]
    footer: Footer[]
    sectioninfo: SectionInfo[]
    slider: Slider[]
  }
  fullcard: {
    header: FullCardHeader[]
    carruzel: CarruzelItem[]
    helptittle: string
    helpcards: HelpCard[]
    helpcardstwo: HelpCard[]
    form: FormItem[]
    testimonials: Testimonial[]
    accordionItems: AccordionItem[]
    titleform: string
    pagetittle: string
    pagestrong: string
  }
  instapay: {
    pagetittle: string
    pagestrong: string
    welcometittle: string
    welcomedescripcion: string
    stepstittle: string
    steps: InstapayStep[]
    Benefits: InstapayBenefit[]
    Benefitstwo: InstapayBenefit[]
    benefitstitle: string
    form: InstapayForm[]
    accordiontittle: string
    accordionItems: InstapayAccordionItem[]
  }
  fuelcard: {
    pagetittle: string
    pagetittlestrong: string
    road: RoadCard[]
    cardsfuel: FuelCardItem[]
    fuelcardsection: FuelCardSection[]
    fuelcardsectiontitle: string
    fuelcardsectiondescription: string
    formtitle: string
    formselectsoptions: FuelCardSelectOption[]
    formfullname: string
    formemail: string
    formcompany: string
    formphone: string
    formmessage: string
    formcheck: string
    formbreak: string
    formbutton: string
  }
  freightbroker: {
    pagetitle: string
    titlestrong: string
    titleform: string
    needstitle: string
    needs: Need[]
    needstwo: Need[]
    needsbutton: string
    needsbuttontwo: string
    needsfinaltext: string
    needsfinaltextstrong: string
    programtitle: string
    programtitleweb: string
    programtitlewebbreak: string
    programs: Program[]
    provide: Provide[]
    providetitle: string
    helpyou: HelpYou
    formfullname: string
    formemail: string
    formcompany: string
    formphone: string
    formmessage: string
    formcheck: string
    formbreak: string
    formbutton: string
  }

  faqs: {
    accordionInstaItems: AccordionInstaItem[]
    faqtitle: string
  }
  about: {
    pagetitle: string
    pagestrong: string
    knowtitle: string
    knowstrong: string
    cards: Card[]
    cardstwo: Card[]
    knowsection: KnowSection[]
  }

  contact: {
    titleform: string
    contacttitle: string
    contacttitleform: string
    contacttitlestrong: string
    contacttitlebreak: string
    formname: string
    formemail: string
    formcompany: string
    formphone: string
    formmessage: string
    formcheck: string
    formbreak: string
    formbutton: string
  }

  blogs: {
    bloginfo: BlogInfo[]
  }
}
