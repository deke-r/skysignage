"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import "../styles/HeroSlider.css" // adjust path based on your structure

export default function HeroSlider() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      backgroundImage: "/img/header-6.webp",
      title: "We are one of the Leading Printing & Signage Company in Delhi NCR",
      isActive: true,
    },
    {
      id: 2,
      backgroundImage: "/img/header-5.webp",
      title: "Be <br> Visible!",
      isActive: false,
    },
    {
      id: 3,
      backgroundImage: "/img/header-1.webp",
      title: "A Trusted Partner in Remarkable Branding Experiences, Today - and Tomorrow.",
      isActive: false,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setSlides((prevSlides) => {
        const activeIndex = prevSlides.findIndex((slide) => slide.isActive)
        const nextIndex = (activeIndex + 1) % prevSlides.length

        return prevSlides.map((slide, index) => ({
          ...slide,
          isActive: index === nextIndex,
        }))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-slider-wrapper">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`carousel-item ${slide.isActive ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${slide.backgroundImage})`,
          }}
        >
          <section className="slide-content">
            <div className="content-wrapper text-center text-white">
              <h1
                className={`slide-title ${slide.isActive ? "animate-fade-slide" : ""}`}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <div className={`button-group ${slide.isActive ? "animate-fade-slide-delay" : ""}`}>
                <Link href="#" className="btn btn-primary me-3 mt-3">
                  Read more <ChevronRight className="ms-2" size={16} />
                </Link>
                <Link href="/contact" className="btn btn-warning mt-3">
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
                prevSlides.map((s, i) => ({
                  ...s,
                  isActive: i === index,
                })),
              )
            }
          ></li>
        ))}
      </ol>
    </div>
  )
}
