export const metadata = {
  title: "Indoor Reception Sign Board Manufacturer in Delhi",
  description: "Find the finest indoor reception sign board manufacturer in Delhi for welcoming and guiding guests efficiently. Contact SkySignage & request a free consultation.",
  keywords: [
    "Indoor Reception Sign Board Manufacturer in Delhi",
    "Indoor Reception Sign Board in Delhi",
    "Reception Sign Board Manufacturer in Delhi",
    "Reception Sign Board in Delhi",
    "Indoor signage Delhi",
    "Reception signage Delhi",
    "Custom indoor sign boards Delhi",
    "Office reception sign boards Delhi",
    "Indoor wayfinding signage Delhi",
    "Reception area signage Delhi",
    "Corporate signage Delhi",
    "Custom reception signs Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/indoor-reception-sign-board"
  },
  openGraph: {
    title: "Indoor Reception Sign Board Manufacturer in Delhi | Skysignage",
    description: "Top indoor reception sign board manufacturer in Delhi offering custom signage solutions to efficiently welcome and guide your guests. Contact Skysignage now.",
    url: "https://skysignage.in/indoor-reception-sign-board",
    images: [
      {
        url: "https://skysignage.in/assets/images/indoor-reception-signboard-og.jpg", // replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Indoor Reception Sign Board Manufacturer Delhi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoor Reception Sign Board Manufacturer in Delhi | Skysignage",
    description: "Efficient indoor reception sign board manufacturer in Delhi. Enhance your office reception area with custom signage. Contact Skysignage today.",
    images: ["https://skysignage.in/assets/images/indoor-reception-signboard-twitter.jpg"] // replace with actual Twitter image URL
  }
};



import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Indoor Reception Sign Board",
    backgroundImage: "/img/Sky-signage.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Indoor Reception Sign Board", active: true },
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
        { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
        { title: "Safety Signage", link: "/safety-signage" },
        { title: "Directional Sign Board", link: "/directional-sign-board" },
    ],
};


const serviceData = {
    title: "Indoor Reception Sign Board Manufacturer",
    description: `SkySignage is a reception sign board manufacturer in Delhi. The reception sign board is typically displayed in the entrance area. SkySignage makes a building provides visitors with information or directions regarding the reception or front desk area.

Similarly, sign studio based in Delhi, has been a pioneer in catering to the needs of Delhi and outdoor signages required by corporates, offices, and retail shops in Delhi. We are known for our compromising quality and creativity.`,
    image: "/img/IndoorReceptionSignBoard.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "Welcome Guests in Style: Discover Our Custom Indoor Sign Board Designs.",
        details: [
            `Sky signage is a leading provider of reception signboards. We create our specialized customisation with professionals. We designed our reception sign boards to enhance the fine structure of the entrance area. We can effectively convey important information to visitors.`,

            `At the reception sign board, we understand the importance of first impressions. Our team of designers and craftsmen work with clients to create signage. That aligns with your brand identity and it captures the attention of guests from the moment you step into the building. Similarly, our reception sign boards can include a range of elements. That can such as the company name, logo, directional arrows, and any other relevant information. We offer materials, finishes, and sizes to suit your needs and preferences.`,

            `Furthermore, with our experts, we ensure our reception signboards are more durable, appealing, and easy to read. Whether it is a sleek and modern design or a more traditional. By elegant style, we try to create sign boards that will leave a lasting positive impression on visitors while effectively guiding them to the reception area.`,
        ],
        buttonText: "Enquiry Now",
    },
      extraHeading: 'Upgrade Your Reception Area Today ! Get Started With Our Sign Boards Now!',
        extraP: [
            `SkySignage provides the best indoor reception sign board in Delhi. You can choose our reception sign board. It is absolutely needed because we offer unmatched expertise and quality. Our professionals excel in creating customized sign boards. We align with the brand and make a lasting impression on visitors.`,

            `We prioritize paying attention precisely because it ensures signboards are visually appealing, durable, and easy to read. According to our commitment, we provide exceptional customer service. We guarantee you will get a seamless experience from design to installation. Trust us we will enhance your entrance area with a reception sign board that will stand out and leave a positive impact on your reception. We give you the key components that you can use to personalize your 3D steel letters. Each of these unique elements can be customized to produce the ideal total.`
        ]
}

export default function IRSB() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}