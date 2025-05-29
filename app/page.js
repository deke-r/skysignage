export const metadata = {
  title: "Signage Company in Delhi NCR | Signage Manufacturers",
  description: "Request a quote now from Skysignage, the leading signage company in Delhi NCR. We have the expertise to elevate your brand with creative signage solutions.",
  keywords: [
    "Signage company in Delhi",
    "Signage company in Delhi NCR",
    "Signboard company Delhi NCR",
    "Signage fabrication Delhi NCR",
    "Signage services Delhi NCR",
    "Signage design in Delhi NCR",
    "LED signage Delhi",
    "Acrylic signboard Delhi",
    "Retail signage Delhi",
    "Outdoor signage Delhi",
    "Indoor signage Delhi",
    "Digital signage Delhi NCR",
    "Corporate signage Delhi NCR",
    "Custom signage Delhi",
    "Top signage manufacturers Delhi NCR",
    "Best signage company in Delhi",
    "Brand signage Delhi NCR",
    "Wayfinding signage Delhi",
    "Shop sign boards Delhi",
    "Signage installation Delhi NCR"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/"
  },
  openGraph: {
    title: "Signage Company in Delhi NCR | Skysignage",
    description: "Elevate your brand with Skysignage – expert signage manufacturers and designers in Delhi NCR.",
    url: "https://skysignage.in/",
    images: ["https://skysignage.in/assets/images/og-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signage Company in Delhi NCR | Skysignage",
    description: "Leading signage manufacturers in Delhi NCR offering custom signboard solutions.",
    images: ["https://skysignage.in/assets/images/twitter-banner.jpg"],
  }
};





import TopBar from "@/components/TopBar"
import Navbar from "@/components/Navbar"
import HeroSlider from "@/components/HeroSlider"
import WelcomeSection from "@/components/WelcomeSection"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import CtaSection from "@/components/CtaSection"
import ClientsSection from "@/components/ClientsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"
import Footer from "@/components/Footer"
import EnquiryPopup from "@/components/EnquiryPopup"

export default function Page() {
    return (
        <>


      <HeroSlider />
      <WelcomeSection />
      <ServicesSection />
      <WhyChooseUs />
      <CtaSection />
      <ClientsSection />
      <TestimonialsSection />
      <BlogSection />

        
        
        
        </>
    );
}