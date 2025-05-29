export const metadata = {
  title: "Glass Printing Service in Delhi NCR - SkySignage",
  description: "Looking for the best glass printing service in Delhi NCR? SkySignage delivers stunning, high-quality glass prints tailored to your needs. Contact us for a consultation at 9311405211.",
  keywords: [
    "Glass Printing Services in Delhi",
    "Glass Printing in Delhi",
    "Custom Glass Printing Delhi NCR",
    "Decorative Glass Printing Delhi",
    "Glass Surface Printing Delhi",
    "Printed Glass Panels Delhi",
    "Glass Wall Art Printing Delhi",
    "Best Glass Printing Company in Delhi",
    "Affordable Glass Printing Delhi",
    "Glass Printing Near Me"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/glass-printing"
  },
  openGraph: {
    title: "Glass Printing Service in Delhi NCR - SkySignage",
    description: "SkySignage provides premium glass printing services in Delhi NCR. High-end designs, precise finish, and expert craftsmanship. Contact us today!",
    url: "https://skysignage.in/glass-printing",
    images: [
      {
        url: "https://skysignage.in/assets/images/glass-printing-og.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Glass Printing Service in Delhi NCR"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass Printing Service in Delhi NCR - SkySignage",
    description: "Get stunning glass prints from SkySignage in Delhi NCR. Trusted professionals in custom glass printing. Call now!",
    images: ["https://skysignage.in/assets/images/glass-printing-twitter.jpg"] // Replace with actual image path
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkySignage",
    "url": "https://skysignage.in/glass-printing",
    "logo": "https://skysignage.in/assets/images/logo.png", // Replace if needed
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9311405211",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    }
  }
};



import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Glass Printing",
    backgroundImage: "/img/Printing.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Glass Printing", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Printing Services",
services: [
  { title: "Flex Printing", link: "/flex-printing" },
  { title: "Vinyl Printing Printing", link: "/vinyl Printing-printing" },
  { title: "Canvas Printing", link: "/canvas-printing" },
  { title: "Wood Printing", link: "/wood-printing" },
],

};


const serviceData = {
    title: "Glass Printing Services",
    description: `SkySignage provides glass printing service in Delhi NCR . Glass printing is a process that involves applying ink or other materials. The glass surface creates a design, patterns, or images. It is usually used for decoration purposes, signage, and branding. We make it functional for applications like solar panels.
Similarly, in the face of SkySignage and the rising skills of architects, consultants are increasingly seeking sustainable and green views with the help of solutions and printing glasses of it.`,
    image: "/img/GlassPrintingFilm.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "We Create Visual Masterpieces on Glass Surfaces",
        details: [
            `We are a digital ceramic glass printing service company in Delhi that uses materials that are eco-friendly. We are on top of providing functional structure and well designed in all the possible ways, by making it a willful material to support sustainable architecture. Our architect works flawlessly to the view of business development glass industries.`,

            `Skysignage has a way of working with digital clay-printed glasses to help the environment to grow. Our optimised energy requirements, replication of natural materials, reduction of external temperatures of buildings, and urban renewal are just a few of the ways digital print on glass can help glass processors and architects go green and help our clients.`,

            `Moreover, we usually have enough presence of mind to open the paper tray for printing the glass. Our process of the document is still in the printer's cache which helps to print in our way. Maybe somewhere in all the printer's options, there is a way to clear the cache, but the easier way is to get done installation of printing done.`

        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'Why Choose Our Glass Printing Service',
    extraP: [
       `SkySignage provides the best glass printing service in Delhi and has a good method of decorating glasses that requires knowledge of the different ways of choosing us. With the equipment and other supplies we'll be working with. It's crucial to know the caliber and controllability of each method.
Especially, if you're looking to buy a new glass printing glass for your company. Furthermore, our dedication to work is the best printing method for application. You can consider the type of structure you'll be printing on from signage, our design products, and any production requirements.
If you prefer decals instead of direct imprinting for some reason. Then the consideration about using our service called "Decals only" with minimized pricing way of structure. This option lets customers choose from hundreds of pre-made designs that are printed onto stickers which can then be applied onto any surface by the skysignage.`,

    ]
}

export default function GP() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}