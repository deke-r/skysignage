
import CompanyOverview from "../../components/Company-overview"
import BrightnessSection from "../../components/Brightness-section"
import BannerC from "@/components/Banner-c"

const aboutData = {
  hero: {
    title: "About",
    backgroundImage: "/img/background-2.webp",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", active: true },
    ],
  },
  companyOverview: {
    title: "Company Overview",
    heading: "We Brand Your Places & Spaces",
    content: `Sky Signage is one of the largest brand implementation partners in the industry. We do this through our national
    signage, maintenance and construction offerings. We craft the visionary bridge between your brand identity and
    your customer's experience. We have evolved our business to combine traditional craftsmanship and innovation
    into every branded element and space we touch. From engineering large scale high rise spectacular signage to
    utilizing our LED retrofit efficiencies, it is Sky Signage goal to be your single source and turnkey resource for all of
    your signage manufacturing, maintenance and construction needs.`,
    quote: "Your National Brand Implementation Partner Your Vision is Our Mission",
    dropCapContent: `Today, we are a company working in all the verticals of signage development and have
expanded to the printing of stationary as well. With state of the art machines at our
manufacturing and printing units, we have been able to produce some of the most recognized
signs in Delhi and other cities. We provide signage products and their installations in all the
cities of India. Our creative designs, quality products and timely delivery speak louder than
words and this is how we bagged huge projects from many prestigious clients like Costa,
Yamaha, and Decathlon etc.`,
  },
  brightness: {
    backgroundImage: "/img/background-15.webp",
    title: "How We Bring Brightness",
    subtitle: "to Brands?",
    icons: [
      { src: "/img/SkySignageWebsiteIcons.webp", alt: "Icon 1" },
      { src: "/img/SkySignageWebsiteIcons_2.webp", alt: "Icon 2" },
      { src: "/img/SkySignageWebsiteIcons_3.webp", alt: "Icon 3" },
      { src: "/img/SkySignageWebsiteIcons_4.webp", alt: "Icon 4" },
    ],
  },
}

export default function AboutPage() {
  return (
    <div>
      <BannerC {...aboutData.hero} />
      <CompanyOverview {...aboutData.companyOverview} />
      <BrightnessSection {...aboutData.brightness} />
    </div>
  )
}
