import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Retail Counters",
    backgroundImage: "/img/Retail-Display.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Retail Counters", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Retail Detail Services",
services: [
  { title: "Display Racks", link: "/display-racks" },
  { title: "Store Fixtures", link: "/store-fixtures" },
],

};


const serviceData = {
    title: "Retail Counters Manufacturers",
    description: `SkySignage is a retail counter manufacturer in Delhi. The retail checkout counter is significant because it's where you finalize sales on your POS system. It's also an opportunity to promote upcoming offers, provide excellent customer service, and leave a positive impression on customers.
Moreover, when it comes to ideas for a retail space, there are several options to consider the retail counters. Firstly, creating an experiential retail environment can engage customers through interactive displays, product demonstrations, and immersive experiences.`,
    image: "/img/StoreFixtures.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "Get Perfect Retail Counters for Your Shop",
        details: [
            `We are a retail counters supplier in Delhi. We help you to get your own physical store, it's important to cater to impulsive buyers by offering accessories, seasonal products, snacks, practical items, kid products, and gift cards. Furthermore, we help you add a screen behind cashiers can enhance the shopping experience and promote your brand.`,
            `A sleek POS system shows efficiency and style. Encourage social sharing by displaying brand hashtags, social media handles, and contests at the checkout counter. If you can't display all your merchandise, provide a digital catalog on a tablet or nearby kiosk for customers to browse.`,
            `We help you to offer personalized services, such as personal shopping or customization options, that can provide a personalized touch. SkySignage reality may provide further insights and inspiration for ideas that suit your specific retail space requirements.`




        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'Why Choose Us?',
    extraP: [
       `Choose us because we revolutionize the construction material retail industry in Delhi. With SkySignage, we bring modern trade to this unorganized sector. Enjoy a wide range of products, efficient service, and a shopping experience similar to D-Mart or Big Bazaar and many more. Join us as we become the go-to destination for construction retail counters in Delhi.`,
       `Ultimately, the choice to enter the retail counters industry will depend on an individual's interests, skills, and financial situation including with SkySignage. Our retail counters industry offers get a flexible for individuals who have a passion for fashion, technology, home goods, or similar areas of interest. It also provides all the help to our clients with lower startup costs and the potential for high returns.
       `

    ]
}

export default function RCC() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}