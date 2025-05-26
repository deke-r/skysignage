"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import "../styles/HeroSlider.css"

export default function HeroSlider() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      backgroundImage: "/img/header-6.webp",
      title: "We are one of the Leading Printing & Signage Company in Delhi NCR",
      isActive: true,
      alignment: "left",
    },
    {
      id: 2,
      backgroundImage: "/img/header-5.webp",
      title: "Be <br> Visible!",
      isActive: false,
      alignment: "center",
    },
    {
      id: 3,
      backgroundImage: "/img/header-1.webp",
      title: "A Trusted Partner in Remarkable Branding Experiences, Today - and Tomorrow.",
      isActive: false,
      alignment: "right",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setSlides((prev) => {
        const activeIndex = prev.findIndex((s) => s.isActive)
        const nextIndex = (activeIndex + 1) % prev.length
        return prev.map((s, i) => ({ ...s, isActive: i === nextIndex }))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-slider-wrapper">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`carousel-item fade-transition ${slide.isActive ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${slide.backgroundImage})`,
          }}
        >
          <section className={`slide-content ${slide.alignment}`}>
            <div className="content-wrapper text-white">
              <h1
                className={`slide-title ${slide.isActive ? "animate-fade-slide" : ""}`}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <div className={`button-group ${slide.isActive ? "animate-fade-slide-delay" : ""}`}>
                <Link href="#" className="btn btn-outline-primary fw-semibold text-center rounded-pill me-3 ps-4 mt-3">
                  Read more <ChevronRight className="ms-2" size={16} />
                </Link>
                <Link href="/contact" className="btn btn-warning rounded-pill ps-4 fw-semibold mt-3">
                  Contact us <ChevronRight className="ms-2" size={16} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      ))}

      <ol className="carousel-indicators position-absolute bottom-0 start-50 translate-middle-x mb-3">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={slide.isActive ? "active" : ""}
            onClick={() =>
              setSlides((prevSlides) =>
                prevSlides.map((s, i) => ({ ...s, isActive: i === index }))
              )
            }
          />
        ))}
      </ol>
    </div>
  )
}
