import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "3d Acrylic LED Letter",
  backgroundImage: "/img/Sky-signage.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "3d Acrylic LED Letter", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
  services: [
    { title: "Glow Sign Board", link: "/glow-signboard" },
    { title: "Neon Sign Board", link: "/neon-signboard" },
    { title: "3d Steel LED Letter", link: "/3d-steel-led-letter" },
    { title: "ACP Sign Board", link: "/acp-sign-board" },
    { title: "3D Brass LED Letter", link: "/3d-brass-signboard" },
    { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
    { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
    { title: "Safety Signage", link: "/safety-signage" },
    { title: "Directional Sign Board", link: "/directional-sign-board" },
  ],
};


const serviceData = {
  title: "3D Acrylic LED Letter",
  description: `Skysignage, Your trusted destination for top-quality 3D Acrylic LED Letters in Delhi NCR. 3D Acrylic LED Letters are fancy signs made from special plastic that illuminate with colored light, making the words and design look great and easy to see. 3D Acrylic LED Letters are used to make signs and logos that light up, catching people's eyes and making things look special and noticeable. As a trusted name in the signage industry, We are experts in crafting stunning, customized 3D signage`,
  image: "/img/3dAcrylicLEDLetter.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "Professional 3D Acrylic LED Letter Suppliers",
    details: [
      `We have expertise in designing and manufacturing 3D Acrylic LED Letters that look amazing and catch your attention. We've been doing this for a long time and people appreciated our work. We have a bunch of experienced and skilled artisans and the latest technology and tools that help us make your ideas into awesome signs with our creativity`,
      `SkySignage first understands your needs such as brand identity and installation requirements. So that our craftsmen turn your concepts into eye-catching visual mock-ups. and use the latest technology, and craft each letter from premium acrylic material. We quality-check each letter to ensure that it meets our exacting standards. We have delivered exceptional 3D Acrylic LED Letters to various clients and industries and many clients have appreciated our work and got satisfaction.`,
      `Ready to give your brand a glow-up? Choose Skysignage as your 3D Acrylic LED Letters manufacturer in Delhi NCR, Get in touch with us now to ask questions. How amazing our 3D Acrylic LED Letters can be. Skysignage creates remarkable 3D Acrylic LED Letters that reflect your brand's personality.`,
    ],
    buttonText: "Enquiry Now",
  },
}

export default function ArlicSignboard() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}