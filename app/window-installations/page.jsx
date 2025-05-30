export const metadata = {
  title: "Window Display Service in Delhi - SkySignage",
  description:
    "SkySignage is the best window display service provider in Delhi. Elevate your storefront with eye-catching and professional window displays. Call us at 9311405211 today.",
  keywords: [
    "Window Display Service in Delhi",
    "Window Display manufacturers in Delhi",
    "Window Display in Delhi",
    "Retail Window Displays Delhi",
    "Storefront Display Services",
    "Visual Merchandising Delhi",
    "Custom Window Display Solutions",
    "Shop Window Display Delhi",
    "Commercial Window Graphics Delhi",
    "Best Window Display Company in Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/window-installations"
  },
  openGraph: {
    title: "Window Display Service in Delhi - SkySignage",
    description:
      "Need a professional window display service in Delhi? SkySignage creates stunning visual merchandising solutions. Call now at 9311405211!",
    url: "https://skysignage.in/window-installations",
    images: [
      {
        url: "https://skysignage.in/assets/images/window-display-og.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Window Display Service in Delhi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Display Service in Delhi - SkySignage",
    description:
      "Boost your store’s appeal with creative window displays from SkySignage. Trusted by top brands in Delhi. Contact us today!",
    images: ["https://skysignage.in/assets/images/window-display-twitter.jpg"] // Replace with actual image
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window Display Service",
    description:
      "SkySignage provides eye-catching and professional window display services for retail stores and commercial spaces in Delhi.",
    provider: {
      "@type": "Organization",
      name: "SkySignage",
      url: "https://skysignage.in",
      logo: "https://skysignage.in/assets/images/logo.png"
    },
    areaServed: {
      "@type": "Place",
      name: "Delhi"
    },
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
  title: "Window Display",
  backgroundImage: "/img/Visual.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Window Display", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Visual Merchandising Services",
services: [
  { title: "In-store Displays", link: "/in-store-displays" },
  { title: "Posters", link: "/posters" },
  { title: "Mannequin Styling", link: "/mannequin-styling" },
  { title: "Point of Sale Displays", link: "/point-of-sale-displays" },
  { title: "Promotional Seasonal Displays", link: "/promotional-seasonal-displays" }
]

};


const serviceData = {
  title: "Window Display Service",
  description: `SkySignage is the best window Display manufacturer in Delhi. Window displays have been trending for quite some time, for good reasons. This display tactic works like glue for most retailers and brands. Although it is considered an expensive arrangement with products displayed on shelves in the windows, it is worth the marketing budget. With window displays, your products are visible to people even without setting foot inside your store. If they want to buy what they are seeing, they would immediately walk into the store and purchase the product.`,
  image: "/img/WindowDisplay.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "SkySignage Makes Storefront Look Amazing",
    details: [
      `SkySignage window displays are fabricated or made with multiple different materials. Our window's prices are usually measured in the area such as square feet and based on the size of the opening for clients are going to be used. Our material used and the cost of the window would be different.`,

      `Moreover, we are a window aesthetics company offering a range of glass options to meet your privacy and design needs. Our tinted glass provides partial tinting and privacy, with costs varying based on glass thickness. Our toughened glass is stronger than regular glass but cannot be cut once made.`,

      `Furthermore, we offer plain float glass in different thicknesses, frosted glass for added privacy, laminate glass for enhanced strength, double pane glass with an air gap, and triple pane glass with air gaps. Choose us for customized solutions that cater to your specific requirements.`,
    ],
    buttonText: "Enquiry Now",
    
},
extraHeading: ' What Sets Our Window Display Services Apart from the Rest?',
extraP: [
       `Choosing our window display services in Delhi. Window display glass provides natural light and enhances visibility, filling interior spaces with brightness and creating an inviting atmosphere. Its transparent nature allows for the entry of daylight, illuminating buildings during the day and promoting a pleasant ambience within rooms.
Window glass is low-maintenance and easy to clean, as it doesn't collect dust or dirt. Unlike plastic, it doesn't warp or tear, making it a durable and hassle-free choice for windows.`,

`Overall window display glass panes in windows strike a balance between aesthetics, functionality and energy efficiency, we make them a widely used choice for modern buildings and homes. Advances in glass technology have further improved their performance, making them an essential component of contemporary architecture.`

    ]
}

export default function WIS() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}