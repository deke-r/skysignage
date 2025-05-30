export const metadata = {
  title: "Point of Sale Displays Services in Delhi - SkySignage",
  description: "Looking for the point of sale display services in Delhi? SkySignage designs eye-catching displays that get your brand noticed. Get a free quote today! Call 9311405211.",
  keywords: [
    "Point of Sale Displays Services in Delhi",
    "Point of Sale Displays in Delhi",
    "POS Displays Services in Delhi",
    "POS Displays in Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/point-of-sale-displays"
  },
  openGraph: {
    title: "Point of Sale Displays Services in Delhi - SkySignage",
    description: "SkySignage offers eye-catching point of sale display services in Delhi to help your brand stand out. Contact us for a free quote today! Call 9311405211.",
    url: "https://skysignage.in/point-of-sale-displays",
    images: [
      {
        url: "https://skysignage.in/assets/images/point-of-sale-displays-og.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Point of Sale Displays Services in Delhi - SkySignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Point of Sale Displays Services in Delhi - SkySignage",
    description: "Get eye-catching POS displays designed by SkySignage in Delhi. Boost your sales and get noticed. Call 9311405211.",
    images: ["https://skysignage.in/assets/images/point-of-sale-displays-twitter.jpg"] // Replace with your actual image URL
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkySignage",
    url: "https://skysignage.in/point-of-sale-displays",
    logo: "https://skysignage.in/assets/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9311405211",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English"
    }
  }
};





import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "Point of Sale Displays",
  backgroundImage: "/img/Visual.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Point of Sale Displays", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Visual Merchandising Services",
services: [
    { title: "Window Display", link: "/window-installations" },
  { title: "In-store Displays", link: "/in-store-displays" },
  { title: "Posters", link: "/posters" },
  { title: "Promotional Seasonal Displays", link: "/promotional-seasonal-displays" },
  { title: "Mannequin Styling", link: "/mannequin-styling" },
]

};


const serviceData = {
  title: "Point of Sale Displays",
  description: `Sky Signage provides Point of Sale Displays Services in Delhi. Its displays the transactions and sale and purchase of items in the store, it gives exact amount and money paid during transactions, so that consumer get to know about purchases. We design it to attract the attention of customers and influence their buying decisions by showcasing products, promotions, or brand messaging.
Similalry, we make these displays that can take various forms, such as cardboard stands, shelf talkers, endcap displays, or digital screens. Our main goal is to increase product visibility, drive impulse purchases, and enhance the overall shopping experience.`,
  image: "/img/PointOfSaleDisplay.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "Get Noticed in Retail with Our Display Services.",
    details: [
      `Sky Signage is a provider of POS Displays Services in Delhi. We are experts in creating impactful point of sale displays, designed to maximize sales and capture customer attention. Our specialized merchandise displays are strategically placed near cash registers or on checkout counters, ensuring impossibilities to miss. Whether you're launching a new product, promoting a seasonal special, or targeting impulse buyers, our displays are proven to boost sales. Trust us to create look structure and effective point of sale screen display for your business.
Moreover, environ print custom POS displays with premium finishes and vibrant inks. Stand out us and be noticed with our exceptional products. Our dedicated team guarantees exceeding expectations and timely delivery.
Choose from glossy, matte, or premium finishes for your POS display. We offer durable materials in various thicknesses, ensuring long duration. Enjoy vibrant full-color printing using water-based inks that are solvent-free. We help you to get quick quotes and fast turnaround times for custom POS printing`,
    ],
    buttonText: "Enquiry Now",
    
},
extraHeading: `Why Choose Our Point of Sale Displays Services for Your Business?`,
extraP: [
       `Choose us for skilled graphic designers experienced in creating marketing materials for POS displays. Easily upload your design to our site. Benefit from our expertise with these design tips. We are your reliable choice for exceptional POS printing services.
Choose us for our white refrigerator grade paper stock, perfect for chilled beverages near grocery checkouts. Opt for a durable display with a high gloss UV finish and thick paper stock. Our main priority is to prioritize your goals, highlighting discounts, new features, and important details in eye-catching fonts. We strike the right balance with concise text, capturing shopper interest. Trust us for effective and attention-grabbing POS displays.`

    ]
}

export default function POSD() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}