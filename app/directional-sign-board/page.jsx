import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Directional Sign Board in Delhi",
    backgroundImage: "/img/Sky-signage.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Directional Sign Board in Delhi", active: true },
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
        { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
        { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
        { title: "Safety Signage", link: "/safety-signage" },
    ],
};


const serviceData = {
    title: "Directional Sign Board in Delhi Manufacturer",
    description: `SkySignage is a directional sign board manufacturer in Delhi. It provides guidance and information on how to reach specific locations or destinations within a facility, city, or area.
It helps people navigate and find their way around, providing directions to places like restrooms, parking lots, offices, tourist attractions, or points of interest.
A signboard is an object designed and constructed that allows information to be passed from the user of the board to its intended audience.`,
    image: "/img/DirectionalSignBoard.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "Custom Directional Signage Experts",
        details: [
            `SkySignage manufactures directional sign boards in Delhi. With SkySignage, our company displays a variety of formats, such as images, videos, and audio, on their digital collections. We can also manage their shows remotely, schedule content, and receive real-time analytics to track the engagement of all the directional signboards. SkySignage customization options also allow businesses to brand their digital signage with their company's logo and colors.`,

            `Our signs of flexibility come in different structures, from customary pennants to present-day advanced shows. We are offering adaptable answers for various requirements and all the safety measures and settings. SkySignage is an approach to access all-around planned signage incorporating openness highlights like braille, supporting clients with handicaps in exploring spaces freely. Our cultural and historical significance signs can represent cultural landmarks and historical sites, preserving heritage and memorizing events.`,

        ],
        buttonText: "Enquiry Now",
    },
      extraHeading: 'Your Directional Sign Board Manufacturer Partner',
        extraP: [
            `Choose us for your directional sign boards. The need of our clients is because we are experts in delivering high-quality signage solutions. SkySignage can effectively guide and inform. Choose us for your directional sign board needs and experience a seamless and effective communication solution.
Similarly, our faithful team of workers has vast experience in designing, manufacturing and installing hand-made directional sign boards. We prioritize clarity and attention to detail, ensuring visually beautiful, durable, and easy-to-understand signs.
Moreover, with modern technology and quality materials, we guarantee extensive visibility and long-life performance. We take a goodwill approach, listen to your needs, provide personalized recommendations, and deliver timely results within budget. Our commitment to excellence and customer satisfaction ensures a hassle-free experience for your visitors and customers.`,

        ]
}

export default function DSB() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}