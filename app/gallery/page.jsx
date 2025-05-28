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