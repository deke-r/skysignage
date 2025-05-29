export const metadata = {
  title: "3D Acrylic LED Letter Manufacturers & Suppliers in Delhi NCR | Skysignage",
  description: "Get your brand noticed. Skysignage is the leading 3D Acrylic LED Letter manufacturer and supplier in Delhi NCR. Get visually stunning signage. Call now.",
  keywords: [
    "3D acrylic LED letters Delhi",
    "LED letter manufacturers Delhi NCR",
    "3D signboard suppliers Delhi",
    "acrylic letter signage Delhi",
    "custom LED signs Delhi NCR",
    "LED letter signage manufacturer",
    "acrylic LED letter fabrication",
    "outdoor LED letters Delhi",
    "indoor acrylic LED signage",
    "illuminated signage Delhi NCR",
    "brand signage solutions Delhi",
    "signboard manufacturers Delhi",
    "signage fabrication Delhi NCR",
    "LED channel letters Delhi",
    "custom 3D signage Delhi NCR",
    "business signage Delhi",
    "advertising signage Delhi NCR",
    "Skysignage acrylic LED letters",
    "signboard installation Delhi NCR",
    "LED lighted signboards Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/3d-acrlic-signboard"
  },
  openGraph: {
    title: "3D Acrylic LED Letter Manufacturers & Suppliers in Delhi NCR | Skysignage",
    description: "Get visually stunning 3D Acrylic LED letters from Skysignage, the leading manufacturer and supplier in Delhi NCR. Contact us today!",
    url: "https://skysignage.in/3d-acrlic-signboard",
    images: [
      {
        url: "https://skysignage.in/assets/images/3d-acrylic-led-signboard.jpg", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "3D Acrylic LED Letter Signage by Skysignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Acrylic LED Letter Manufacturers & Suppliers | Skysignage",
    description: "Leading 3D Acrylic LED Letter manufacturers and suppliers in Delhi NCR. Get high-quality illuminated signage for your brand.",
    images: ["https://skysignage.in/assets/images/3d-acrylic-led-signboard-twitter.jpg"] // replace with actual image URL
  }
};





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