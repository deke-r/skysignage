import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Store Fixtures",
    backgroundImage: "/img/Retail-Display.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Store Fixtures", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Retail Detail Services",
services: [
  { title: "Display Racks", link: "/display-racks" },
  { title: "Retails Counters", link: "/retails-counters" },
],

};


const serviceData = {
    title: "Store Fixtures Manufacturers",
    description: `Sky Sigange is a Store Fixtures Manufacturers in Delhi. A retail store store fixture is a physical structure or display unit used to showcase merchandise in a retail store. These fixtures are typically placed on the sales store and are designed to attract the attention of customers and promote the products being displayed.
Store fixtures are shelves, racks, gondolas, display tables and more. We make it in different materials to look aesthetic. We help to can be customized to meet the retailer's needs and branding.`,
    image: "/img/StoreFixtures.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "We are perfect in Making Store Fixtures",
        details: [
            `We are Store Fixtures Suppliers In Delhi. Store fixtures are often strategically placed throughout the store to guide customers through the space and draw their attention to specific products or promotions. We can also be used to create themed displays or highlight seasonal merchandise.`,
            `Overall, store fixtures play an important role in increase the shopping experience for customers and extensive sales for the retailer. Store fixtures play a important role in retail merchandising. We make them to attract attention to products and make them more appealing.`,
            `We can highlight new or seasonal items, create themed displays, or showcase a store's top-selling products. Overall, A good store fixture design can boost sales and enhance the shopping experience for customers.`




        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'What Sets Our Store Fixtures Apart',
    extraP: [
       `The fixture is customizable and makes efficient use of space. It is made of high-grade material with excellent load-bearing capacity. It is not a lasts longer without needing frequent repairs or additional investments of the fixtures. The flexible layouts can be easily changed to match changing customer behavior.
We Invest the good-quality material for making all structural layouts, we make with well-designed store fixtures is crucial for a successful retail business. We improve the store's look and effective display for goods, creating a calm and inviting shopping experience. When choosing us for fixtures, think about your needs, and branding to create a memorable shopping experience that helps aligns with your business goals.`

    ]
}

export default function SF() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}