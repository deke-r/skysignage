import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "Mannequin Styling",
  backgroundImage: "/img/Visual.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Mannequin Styling", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
services: [
    { title: "Window Display", link: "/window-installations" },
  { title: "In-store Displays", link: "/in-store-displays" },
  { title: "Posters", link: "/posters" },
  { title: "Promotional Seasonal Displays", link: "/promotional-seasonal-displays" },
  { title: "Point of Sale Displays", link: "/point-of-sale-displays" },
]

};


const serviceData = {
  title: "Mannequin Styling Manufacturer",
  description: `Sky Signage is the best Mannequin Styling Manufacturer in Delhi. Mannequin styling is essential in visual merchandising. It displays your products, attracts customers, and reflects your brand. It can be challenging, as you need to balance creativity and consistency. We help you achieve a balance between creativity and consistency in mannequin styling.
Similarly, with defining your brand's visual identity and target audience. Our pattern of recognition and application is a useful method to solve unseen problems in the technical way of screening Mannequin Styling.`,
  image: "/img/MannequinStyling.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "We Manufacture Realistic Mannequin Styling",
    details: [
      `SkySignage provides the best Mannequin Styling service in Delhi. Our plan is watchable themes and narratives for your displays. We use consistent colour schemes, materials, and props to experiment with poses and gestures to add creativity and regular fit. We review and update your displays to keep them fresh and aligned with your vision.
At our core, we are a team of creative individuals passionate about visual merchandising. We believe in the power of mannequin styling to showcase products, attract customers, and reflect brand identity. With a balance of creativity and consistency, we create memorable and engaging displays that bring joy to our customers.
We are a team of workaholics dedicated to creating lovely mannequin displays. With attention to detail and dedication towards our aim to balance creativity and consistency. By seeking feedback and drawing inspiration from various sources to continuously evolve and deliver impactful visual merchandising solutions.`,
    ],
    buttonText: "Enquiry Now",
    
},
extraHeading: `Why We're Your Best Choice for Mannequin Styling`,
extraP: [
       `While choosing our mannequin styling, you might consult and that helps with important considerations to keep in mind to ensure that the mannequin is not too heavy, as this can make not too difficult to move and position. Additionally, choose our forms that will reflect the shape and size of your target market, ensuring relatability.
Moreover, we'll guide you through avoiding placing mannequins in helpful positions, such as at entrance or exit doors, to allow smooth customer flow. It helps in adequately fitted clothing without unnecessary pins and enhances the overall appearance.
You can choose and select our outfits carefully, considering the brand image and current trends. Regularly change the mannequin positions to maintain a fresh look and try to Keep the mannequins clean and free from stains. Lastly, update the clothing seasonally to avoid a lack of dullness and keep customers engaged.`

    ]
}

export default function MS() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}