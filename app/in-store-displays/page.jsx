export const metadata = {
  title: "In-Store Displays in Delhi - SkySignage",
  description:
    "SkySignage specializes in eye-catching in-store display solutions in Delhi. Enhance your retail space with customized signage that drives attention and sales. Call 9311405211.",
  keywords: [
    "In-Store Displays in Delhi",
    "Retail Displays in Delhi",
    "In-Store Branding Delhi",
    "Store Display Signage Delhi",
    "Custom Retail Displays",
    "Visual Merchandising Services",
    "Point of Sale Displays Delhi",
    "Shop Branding in Delhi",
    "Retail Display Design",
    "SkySignage In-Store Display Solutions"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/in-store-displays"
  },
  openGraph: {
    title: "In-Store Displays in Delhi - SkySignage",
    description:
      "SkySignage offers innovative and customizable in-store display signage in Delhi for retail stores. Boost customer engagement and brand visibility. Contact us at 9311405211.",
    url: "https://skysignage.in/in-store-displays",
    images: [
      {
        url: "https://skysignage.in/assets/images/in-store-displays-og.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "In-Store Displays by SkySignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Store Displays in Delhi - SkySignage",
    description:
      "Transform your retail space with creative in-store displays from SkySignage in Delhi. Contact us now for a custom solution!",
    images: ["https://skysignage.in/assets/images/in-store-displays-twitter.jpg"] // Replace with actual image path
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "In-Store Displays",
    description:
      "SkySignage provides professional in-store display design and installation services in Delhi to enhance your brand's in-store visibility.",
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
  title: "In-store Displays",
  backgroundImage: "/img/Visual.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "In-store Displays", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
services: [
  { title: "Window Display", link: "/window-installations" },
  { title: "Posters", link: "/posters" },
  { title: "Mannequin Styling", link: "/mannequin-styling" },
  { title: "Point of Sale Displays", link: "/point-of-sale-displays" },
  { title: "Promotional Seasonal Displays", link: "/promotional-seasonal-displays" }
]

};


const serviceData = {
  title: "In-store Displays Service",
  description: `An in-store retail display is a setup that includes signage and sometimes other features, including the products themselves. These displays can be located throughout the store, and their primary purpose is to encourage customers to buy a particular product.`,
  image: "/img/DisplayRacks.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "We Are Professional",
details: [
  `Banners can serve as a backdrop to your display, or you can hang one above your display to help draw attention to it. You can choose from various banner materials, including cast vinyl, calendar vinyl and mesh vinyl. Signage fixtures like retractable banner stands make it easy to set up and take down your banners. One option is to create a step-and-repeat banner with the logo of the product you’re promoting and invite customers to take a picture in front of it with a giveaway item, such as free sunglasses.`,

  `As part of your display, you might have a table where you put the product you’re promoting or give out free samples. A custom branded table covering can help make your display more visually striking and help you to promote your brand. Our table covers are made from wrinkle-resistant, machine-washable polyester.`,

  `If you want to create a larger POP display, consider a wall covering. These in-store graphics allow you to use available wall space to create a large, eye-catching visual. You could, for example, use pictures of someone using the product and place them in sequential order so the pictures tell a story. If you’re selling power tools, for instance, you might show someone using their tools to build a shed or a treehouse. You can print these images on sectional fabric wall panels or a vinyl wall mural.`,

  `Take advantage of the floor space around your display to add an extra visual element. With floor graphics, that’s easy to do. You could print the graphics with a message inviting shoppers to check out a product or place footprints going down the aisle, heading to the display. Floor graphics consist of a base vinyl layer, an anti-skid laminate coating or matte mask and an adhesive layer that enables the graphic to stick to the floor.`,

  `Window graphics are another easy way to add an interesting visual element to your display. These graphics can function similarly to wall graphics, or you can create a smaller sign. You could, for example, place the graphic above your display to draw more attention to it. For retail displays, short-term options such as static clings and window decals are typically the best choices.`,

  `With in-store digital signage, you have the flexibility to change your design as much as you want. You can even scroll through multiple messages. The use of technology and movement in your display can also help get people’s attention and keep them interested in the product you’re selling. Consider putting basic information on the display itself and using digital signage to provide more details.`,

  `Tablet stands or kiosks are another great way to incorporate technology into your retail display. They also enable you to add in an interactive element. Tablet stands and kiosks place your tablet at eye level and frame it in a visually appealing way that encourages shoppers to use it.`,

  `Life-size cutouts of a brand spokesperson, movie character or even of a product itself can be a fun way to draw attention to your display. This is especially true if the spokesperson is familiar to your audience.`
]
,
    buttonText: "Enquiry Now",
    
},

}

export default function ISD() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}