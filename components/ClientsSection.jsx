"use client"

import { useEffect } from "react"

export default function ClientsSection() {
  const clients = [
    { id: 1, image: "/placeholder.svg?height=100&width=200" },
    { id: 2, image: "/placeholder.svg?height=100&width=200" },
    { id: 3, image: "/placeholder.svg?height=100&width=200" },
    { id: 4, image: "/placeholder.svg?height=100&width=200" },
    { id: 5, image: "/placeholder.svg?height=100&width=200" },
    { id: 6, image: "/placeholder.svg?height=100&width=200" },
    { id: 7, image: "/placeholder.svg?height=100&width=200" },
    { id: 8, image: "/placeholder.svg?height=100&width=200" },
  ]

  useEffect(() => {
    // Initialize carousel if needed
    // This would be where you'd initialize a carousel library if using one
  }, [])

  return (
    <section className="bg-light py-6">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center fs-2 fs-lg-3">Our Clients</h3>
            <hr className="w-25 mx-auto my-4 border-primary border-2" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="client-carousel">
              <div className="row">
                {clients.map((client) => (
                  <div key={client.id} className="col-6 col-md-3 mb-4" data-aos="fade-up">
                    <div className="p-3 bg-white rounded shadow-sm text-center">
                      <img
                        src={client.image || "/placeholder.svg"}
                        alt={`Client ${client.id}`}
                        className="img-fluid"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
