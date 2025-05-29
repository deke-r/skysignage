export const metadata = {
  title: "Contact Us | Skysignage - Signage Solutions in Delhi NCR",
  description: "Get in touch with Skysignage for expert signage services in Delhi NCR. Reach out for inquiries, quotes, or consultations on your signage needs.",
  keywords: [
    "contact Skysignage",
    "signage company contact Delhi",
    "Delhi NCR signage enquiry",
    "get signage quote",
    "custom signage support",
    "LED signboard contact Delhi",
    "retail signage Delhi contact",
    "corporate signage help Delhi",
    "outdoor signage enquiry",
    "acrylic signage contact",
    "wayfinding signage Delhi NCR",
    "signage consultation Delhi",
    "Skysignage phone number",
    "Skysignage email address",
    "Skysignage Delhi location"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/contact"
  },
  openGraph: {
    title: "Contact Skysignage | Signage Experts in Delhi NCR",
    description: "Need signage solutions? Contact Skysignage for quotes, support, and custom signage consultations in Delhi NCR.",
    url: "https://skysignage.in/contact",
    images: [
      {
        url: "https://skysignage.in/assets/images/contact-og.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Contact Skysignage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Skysignage - Delhi NCR's Trusted Signage Partner",
    description: "Reach out to Skysignage for professional signage solutions in Delhi NCR. Call, email, or visit us today.",
    images: ["https://skysignage.in/assets/images/contact-twitter.jpg"] // replace with real image
  }
};




import BannerC from "@/components/Banner-c";
import ContactSection from "@/components/ContactSection";
const banner = {
  title: "Contact",
  backgroundImage: "/img/background-2.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact", active: true },
  ],
};
export default function Contact() {
    return (
        <>
          <BannerC {...banner} />
          <ContactSection/>
        
        </>
    );
}