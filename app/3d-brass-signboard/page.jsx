import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "3d Brass LED letter",
  backgroundImage: "/img/Sky-signage.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "3d Brass LED letter", active: true },
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
    { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
    { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
    { title: "Safety Signage", link: "/safety-signage" },
    { title: "Directional Sign Board", link: "/directional-sign-board" },
  ],
};


const serviceData = {
  title: "3d Brass LED letter Manufacturer",
  description: `Sky Signage is a 3D Brass LED letter Manufacturer in Delhi. We will introduce you to Delhi's premier manufacturer of 3D Brass LED letters. With glamorous and stunning 3D brass LED letters, combines elegant design with illuminated brilliance by adding a touch of experience to any space. We combine it with an elegance of brass with the modern touch of LED lighting.`,
  image: "/img/3dBrassLEDLetter.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "Light Up Your Brand with Our 3D Brass LED Signs",
    details: [
      `Sky Signage is a 3D Brass LED letter in Delhi. We make awesome 3D Brass LED letters super classy. We build captions to all shiny and bright with lights inside. With the way of tremendous our letters are like magic that are lighting up your name or message in style. Our experts at making these look amazing in 3D letters exceptionally.`,

      `At the same point, we’re perfect for decorating rooms, parties, or events. You’ll get the quality, style, and wow with us, all rolled into one awesome letter. So, if you want to make your place or signs look perfect with Sky, you can choose our 3D Brass LED letters they're the best. Our 3D Brass LED letters are handmade with care. We ensure quality because they're not just letters they're a statement of delicate and creativity that brightens the hands of any occasion.`,

      `Furthermore, it creates stunning signage with good artisans being careful of each letter to perfection. It ensures extensive quality with customizable designs, sizes, and finishes. Our letters can add a touch to any polished space. We will Illuminate your brand with our quality 3D Brass LED letters.`,
    ],
    buttonText: "Enquiry Now",
    
  },
        extraHeading: '3D Brass LED Letters: Where Quality Meets Artistry',
        extraP: [
            `Sky Signage has built strong relationships with its clients. You should choose us for 3D Brass LED letters. By all significant benefactors because we're the coolest in the biz. We have a love of crafting letters with a passion, for making them super special. We use quality materials to ensure you can last a lifetime. It is very easy to install or not let you un-organise so you won't break a sweat. In truth, if you are looking for a party, your room, or a gift, we’ll make you shine. By Trusting and choosing us. We're the experts in adding that extra sparkle to your life with our letters.`,
        ]
}

export default function BS() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}