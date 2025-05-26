"use client"

import { useState } from "react"
import Image from "next/image"
import '../styles/gallery.css'


const galleryItems = [
  {
    id: 1,
    src: "/img/Gallery_Printing_2.webp",
    alt: "Printing Gallery 2",
    category: "printing",
    categories: ["all", "printing"],
  },
  {
    id: 2,
    src: "/img/Gallery_RetailDisplay_1.webp",
    alt: "Retail Display 1",
    category: "retail",
    categories: ["all", "retail"],
  },
  {
    id: 3,
    src: "/img/Gallery_RetailDisplay_2.webp",
    alt: "Retail Display 2",
    category: "retail",
    categories: ["all", "retail"],
  },
  {
    id: 4,
    src: "/img/Gallery_RetailDisplay_3.webp",
    alt: "Retail Display 3",
    category: "retail",
    categories: ["all", "retail"],
  },
  {
    id: 5,
    src: "/img/Gallery_SignBoard_2.webp",
    alt: "Sign Board 2",
    category: "signboard",
    categories: ["all", "signboard"],
  },
  {
    id: 6,
    src: "/img/Gallery_Visual_1.webp",
    alt: "Visual Merchandising 1",
    category: "visual",
    categories: ["all", "visual"],
  },
  {
    id: 7,
    src: "/img/Gallery_Visual_2.webp",
    alt: "Visual Merchandising 2",
    category: "visual",
    categories: ["all", "visual"],
  },
  {
    id: 8,
    src: "/img/Gallery_Visual_3.webp",
    alt: "Visual Merchandising 3",
    category: "visual",
    categories: ["all", "visual"],
  },
  {
    id: 9,
    src: "/img/Gallery_Printing_1.webp",
    alt: "Printing Gallery 1",
    category: "printing",
    categories: ["all", "printing"],
  },
  {
    id: 10,
    src: "/img/Gallery_Printing_3.webp",
    alt: "Printing Gallery 3",
    category: "printing",
    categories: ["all", "printing"],
  },
  {
    id: 11,
    src: "/img/GlowSignBoard.webp",
    alt: "Sign Board 1",
    category: "signboard",
    categories: ["all", "signboard"],
  },
]

const filterCategories = [
  { key: "all", label: "All" },
  { key: "printing", label: "Printing" },
  { key: "visual", label: "Visual Merchandising" },
  { key: "retail", label: "Retail Display" },
  { key: "signboard", label: "Sign Board" },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems = galleryItems.filter((item) => activeFilter === "all" || item.categories.includes(activeFilter))

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Filter Switcher */}
            <div className="text-center mb-5">
              <ul className="list-inline gallery-filter">
                {filterCategories.map((category) => (
                  <li key={category.key} className="list-inline-item">
                    <button
                      className={`btn filter-btn ${activeFilter === category.key ? "active" : ""}`}
                      onClick={() => setActiveFilter(category.key)}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              <div className="row g-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 gallery-item">
                    <div className="gallery-card">
                      <div className="image-wrapper">
                        <Image
                          src={item.src || "/placeholder.svg"}
                          alt={item.alt}
                          width={400}
                          height={300}
                          className="gallery-image"
                        />
                        <div className="overlay">
                          <div className="overlay-content">
                            <h6 className="text-white mb-2">{item.alt}</h6>
                            <span className="badge bg-primary">
                              {filterCategories.find((cat) => cat.key === item.category)?.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No Results Message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted fs-5">No items found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
