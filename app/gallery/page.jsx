export const metadata = {
  title: "Gallery | Skysignage - Creative Signage Projects",
  description: "Explore our Gallery of completed signage projects, showcasing custom designs, LED signs, branding boards, and innovative signage installations across Delhi NCR.",
  keywords: [
    "signage gallery",
    "Skysignage projects",
    "signage portfolio",
    "LED signage gallery",
    "branding signboards",
    "outdoor signage photos",
    "indoor signage gallery",
    "custom signage design",
    "creative signboard work",
    "signage installation images",
    "signage fabrication showcase",
    "Delhi signage gallery",
    "corporate signage projects",
    "signage visuals",
    "completed signage work"
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://skysignage.in/gallery"
  },
  openGraph: {
    title: "Gallery | Skysignage - Creative Signage Projects",
    description: "Discover Skysignage’s portfolio of premium signage designs across Delhi NCR – from concept to execution.",
    url: "https://skysignage.in/gallery",
    images: [
      {
        url: "https://skysignage.in/assets/images/gallery-og.jpg", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Gallery of Skysignage Projects"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Skysignage - Creative Signage Projects",
    description: "See our creative signage work across industries. Explore our completed signage projects at Skysignage.",
    images: ["https://skysignage.in/assets/images/gallery-twitter.jpg"] // Replace with actual Twitter image path
  }
};




import BannerC from "@/components/Banner-c";
import GallerySection from "@/components/Gallery-section";
const banner = {
    title: "Gallery",
    backgroundImage: "/img/background-2.webp",
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Gallery", active: true },
    ],
};
export default function Gallery() {
    return (
        <>
            <BannerC {...banner} />
            <GallerySection />

        </>
    );
}