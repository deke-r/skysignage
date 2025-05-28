import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "ACP Sign Board",
  backgroundImage: "/img/Sky-signage.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "ACP Sign Board", active: true },
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
    { title: "3D Brass LED Letter", link: "/3d-brass-signboard" },
    { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
    { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
    { title: "Safety Signage", link: "/safety-signage" },
    { title: "Directional Sign Board", link: "/directional-sign-board" },
  ],
};


const serviceData = {
  title: "ACP Sign Board Manufacturer",
  description: `Sky Signage is an ACP sign board manufacturer in Delhi. It is largely gown signage that has grown significantly in India. Our company's brands recognise the signage ACP board. It is communicating ideas by crucial factor. We have built an identity and brand image of the company. We have grown significantly and have now become more focused. We are here to develop a customer connection with implementing quality ACP sign boards`,
  image: "/img/ACPSignBoard.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "Your Vision, Our Expertise: Creating Stunning ACP Signage",
    details: [
      `We are experts in making these boards an ACP. It is very easy to install and by fittings and adjustments. It is easily available, and user-friendly and looks fine to every customer who takes a glimpse of it. We make it by the ACP ‘Aluminium Composite Panels’ combination of hard-wearing polyethene or aluminium.`,

      `Therefore, the ACP Sign Board is a perfect blend of durability and style. We try to make it crafty with an Aluminum Composite Panel. It withstands and widespread the test of time and increases your message. It is ideal for businesses, events, or promotions. We make it with a sleek design that attracts attention from afar. Keeping and shaping the customizable sizes, colours, and graphics ensures your brand stands out. We make a bold statement with the ACP Sign Board. We leave a lasting impression on your audience.`,

      `Furthermore, we have modern technology machines of the latest technology that are used to make an impressive. We make an ACP signboard for various brands. Similarly, we have a cost for an ACP signboard depending upon various price factors that are like sizes, and shapes`,
    ],
    buttonText: "Enquiry Now",
  },
      extraHeading: 'Leading the Industry in ACP Sign Board Manufacturing Excellence',
        extraP: [
            `We provide quality ACP Sign Boards in Delhi. We have a lot of instances of making the number of letters used in making the logo. Our making of an ACP is one of the most durable sign boards. Our ACP’s signs are rigid and strong. By choosing our boards have a great finishing of the boards. We help our clients make the ACP signboards with a variety of letters, numbers and logos.`,
            `Our service is an ACP signboard as the brand of the company. In truth, real-time results help your company to faster growth and the reputation of the company. If you are looking for an industrial area or a shopping mall for ACP boards then we can help you with the attraction and audience with creative ACP boards. We can help you to glow signboards or other offerings of ACP. We are a creative and helpful one-stop solution to all your needs.`
        ]
}

export default function ASB() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}