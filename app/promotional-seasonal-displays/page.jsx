import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "Promotional Seasonal Display",
  backgroundImage: "/img/Visual.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Promotional Seasonal Display", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
services: [
    { title: "Window Display", link: "/window-installations" },
  { title: "In-store Displays", link: "/in-store-displays" },
  { title: "Posters", link: "/posters" },
  { title: "Mannequin Styling", link: "/mannequin-styling" },
  { title: "Point of Sale Displays", link: "/point-of-sale-displays" },
]

};


const serviceData = {
  title: "Promotional Seasonal Display",
  description: `SkySignage is a Promotional Seasonal Display Service in Delhi. We will transform your marketing strategy with our exceptional seasonal display services in Delhi. We help you guide through your balance and capitalize on changing consumer interests and attitudes by restful the power of seasonal campaigns. Our temporary displays are expertly designed for short-term impact.
Similarly, it ensures maximum effectiveness and discovers the art of creating attractive seasonal displays, from image to execution. Let us help you make a lasting impression with our creative and modified solutions.`,
  image: "/img/PromotionalSeasonalDisplay.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "Show Off Seasonal Products Better with Our Displays!",
    details: [
      `At SkySignage we understand the importance of an effective seasonal display. We focus on creating fresh and relevant displays that make your store shine, regardless of the season. With our expertise, you can spread joy and remain commercially savvy, especially during the upcoming seasons.
We are a promotional Seasonal Display in Delhi. Moreover, our team is well-versed in the essential principle of retailing, enabling us to develop successful sales promotions for your unique needs. Let us help you make a lasting impact in the retail environment.
Furthermore, we will help to achieve your objectives with our tailored promotions. Whether it's generating cash, making room for new produspring-cleaninganing slow-moving inventory, launching a new line, or adding excitement to your space, we've got you covered. With a clear understanding of your target audience, our strategies ensure success while staying within your budget. Let's create a promotion that hits the mark.`,
    ],
    buttonText: "Enquiry Now",
    
},
extraHeading: `Why We're Your Top Choice for Promotional Seasonal Displays`,
extraP: [
       `At SkySignage in Delhi, we specialize in creating warm and inviting displays that make a lasting impression. Our tasteful and colorful designs will make your business or home entrance stand out amidst the dull surroundings. Whether you're seeking a stunning fall, winter, or holiday display, we understand and help you understand the importance of catching attention in today's competitive business world. In addition to seasonal displays, our expert team offers a vast range of services, including retaining walls, patios, outdoor kitchens, and commercial snow and ice management. In truth, trust us to guide you through the process, address your queries, and schedule a complimentary consultation. Choose us for a vibrant and exceptional experience.`

    ]
}

export default function PSD() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}