interface Navbar {
  home: string
  services: string
  faq: string
  aboutUs: string
  contact: string
  login: string
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
  iconBack: string
}

interface HomeSection {
  heading: string
  items: string[]
}

interface HomecardsInfo {
  title: string
  href: string
  sections: HomeSection[]
  icon: string
  iconBack: string
}

interface headerCardInfo {
  header: string
  descripcion: string
}

interface SectionVideo {
  title: string
  descripcion: string
  strong: string
}

export interface IFooter {
  home: string
  services: string
  fullfact: string
  fespay: string
  freightbroke: string
  fuelcard: string
  faq: string
  aboutus: string
  contact: string
  curious: string
}

interface sectionInfo {
  title: string
  titleBreak: string
  descripcion: string
  lineBreak: string
  breakText: string
  button: string
}

interface Slider {
  title: string
  strong: string
  button: string
  href: string
  image: string
  imageMobile: string
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

export interface HelpCard {
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
  checkboxError: string
  check: string
  strong: string
  button: string
  formSubmitted: string
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
  checkboxError: string
  check: string
  strong: string
  button: string
  formSubmitted: string
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

interface fuelCardSection {
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

export interface HelpYouDetail {
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

interface knowSection {
  title: string
  descripcion: string
  strong: string
}

export interface blogInfo {
  id: number
  title: string
  description: string
  content: string
  imageSrc: string
  desktopSrc: string
  date: string
  type: string
  readMore: string
}

export type IJSON = {
  navbar: Navbar
  languages: {
    current: CurrentLanguage
    available: AvailableLanguage[]
  }

  home: {
    cardsTitle: string
    cards: HomeCard[]
    cardsInfo: HomecardsInfo[]
    headerCardInfo: headerCardInfo[]
    SectionVideo: SectionVideo[]
    footer: IFooter[]
    sectionInfo: sectionInfo[]
    slider: Slider[]
  }
  fullcard: {
    header: FullCardHeader[]
    carruzel: CarruzelItem[]
    helpTitle: string
    helpCards: HelpCard[]
    helpcardsTwo: HelpCard[]
    form: FormItem[]
    testimonials: Testimonial[]
    accordionItems: AccordionItem[]
    titleForm: string
    pageTitle: string
    pagestrong: string
  }
  fespay: {
    pageTitle: string
    pagestrong: string
    welcomeTitle: string
    welcomeDescription: string
    stepsTitle: string
    steps: InstapayStep[]
    Benefits: InstapayBenefit[]
    BenefitsTwo: InstapayBenefit[]
    benefitsTitle: string
    form: InstapayForm[]
    accordionTitle: string
    accordionItems: InstapayAccordionItem[]
  }
  fuelcard: {
    pageTitle: string
    pagetitleStrong: string
    road: RoadCard[]
    CardsFuel: FuelCardItem[]
    fuelCardSection: fuelCardSection[]
    fuelCardSectionTitle: string
    fuelCardSectionDescription: string
    formTitle: string
    formSelectsOptions: FuelCardSelectOption[]
    formFullName: string
    formEmail: string
    formCompany: string
    formPhone: string
    formMessage: string
    checkboxError: string
    formCheck: string
    formBreak: string
    formButton: string
    formSubmitted: string
  }
  freightbroker: {
    pageTitle: string
    titleStrong: string
    titleForm: string
    needsTitle: string
    needs: Need[]
    needsTwo: Need[]
    needsButton: string
    needsButtontwo: string
    needsFinalText: string
    needsFinalTextStrong: string
    programTitle: string
    programTitleWeb: string
    programTitleWebBreak: string
    programs: Program[]
    provide: Provide[]
    provideTitle: string
    HelpYou: HelpYou
    formFullName: string
    formEmail: string
    formCompany: string
    formPhone: string
    formMessage: string
    checkboxError: string
    formCheck: string
    formBreak: string
    formButton: string
    formSubmitted: string
  }
  faqs: {
    accordionInstaItems: AccordionInstaItem[]
    faqTitle: string
  }
  about: {
    pageTitle: string
    pagestrong: string
    knowTitle: string
    knowStrong: string
    cards: Card[]
    cardsTwo: Card[]
    knowSection: knowSection[]
  }
  contact: {
    titleForm: string
    contactTitle: string
    contactTitleForm: string
    contactTitleStrong: string
    contacttitleBreak: string
    formName: string
    formEmail: string
    formCompany: string
    formPhone: string
    formMessage: string
    checkboxError: string
    formCheck: string
    formBreak: string
    formButton: string
    formSubmitted: string
  }

  blogs: {
    blogInfo: blogInfo[]
  }
}
