export const metadata = {
  title: "Wood Printing Service in Delhi - SkySignage",
  description:
    "SkySignage offers high-quality and personalized wood printing services in Delhi. Perfect for decor, signage, and gifting. Call now at 9311405211.",
  keywords: [
    "Wood Printing Service in Delhi",
    "Wood Printing in Delhi",
    "Custom Wood Prints Delhi",
    "Personalized Wood Printing",
    "Photo Printing on Wood",
    "Engraved Wood Signs",
    "Wood Branding Services",
    "Wooden Plaque Printing",
    "Wood Art Printing Delhi",
    "Best Wood Printing Company in Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/wood-printing",
  },
  openGraph: {
    title: "Wood Printing Service in Delhi - SkySignage",
    description:
      "SkySignage offers unique, high-resolution wood printing in Delhi for home, business, and custom projects. Call 9311405211 for a quote!",
    url: "https://skysignage.in/wood-printing",
    images: [
      {
        url: "https://skysignage.in/assets/images/wood-printing-og.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Wood Printing Service in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Printing Service in Delhi - SkySignage",
    description:
      "Discover the best wood printing service in Delhi with SkySignage. Premium custom prints for décor and signage. Call now!",
    images: ["https://skysignage.in/assets/images/wood-printing-twitter.jpg"], // Replace with actual image
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Wood Printing Service",
    description:
      "SkySignage offers premium wood printing services in Delhi for businesses, interiors, and personalized gifts. Quality and creativity guaranteed.",
    brand: {
      "@type": "Organization",
      name: "SkySignage",
    },
    url: "https://skysignage.in/wood-printing",
    logo: "https://skysignage.in/assets/images/logo.png", // Replace if needed
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9311405211",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
  },
};




import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Wood Printing",
    backgroundImage: "/img/Printing.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Wood Printing", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Printing Services",
services: [
  { title: "Flex Printing", link: "/flex-printing" },
  { title: "Vinyl Printing Printing", link: "/vinyl Printing-printing" },
  { title: "Vinyl  Printing", link: "/vinyl-printing" },
  { title: "Canvas Printing", link: "/canvas-printing" },
],

};


const serviceData = {
    title: "Wood Printing Services",
    description: `SkySignage provides the best wood printing service in Delhi. Woodblock printing is a style symbol of woods that relief printing. Woodblock printmaking, once widely used by artists to transfer designs onto textiles or paper, became less popular due to advancements in printing technology.
Still, plenty of clients reach for wood instead of lino blocks (or other more modern materials) to do their printing projects today the work of sky signage is tremendous for our clients.`,
    image: "/img/WoodPrinting.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "We Print Your Memories on Wood",
        details: [
            `SkySignage deliovers the best wood printing service in Delhi. We are the creative designer of this creation of a new design of printing and services. Our skilled artisans or designers draw intricate patterns on paper or fabric, taking inspiration from traditional motifs or creating original wood spaces of paintings.
Moreover, our preparation of colors is natural or synthetic which are dyes used to colour the fabric during the printing process. We mixed with colour binders and thickeners to achieve the right consistency and ensure the colours adhere properly to the fabric. We are in the workaholic printing process of fabric to be printed is first washed and dried to remove any impurities.
Furthermore, we choose the fabric and stretches that are across a flat surface or secured to a printing table. We have an artisan that applies not even pressure to ensure a clear and fine impression. Our process is repeated multiple times to create the desired pattern, aligning the blocks meticulously.`,




        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: ' Why Are We Your Best Wood Print Option?',
    extraP: [
       `We are experts in hand block printing and wood printing which requires a high level of skill, patience, and precision. Our artisans' expertise lies in aligning the blocks accurately, achieving consistent impressions, and maintaining the desired colour intensity throughout the fabric. Our working result is a beautifully printed textile with intricate patterns that showcase the rich cultural heritage and craftsmanship of the region of our work.`,
       `By choosing our passionate work towards the printing of woods are going to aesthetic pleasantly. Our block printing continues to be a revered art form and is appreciated for its timeless beauty and authenticity. We serve as a testament to the artistic traditions passed down through generations and remain a popular choice for creating stunning woods used in home furnishings, and other decorative items.`

    ]
}

export default function WP() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}