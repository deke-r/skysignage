export const metadata = {
  title: "Vinyl Printing Service in Delhi NCR - SkySignage",
  description: "Get professional vinyl printing service in Delhi NCR. SkySignage offers customized vinyl solutions with exceptional quality and precision. Call now at 9311405211.",
  keywords: [
    "Vinyl Printing Services in Delhi",
    "Vinyl Printing in Delhi",
    "Custom Vinyl Printing Delhi NCR",
    "Vinyl Banner Printing Delhi",
    "Vinyl Poster Printing Delhi",
    "Vinyl Label Printing Delhi",
    "Vinyl Wall Graphics Delhi",
    "Best Vinyl Printing Company in Delhi",
    "Affordable Vinyl Printing in Delhi NCR",
    "Vinyl Printing Near Me"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/vinyl-printing"
  },
  openGraph: {
    title: "Vinyl Printing Service in Delhi NCR - SkySignage",
    description: "SkySignage offers top-notch vinyl printing services in Delhi NCR. High-quality custom solutions. Request a quote today!",
    url: "https://skysignage.in/vinyl-printing",
    images: [
      {
        url: "https://skysignage.in/assets/images/vinyl-printing-og.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Vinyl Printing Service in Delhi NCR"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyl Printing Service in Delhi NCR - SkySignage",
    description: "Customized vinyl printing with quality and precision. SkySignage is your trusted partner in Delhi NCR. Get a free quote today!",
    images: ["https://skysignage.in/assets/images/vinyl-printing-twitter.jpg"] // Replace with actual image path
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkySignage",
    "url": "https://skysignage.in/vinyl-printing",
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
    title: "Vinyl Printing",
    backgroundImage: "/img/Printing.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Vinyl Printing", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Printing Services",
services: [
  { title: "Flex Printing", link: "/flex-printing" },
  { title: "Glass Printing", link: "/glass-printing" },
  { title: "Canvas Printing", link: "/canvas-printing" },
  { title: "Wood Printing", link: "/wood-printing" },
],

};


const serviceData = {
    title: "Vinyl Printing Services",
    description: `Sky Signage provides Vinyl Printing service in Delhi. Vinyl printing, also known as vinyl graphics, we modernise printing technique that could used to transfer images from a computer onto a sheet. It is a also known as advanced method that offers good results in terms of color, clarity, and overall look.
Moreover, our techniques is widely used in various industries. Its ease of use and impressive outcomes for our clients. In simple terms, vinyl printing is a way to create visually charm and vibrant designs with exceptional precision and detail. It has become an integral part of the our printing industry.`,
    image: "/img/vinylPrinting.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "About Our Vinyl Printing Expertise",
        details: [
            `We are service provider of Vinyl Printing in Delhi. If you want to do vinyl printing at your home/office and anywhere in a place then these are the basic requirements. You must have an inkjet or a laser printer at your home. We have a certain varieties of paintings similarly.`,

            `Moreover, you could have inkjet that are required for vinyl printing, one is solvent based ink and the other one is water based latex ink that we provide. The last thing that you will need is vinyl sheets. With our experts we have some kinda guck in the groove. You can (usually) remove it with either a record cleaning machine or a slightly damp soft cloth (gently) in your place.`,

            `Similarly, you might be able to pry it loose with a wooden toothpick (again, gently) with the Vinyl prinitngs of your place instead. Also, there are some “solvents” we have especially made for cleaning records. You could believe in our workmanship and with ideologic craftings that Sky Signage provide.`

        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'What Sets Our Vinyl Printing Apart',
    extraP: [
       `Choosing Sky Signage for our work for pritings we have with craft work and select our work of printing. There’s not a physical deformity (scratch, abrasion, bump, foreign matter imbedded in the vinyk at time of pressing, etc.) in the groove’s vinyl with the work of Sky Signage you’re just gonna have to live with it.
In truth, you will not get wrong with the vinyl. Our dynamics of the work of printing at that spot are such that the changing width/depth of the track in the groove is too abrupt for your cartridge/stylus to track. It will help your work to try and increasing the stylus force. Our flexibility of the work and more virtuous way to get to know us and our work as well. you don’t want to turn your stylus into a miniature lathe. Stay within the stylus force parameters specified for your cartridge.`,

    ]
}

export default function VP() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}