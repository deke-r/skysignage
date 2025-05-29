export const metadata = {
  title: "Glow Sign Board Manufacturer in Delhi - Skysignage",
  description: "Skysignage is the top Glow Sign Board Manufacturer in Delhi. Get your brand noticed with colorful, eye-catching signs. Contact us today!",
  keywords: [
    "Glow Sign Board Manufacturer in Delhi",
    "Glow Sign Board in Delhi",
    "Glow Sign Board in Delhi NCR",
    "LED Glow Sign Board Delhi",
    "Custom Glow Sign Boards Delhi",
    "Outdoor Glow Signage Delhi",
    "Indoor Glow Signage Delhi",
    "Colorful Glow Sign Boards Delhi NCR",
    "Advertising Glow Signs Delhi",
    "Glow Sign Fabrication Delhi",
    "Sign Board Manufacturer Delhi NCR",
    "Brand Signage Delhi",
    "Retail Glow Signs Delhi",
    "Skysignage Glow Sign Boards",
    "Illuminated Signage Delhi NCR",
    "Business Glow Sign Board Delhi",
    "Glow Sign Installation Delhi",
    "Signage Solutions Delhi NCR"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/glow-signboard"
  },
  openGraph: {
    title: "Glow Sign Board Manufacturer in Delhi - Skysignage",
    description: "Get vibrant and colorful Glow Sign Boards manufactured by Skysignage, Delhi’s leading signage company. Make your brand stand out!",
    url: "https://skysignage.in/glow-signboard",
    images: [
      {
        url: "https://skysignage.in/assets/images/glow-signboard-og.jpg", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Glow Sign Board by Skysignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Sign Board Manufacturer in Delhi - Skysignage",
    description: "Top Glow Sign Board manufacturer in Delhi offering custom, vibrant glow signboards for your business. Contact Skysignage now!",
    images: ["https://skysignage.in/assets/images/glow-signboard-twitter.jpg"] // replace with actual image URL
  }
};




import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "Glow Sign Board Manufacturer in Delhi",
  backgroundImage: "/img/Sky-signage.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Glow Sign Board Manufacturer in Delhi", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
  services: [
    { title: "3d Acrylic LED Letter", link: "/3d-acrlic-signboard" },
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
  title: "Glow Sign Board",
  description: `Sky Signage offers  a wide range of backlit/ glow sign display light boxes giving you the best options for your illuminated display requirements. We have 8 years of great experience in glow sign board manufacturing and repairing. Your light box can be internal or external, front loading or slide in. You can order backlit light boxes in standard poster sizes A4, A3, A2, A1 and A0.
You can have any light box supplied, fitted with an inkjet printer backlit We ensure our light boxes illuminate your graphic image with the most even light distribution possible, bringing your graphics to life and creating powerful eye catching displays. All of our light boxes are supplied with cable and plug so all you need to do is plug them in and you are away!`,
  image: "/img/GlowSignBoard.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "We Are Professional",
    details: [
      `Bring focus to your most important features with internal lighting. Backlighting adds emphasis and highlights your message like no other graphic application.`,
      `Back-lit displays are commonly found in trade show exhibits, retail environments, sports arenas, airports, restaurants, and many other types of display environments. The use of a light box or back-lit display allows photos and written copy to be joined together to tell a story in a way that would never be possible with your average presentation.

`,
      
    ],
    buttonText: "Enquiry Now",
  },
}

export default function GlowSignboard() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}