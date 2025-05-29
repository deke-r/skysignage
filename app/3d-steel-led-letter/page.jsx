export const metadata = {
  title: "3D Steel LED Letter Manufacturer in Delhi",
  description: "Boost your business with 3D Steel LED Letters in Delhi. Shine bright, get noticed, and make an impact! Click to enhance your brand! Get a Quote. Call on 9311405211",
  keywords: [
    "3D Steel LED Letter Manufacturer in Delhi",
    "3D Steel LED Letter in Delhi",
    "3D LED Letter in Delhi",
    "3D Steel Letter in Delhi",
    "Steel LED Letters Delhi",
    "Custom 3D Steel LED Letters Delhi",
    "3D Signage Delhi",
    "LED Letter Manufacturer Delhi",
    "Outdoor LED Letters Delhi",
    "Indoor LED Letters Delhi",
    "Business Signage Delhi",
    "Metal LED Letters Delhi",
    "3D Sign Board Manufacturer Delhi",
    "Brand Signage Delhi",
    "Sign Board Fabrication Delhi",
    "Skysignage Delhi"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/3d-steel-led-letter"
  },
  openGraph: {
    title: "3D Steel LED Letter Manufacturer in Delhi | Skysignage",
    description: "Get high-quality 3D Steel LED Letters from the top manufacturer in Delhi. Boost your brand visibility with custom-made steel LED letters. Contact us now!",
    url: "https://skysignage.in/3d-steel-led-letter",
    images: [
      {
        url: "https://skysignage.in/assets/images/3d-steel-led-letter-og.jpg", // update with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "3D Steel LED Letter Manufacturer Delhi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Steel LED Letter Manufacturer in Delhi | Skysignage",
    description: "Boost your business with premium 3D Steel LED Letters in Delhi. Contact Skysignage for custom steel LED letters and signage solutions.",
    images: ["https://skysignage.in/assets/images/3d-steel-led-letter-twitter.jpg"] // update with your actual Twitter image URL
  }
};




import BannerC from "@/components/Banner-c";
import OtherServices from "@/components/OtherServices";
import ServiceSS from "@/components/ServiceSC";
const banner = {
  title: "3d Steel LED Letter",
  backgroundImage: "/img/Sky-signage.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "3d Steel LED Letter", active: true },
  ],
};


const servicesData = {
  title: "Our Other Services",
  subtitle: "Explore Our Diverse Range<br> of Signboard Services",
  services: [
      { title: "3d Acrylic LED Letter", link: "/3d-acrlic-signboard" },
    { title: "Glow Sign Board", link: "/glow-signboard" },
    { title: "Neon Signboard", link: "/neon-signboard" },
    { title: "ACP Sign Board", link: "/acp-sign-board" },
    { title: "3D Brass LED Letter", link: "/3d-brass-signboard" },
    { title: "Indoor Reception Sign Board", link: "/indoor-reception-sign-board" },
    { title: "Indoor Office Sign Board", link: "/indoor-office-sign-board" },
    { title: "Safety Signage", link: "/safety-signage" },
    { title: "Directional Sign Board", link: "/directional-sign-board" },
  ],
};


const serviceData = {
  title: "3d Steel LED Letter Manufacturer",
  description: `Sky Signage is a 3D Steel LED Letter manufacturer in Delhi. These sleek digital screens, placed next to store signs, bring your logo to life with dynamic 3D displays. Perfect for retail, service providers, and more, our versatile advertising element creates an eye-catching experience. Plus, it's a cost-effective investment! Elevate your business with our simple yet powerful LED signboards.`,
  image: "/img/3dSteelLEDLetter.webp",
  content: {
    icon: "bi bi-chat-dots",
    heading: "Who We Are?",
    details: [
      `We are a 3D Steel LED Letter Manufacturer in Delhi. We provide extensive services to our clients by leveraging advancements. You can install letters for a business that requirements and the attention of every client. Sky Signage 3D LED sign boards are useful for that work and will attract a great number of buyers towards your business.`,
      `Additionally, 3D steel is sleek, sturdy, and stylish. We craft it with precision and these letters boldly stand out, and you can add it by the depth to space. Our customizable fonts and sizes allow for personalized expression. You can be ideal for signage, branding, or decorative purposes. You can elevate your message with the timeless elegance of 3D steel letters`,
      `Additionally, 3D steel is sleek, sturdy, and stylish. We craft it with precision and these letters boldly stand out, and you can add it by the depth to space. Our customizable fonts and sizes allow for personalized expression. You can be ideal for signage, branding, or decorative purposes. You can elevate your message with the timeless elegance of 3D steel letters`,
    ],
    buttonText: "Enquiry Now",
       
  },
     extraHeading: 'Light Up Your Business Presence with 3D Steel LED Letters',
        extraP: [
            `Our goal of customization is to get the most out of the sign should have for our clients. You should choose us to personalize it to meet the requirements of your company. We will help to build your company space and your company's image as well. We will give you the most important aspect of this is to give serious consideration to the design of your signs.`,
            `However, In, today's competitive market is Sky signage Here you touch the sky. Getting some advice and input from our experts and professionals may be just what you need to gain that competitive edge. These are some factors of the most important aspects to consider while designing a sign Shape.
We give you the key components that you can use to personalize your 3D steel letters. Each of these unique elements can be customized to produce the ideal total.`
        ]
}

export default function SSL() {
    return (
        <>
           <BannerC {...banner} />

         <ServiceSS {...serviceData} />

         <OtherServices {...servicesData} />
        
        </>
    );
}