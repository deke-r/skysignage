import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "Neon Sign Board",
  backgroundImage: "/img/Sky-signage.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Neon Sign Board", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
  services: [
      { title: "3d Acrylic LED Letter", link: "/3d-acrlic-signboard" },
    { title: "Glow Sign Board", link: "/glow-signboard" },
    { title: "3d Steel LED Letter", link: "/3d-steel-led-letter" },
    { title: "ACP Sign Board", link: "/acp-sign-board" },
    { title: "3D Brass LED Letter", link: "/3d-brass-signboard" },
    { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
    { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
    { title: "Safety Signage", link: "/safety-signage" },
    { title: "Directional Sign Board", link: "/directional-sign-board" },
  ],
};


const serviceData = {
  title: "Neon Sign Board",
  description: `A Sign Board is the first impactful impression of your company that creates an image in the mind of the people who look at it, which stays for a more extended time than any other form of advertising.

When it comes to choosing the right signboard, most of the companies prefer going for Neon Sign Board that catches the eye in less amount of time and adorns the aesthetics of the logo and brand name.`,
  image: "/img/NeonSignBoard.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "We Are Professional",
    details: [
      `Signage Boards act as the primary source of advertising, as your brand logo gets judged in a couple of moments through it. Glow sign board or the neon sign board are in general considered an excellent choice for the brands who want their logo to get the limelight in less time. Decorative acrylic letters with LED neon lights catch the eye and lures the client to walk in the store.`,

      `LED neon signs light up any event, special occasion or wedding, and are the perfect on-trend art decor for any room in the house.`,

      `A glow signboard is your one-stop solution when the logo wants to catch the eye at a glance from a long distance. Neon signage boards are of high quality and costs less. Neon Sign board are durable with an average life of about ten years plus neon lighting consume 70% less electricity than others, making it the best choice for start-up companies with low budget investments.`,
    ],
    buttonText: "Enquiry Now",
  },
}

export default function NeonSignboard() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}