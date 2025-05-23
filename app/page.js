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
      <EnquiryPopup />
        
        
        
        </>
    );
}