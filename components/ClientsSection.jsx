"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

export default function ClientsSection() {
  const clients = [
    { id: 1, image: "/img/client1.webp" },
    { id: 2, image: "/img/client2.webp" },
    { id: 3, image: "/img/client3.webp" },
    { id: 4, image: "/img/client4.webp" },
    { id: 5, image: "/img/client5.webp" },
    { id: 6, image: "/img/client6.webp" },
    { id: 7, image: "/img/client7.webp" },
    { id: 8, image: "/img/client8.webp" },
    { id: 9, image: "/img/client9.webp" },
    { id: 10, image: "/img/client10.webp" },
    { id: 11, image: "/img/client11.webp" },
  ]

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="fs-2 fs-lg-3">Our Clients</h3>
          <hr className="w-25 mx-auto my-4 border-primary border-2" />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={`Client ${client.id}`}
                  className="img-fluid"
                  style={{ maxHeight: "80px", width: "auto" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
