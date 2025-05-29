export const metadata = {
  title: "Poster Design Service in Delhi - SkySignage",
  description:
    "Looking for professional poster design services in Delhi? SkySignage creates eye-catching posters that leave a lasting impression. Call us at 9311405211.",
  keywords: [
    "Poster Design Service in Delhi",
    "Poster Designer in Delhi",
    "Custom Poster Design Delhi",
    "Professional Poster Design Delhi",
    "Creative Poster Services Delhi",
    "Marketing Posters Delhi",
    "Poster Printing and Design Delhi",
    "Affordable Poster Design Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/posters"
  },
  openGraph: {
    title: "Poster Design Service in Delhi - SkySignage",
    description:
      "Get professional poster design services in Delhi from SkySignage. We create vibrant, impactful posters to promote your brand effectively. Call now!",
    url: "https://skysignage.in/posters",
    images: [
      {
        url: "https://skysignage.in/assets/images/poster-design-og.jpg", // Update with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Poster Design Service in Delhi - SkySignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Poster Design Service in Delhi - SkySignage",
    description:
      "Professional poster design services in Delhi by SkySignage. Make your brand stand out with creative poster designs. Contact us today!",
    images: ["https://skysignage.in/assets/images/poster-design-twitter.jpg"] // Update with actual image path
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Poster Design Service",
    description:
      "SkySignage offers expert poster design services in Delhi that help businesses create impactful marketing materials.",
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
  title: "Poster Design",
  backgroundImage: "/img/Visual.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Poster Design", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
services: [
    { title: "Window Display", link: "/window-installations" },
  { title: "In-store Displays", link: "/in-store-displays" },
  { title: "Mannequin Styling", link: "/mannequin-styling" },
  { title: "Point of Sale Displays", link: "/point-of-sale-displays" },
  { title: "Promotional Seasonal Displays", link: "/promotional-seasonal-displays" }
]

};


const serviceData = {
  title: "Poster Design Service",
  description: `Sky Signage provides the best Mall Poster Design Service in Delhi. Posters featuring your brand's colors and logo enhance respect. We create dynamic designs that have memorable impact, support, and professionalism and leave a lasting impression on customers. Our poster designs play a crucial role in marketing, impacting business success.
You can explore various options like landscape ads, digital banners, website graphics, and social media posts with SkySignage to promote your brand or product effectively.`,
  image: "/img/Poster.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "SkySignage Desing Eye-Catching Posters",
    details: [
      `Sky Signage is the best Mall Poster Designer in Delhi. We are the best way to choose all poster type that is most appropriate for your needs is to think about what message you want to communicate with us. We can help to promote a new product launch or event, then a landscape ad may be ideal. You can discover the perfect solution for your advertising needs for all your posters. Our company specializes in crafting dynamic digital banner ads and captivating posters.
Let your imagination soar as we create the ideal promotional masterpiece tailored to your unique requirements. Let's get creative! We are coming up with plenty of poster designs that match both aesthetic and content standards with your company. Our making posters that will still be attention-grabbing to make sure all your elements from fonts through layout are carefully chosen in order.
Moreover, we make the versatility of posters and help in lots of advertising purposes. That will help you get your online ads are limited to some queries and websites and you can hang up your posters anywhere and can get a wide no of customers.`,
    ],
    buttonText: "Enquiry Now",
    
},
extraHeading: 'SkSignage Creates Unique Posters That Grab Attention',
extraP: [
       `Choosing us for making Poster Design Services for malls in Delhi. Even though, Sky Signage helps small businesses use posters for advertising. But, we are helping you get your posters to all types of locations where you can use posters for marketing, and that can not be difficult for you to focus on your marketing budget.
By taking our help posters are posted on the walls where most people cross daily and deliver your message. Our team specializes in graphic design and creating captivating posters. In today's tech-driven world, we offer flexible sizing options, allowing you to have posters in any desired shape or size. Say goodbye to limitations! We can design a poster as per your needs. With our help in online marketing, no one can compete with eye-catching workmanship.`

    ]
}

export default function POSTERS() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}