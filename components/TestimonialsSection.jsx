"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"


export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Devesh Rohtagi",
      location: "New Delhi",
      text: "We are extremely satisfied with the products and services we receive from Sky Signage.",
      rating: 5,
      isActive: true,
    },
    {
      id: 2,
      name: "Vikrant Chauhan",
      location: "Andheri, Mumbai",
      text: "The staff is very customer oriented and a pleasure to do business with. Our orders are delivered.",
      rating: 5,
      isActive: false,
    },
    {
      id: 3,
      name: "Sanjay Thakur",
      location: "Utter Pradesh",
      text: "Error-free in a timely, consistent manner. We appreciate your dedication to your customers.",
      rating: 5,
      isActive: false,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prevTestimonials) => {
        const activeIndex = prevTestimonials.findIndex((testimonial) => testimonial.isActive)
        const nextIndex = (activeIndex + 1) % prevTestimonials.length

        return prevTestimonials.map((testimonial, index) => ({
          ...testimonial,
          isActive: index === nextIndex,
        }))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-primary py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="text-center fs-2 fs-md-3 text-white">What our clients say about us</h3>
            <hr className="w-25 mx-auto my-4 border-white border-2" />

            <div className="position-relative testimonial-carousel">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-block ${testimonial.isActive ? "d-block" : "d-none"}`}
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    animation: testimonial.isActive ? "fadeIn 0.5s ease-in-out" : "none",
                  }}
                >
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h5 className="mb-0">{testimonial.name}</h5>
                        <div className="text-muted">{testimonial.location}</div>
                      </div>
                      <div className="d-flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-warning" size={16} fill="#fdd428" />
                        ))}
                      </div>
                    </div>
                    <p className="mb-0">{testimonial.text}</p>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-center mt-4">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    className={`btn btn-sm mx-1 ${testimonial.isActive ? "btn-light" : "btn-outline-light"}`}
                    onClick={() => {
                      setTestimonials((prevTestimonials) =>
                        prevTestimonials.map((t) => ({
                          ...t,
                          isActive: t.id === testimonial.id,
                        })),
                      )
                    }}
                  >
                    <span className="visually-hidden">Testimonial {testimonial.id}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
