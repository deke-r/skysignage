export const metadata = {
  title: "Canvas Printing Services in Delhi NCR - SkySignage",
  description: "SkySignage offers premium canvas printing services in Delhi NCR with vibrant, high-resolution prints tailored to your needs. Get in touch now at 9311405211.",
  keywords: [
    "Canvas Printing Services in Delhi",
    "Canvas Printing in Delhi",
    "Custom Canvas Printing Delhi NCR",
    "Photo Canvas Printing Delhi",
    "Best Canvas Printing Company Delhi",
    "Canvas Wall Art Printing Delhi",
    "Canvas Poster Printing Delhi",
    "Affordable Canvas Printing in Delhi",
    "High Quality Canvas Prints Delhi",
    "Canvas Print Shop in Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/canvas-printing"
  },
  openGraph: {
    title: "Canvas Printing Services in Delhi NCR - SkySignage",
    description: "Looking for high-quality canvas prints in Delhi NCR? SkySignage delivers professional, vibrant canvas prints for your home or office. Call now!",
    url: "https://skysignage.in/canvas-printing",
    images: [
      {
        url: "https://skysignage.in/assets/images/canvas-printing-og.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Canvas Printing Services in Delhi NCR"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas Printing Services in Delhi NCR - SkySignage",
    description: "Premium and affordable canvas printing services by SkySignage. Perfect for homes, offices, and galleries. Contact us today!",
    images: ["https://skysignage.in/assets/images/canvas-printing-twitter.jpg"] // Replace with your image path
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkySignage",
    "url": "https://skysignage.in/canvas-printing",
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
    title: "Canvas  Printing",
    backgroundImage: "/img/Printing.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Canvas  Printing", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Printing Services",
services: [
  { title: "Flex Printing", link: "/flex-printing" },
  { title: "Vinyl Printing Printing", link: "/vinyl Printing-printing" },
  { title: "Vinyl  Printing", link: "/vinyl-printing" },
  { title: "Wood Printing", link: "/wood-printing" },
],

};


const serviceData = {
    title: "Canvas  Printing Services",
    description: `SkySignage provides Canvas Printing Services in Delhi. Canvas print Image on canvas, stretched or gallery-wrapped on a frame, displayed as wall art.. We make canvas prints that are a great way to relive your memories.
Similarly, whether it's a family vacation, birthday, or school photos. We print canvas photos make your photos eye-catching and impressive and enhance the aesthetic appeal of your home or office.`,
    image: "/img/CanvasPrinting.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "We Make Stunning Canvas Artwork",
        details: [
            `We provide the best canvas printing in Delhi. This is our specially hand-stretched by professional artisans and printed on the best machines to get top-quality prints. Canvas prints are a unique and modern way to display your favorite photos or artwork in a high-quality format. Canvas print: Image printed on canvas, stretched over a wooden frame, creating a 3D effect with depth and texture for captivating wall art.`,

            `Canvas prints are made from durable cotton or polyester material, retaining a natural look. Specially formulated ink ensures vibrant, long-lasting colors.
We're versatile, available in various sizes and designs. Hang them on walls, put them on shelves, or create large-scale installations. Perfect for any space, canvas prints offer flexibility and personalization.`,



        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'We Make Stunning Canvas Artwork',
    extraP: [
       `We provide the best canvas printing in Delhi. This is our specially hand-stretched by professional artisans and printed on the best machines to get top-quality prints. Canvas prints are a unique and modern way to display your favorite photos or artwork in a high-quality format. Canvas print: Image printed on canvas, stretched over a wooden frame, creating a 3D effect with depth and texture for captivating wall art.
Canvas prints are made from durable cotton or polyester material, retaining a natural look. Specially formulated ink ensures vibrant, long-lasting colors.
We're versatile, available in various sizes and designs. Hang them on walls, put them on shelves, or create large-scale installations. Perfect for any space, canvas prints offer flexibility and personalization.`,

    ]
}

export default function CP() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}