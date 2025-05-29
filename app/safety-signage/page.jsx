export const metadata = {
  title: "Safety Sign Board Manufacturer in Delhi",
  description: "Get the Best Safety Sign Board Manufacturer in Delhi. Protecting Lives, Safety First, Always. Request Your Quote Today. Call Us at +91 9311405211 for Safety Signs.",
  keywords: [
    "Safety Sign Board Manufacturer in Delhi",
    "Safety Sign Board in Delhi",
    "Safety Signage Manufacturer in Delhi",
    "Safety Signage in Delhi",
    "Industrial safety signs Delhi",
    "Workplace safety boards Delhi",
    "Safety warning signs Delhi",
    "Custom safety sign boards Delhi",
    "Health and safety signage Delhi",
    "Construction safety signs Delhi",
    "Emergency safety signage Delhi",
    "Warning and hazard signs Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/safety-signage"
  },
  openGraph: {
    title: "Safety Sign Board Manufacturer in Delhi | Skysignage",
    description: "Protect your workplace with top-quality safety sign boards from Skysignage, the trusted manufacturer in Delhi. Call +91 9311405211 for a quote.",
    url: "https://skysignage.in/safety-signage",
    images: [
      {
        url: "https://skysignage.in/assets/images/safety-signage-og.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Safety Sign Board Manufacturer Delhi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Sign Board Manufacturer in Delhi | Skysignage",
    description: "Trusted safety sign board manufacturer in Delhi. Protect lives with quality safety signage. Contact Skysignage today for a quote.",
    images: ["https://skysignage.in/assets/images/safety-signage-twitter.jpg"] // Replace with actual Twitter image URL
  },
  // Structured Data (JSON-LD) placeholder - you can fill this according to your schema needs
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Skysignage",
    "url": "https://skysignage.in/safety-signage",
    "logo": "https://skysignage.in/assets/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9311405211",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add your social profile URLs here if any
    ]
  }
};





import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Safety Sign Board",
    backgroundImage: "/img/Sky-signage.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Safety Sign Board", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Signboard Services",
    services: [
        { title: "3d Acrylic LED Letter", link: "/3d-acrlic-signboard" },
        { title: "Glow Sign Board", link: "/glow-signboard" },
        { title: "Neon Signboard", link: "/neon-signboard" },
        { title: "3d Steel LED Letter", link: "/3d-steel-led-letter" },
        { title: "Acp Sign Board", link: "/acp-sign-board" },
        { title: "3d Brass Signboard", link: "/3d-brass-signboard" },
        { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
        { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
        { title: "Directional Sign Board", link: "/directional-sign-board" },
    ],
};


const serviceData = {
    title: "Safety Sign Board Manufacturer",
    description: `Sky Signage is a safety sign board manufacturer in Delhi. The safety board is a very crucial tool for ensuring safety in various places and environments. It is a visual informative board that conveys vital messages as well as warnings that promote awareness and reduce the risk of accidents.
Similarly, we designed it with clear symbols, colours, and text, as safety measures. The safety sign boards effectively communicate forcefully hazards, emergency procedures, and requirements.`,
    image: "/img/SafetySignage.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "Custom Safety Signage Solutions in Delhi",
        details: [
            `We make a safety sign board in Delhi. We make it widely for workplaces, public areas, construction sites, and transportation systems. It is a safeguard of individuals and promotes a culture of safety. It is safety sign boards that play a crucial role in preventing accidents and protecting lives. We are a strong dedicated team used for a common purpose.`,

            `Moreover, we have expertise in our respective fields, we strive to provide innovative solutions and extensive services to our clients. Our collaboration with a positive approach towards our clients fosters creativity and ensures the delivery of quality results. Our priority prioritizes client satisfaction and adapts to meet their emerging needs. We are committed to excellence, we take the challenges embrace diversity, and work with others to achieve success together.`,

        ],
        buttonText: "Enquiry Now",
    },
      extraHeading: 'Get Custom Safety Signs ! Your Safety, Our Priority',
        extraP: [
            `Sky Signage is the best safety sign board manufacturer in Delhi. When it comes to our products, choosing us means selecting quality. Our innovative ideas and reliable solutions. We take pride in correctly designing and developing each product to meet your needs. Our commendable commitment towards customer satisfaction drives us to continuously improve our work. We incorporate the latest technologies and features into our offerings. We prioritize of being prioritizing in transparency and ethical practices. We ensure that our products are manufactured with strict quality control measures. Additionally, our dedicated team support is always ready to guide you in a seamless experience. With us, you can trust that you're getting quality and faithful products that will exceed your expectations.`,

        ]
}

export default function SS() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}