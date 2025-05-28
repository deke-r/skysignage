import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Indoor Office Sign Board",
    backgroundImage: "/img/Sky-signage.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Indoor Office Sign Board", active: true },
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
        { title: "Safety Signage", link: "/safety-signage" },
        { title: "Directional Sign Board", link: "/directional-sign-board" },
    ],
};


const serviceData = {
    title: "Indoor Office Sign Board Manufacturer",
    description: `Sky Signage is a indoor office sign board manufacturer in delhi. Signage is an office sign board that displays or placards used in an office setting to provide information to employees, clients, or visitors. We make signage offer different benefits across various settings, from associations to public spaces, and office spaces. It fills in as an astounding resource for correspondence, checking, information dispersal, and steering of all signage.`,
    image: "/img/IndoorOfficeSignBoard.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "We Create Custom Signs for Your Office Space",
        details: [
            `Sky Signage communicates that conveys messages, instructions, warnings, and information quickly and effectively. We add communication with our clients in public spaces. Our well-designed signage reinforces brand identity by showcasing logos, colours, and trust among customers. Sky Signage promotes products, services, and special offers, attracting potential customers and boosting sales through eye-catching visuals and compelling messages.`,

            `Similarly, we create aesthetic creative and attractive signage that adds to the visual appeal of spaces, contributing to a positive ambience and creating a memorable impression. Our safety measures and compliance signs communicate essential precautions and warnings, ensuring public safety and compliance with regulations in our work. Our quality signage is built to withstand weather conditions ensuring it remains functional and visible for an extended period of life.`,

        ],
        buttonText: "Enquiry Now",
    },
      extraHeading: 'Choose Our Aesthetics Indoor Office Signboard',
        extraP: [
            `Sky Signage provides quality indoor office sign board in Delhi. You can make opinions of your own design from scratch or choose from the designed templates and bring your idea to us. Our lighting is by throwing in the right colours of your patterns on your plastic board signs. Finally, you can sit with us, and we’ll take your idea and make it for you from there each and everything, and have your tailored sign out to you and ready for use.`,

            `In summary, signage's benefits incorporate effective correspondence, brand support, advancing potential, further creating a course, beautiful improvement, cost-ampleness, steady detectable quality, close-by publicizing, and security consistency, and that is just a glimpse of the larger in our work. It has a vital impact in making supportive, clearly charming, and capable conditions for your business and public spaces.`
        ]
}

export default function I0SB() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}