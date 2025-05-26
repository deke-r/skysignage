import BannerC from "@/components/Banner-c";
import ContactSection from "@/components/ContactSection";
const banner = {
  title: "Contact",
  backgroundImage: "/img/background-2.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact", active: true },
  ],
};
export default function Contact() {
    return (
        <>
          <BannerC {...banner} />
          <ContactSection/>
        
        </>
    );
}