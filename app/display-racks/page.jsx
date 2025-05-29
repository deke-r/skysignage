export const metadata = {
  title: "Display Rack Manufacturer in Delhi - SkySignage",
  description: "If you are looking for the best Display Rack Manufacturer in Delhi, SkySignage provides quality design and craft display racks. Request a consultation today! Call 9311405211.",
  keywords: [
    "Display Rack Manufacturer in Delhi",
    "Display Rack in Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/display-racks"
  },
  openGraph: {
    title: "Display Rack Manufacturer in Delhi - SkySignage",
    description: "SkySignage offers high-quality display rack manufacturing services in Delhi. Get durable and stylish racks for your business. Call 9311405211.",
    url: "https://skysignage.in/display-racks",
    images: [
      {
        url: "https://skysignage.in/assets/images/display-racks-og.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Display Rack Manufacturer in Delhi - SkySignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Display Rack Manufacturer in Delhi - SkySignage",
    description: "Quality display racks manufactured by SkySignage in Delhi. Request a consultation today! Call 9311405211.",
    images: ["https://skysignage.in/assets/images/display-racks-twitter.jpg"] // Replace with your actual image URL
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkySignage",
    url: "https://skysignage.in/display-racks",
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
    title: "Display Racks",
    backgroundImage: "/img/Retail-Display.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Display Racks", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Retail Detail Services",
services: [
  { title: "Store Fixtures", link: "/store-fixtures" },
  { title: "Retails Counters", link: "/retails-counters" },
],

};


const serviceData = {
    title: "Display Racks Manufacturers",
    description: `SkySigange is a Display Rack Manufacturers in Delhi. Retail display racks are fixtures commonly used in stores and shops to showcase and present products to customers. We make the display racks specially designed to showcase products in an attractive and assemble way.
Similarly, we catch customers' attention and encourage them to explore the solutions. We makes Display racks for certain products or promotions stand out, attracting attention. We helps you save space by using vertical storage, allowing more products to be displayed without overfull the store.`,
    image: "/img/DisplayRacks.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "We Manufacture the Display Racks That Work for Your Business",
        details: [
            `SkySignage is a Display Rack Dealer in Delhi. In display racks we help retailers categorize and organize products effectively. We have different types of racks are used to arrange items by size, type, or brand, making it easier for customers to find what they need. It helps to create opportunities for cross-selling and upselling by placing related products together.
Moreover, for example, showcasing batteries alongside electronic devices or pairing clothing with matching accessories. SkySignage is not only the placing the displays but we make display racks can be customized to match a store's branding and marketing. We can have the variety of logos, slogans, or colors that represent the store's identity, that will helps to creating a consistent shopping experience.
In placing racks near the checkout or entrance/exit areas can serve as point-of-purchase displays, showcasing low-cost or impulse items that tempt customers to make an extra purchase before leaving the store.`,




        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'What Sets Our Display Racks Apart',
    extraP: [
       `Our display racks offer a storage and presentation solution for retail stores. We organize and display items in an appealing and accessible manner, attracting customers and increasing sales. Display racks make products more visible and accessible, helping customers find what they need easily. They also promote seasonal or promotional items, leading to faster product sales and less waste.`,
       `Overall, retail display racks are versatile tools that contribute to the aesthetics, organization, and profitability of retail spaces. They help create an engaging shopping environment, improve product visibility, and ultimately enhance the overall customer experience.
In summary, retail display racks play a crucial role in presenting products effectively, optimizing space, enhancing the shopping experience, and driving sales for retailers.`

    ]
}

export default function DR() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}