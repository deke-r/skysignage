import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
    title: "Flex Printing",
    backgroundImage: "/img/Printing.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Flex Printing", active: true },
    ],
};


const servicesData = {
    title: "Our Other Services",
    subtitle: "Explore Our Diverse Range<br> of Printing Services",
services: [
  { title: "Vinyl Printing", link: "/vinyl-printing" },
  { title: "Glass Printing", link: "/glass-printing" },
  { title: "Canvas Printing", link: "/canvas-printing" },
  { title: "Wood Printing", link: "/wood-printing" },
],

};


const serviceData = {
    title: "Flex Printing Services",
    description: `SkySignage provides the best flex printing services in Delhi. Flex printing short for flex printing that is a versatile and used for widely printing process. It is a flexible relief plate that is used to transfer ink onto various layers.
Moreover, flex printing is commonly used for packaging materials, labels, and flexible packaging. There are several types of flex printing based on the specific requirements and applications that SkySignage makes in different varieties.`,
    image: "/img/FlexPrinting.webp",
    content: {
        icon: "bi bi-chat-dots",
        heading: "Experience Our Flex Printing Service",
        details: [
            `SkySignage is not only a flex printing service, but we have plenty of varieties of printing services. In surface flexographic printing, it is commonly used for printing on various flexible packaging materials, dimply cardboard, and labels. We also print the stack flexographic that involves stacking multiple print units on top of each other which allows for the use of various colours and coatings.`,

            `Similarly, with the help of inline flexographic printing combines the printing process that reduces production time and can be efficient for high-volume printing. We have multiple printing processes that are very significant for the clients.`,

            `All these methods we use commonly for wide web printing of flexible packaging materials like plastic films and bags for all the clients and consumers whom we can help with all the necessary printings through our experts SkySignage has the potential to create and make at variance level of printings narrowly while the web is ideal for labels, tags, and smaller packaging items.`

        ],
        buttonText: "Enquiry Now",
    },
    extraHeading: 'Why Our Flex Printing Services Stand Out',
    extraP: [
       `SkySignage delivers quality flex printing in Delhi. Choosing our various processes is popular for its fast drying time and suitability for printing including resistance level materials for clients. We use flex inks that are eco-friendly and are often used for printing on food packaging and other sensitive applications.
SkySigange has developed the combined benefits of digital and flex printing. It allows you to get a variant and shorter print runs, faster setup times, and variable data printing. Our work for flex printing uses advanced technology to achieve extremely sharp and vibrant print quality.
We make it suitable for our clients to high-end packaging and labels. It's essential to select the correct flexographic printing method that best suits the specific needs of your project or application.`,

    ]
}

export default function FP() {
    return (
        <>
            <BannerC {...banner} />

            <ServiceSS {...serviceData} />

            <OtherServices {...servicesData} />

        </>
    );
}