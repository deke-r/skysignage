"use client"

import { useState } from "react"




export default function ServiceSS({ title, description, image, content }) {
  const [showModal, setShowModal] = useState(false)

  const handleEnquiry = () => {
    setShowModal(true)
  }

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="text-center">
                <h3 className="display-5 display-md-4 fw-bold text-dark mb-4">{title}</h3>
                <hr className="mx-auto border-primary border-3 opacity-100" style={{ width: "4.20873rem" }} />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="text-center px-lg-5">
                <p className="lead text-muted lh-lg fs-6" style={{ textAlign: "justify" }}>
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative overflow-hidden  shadow-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  width={600}
                  height={400}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6 ps-lg-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                {/* Icon and Heading */}
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3 flex-shrink-0">
                    <span className={`${content.icon} fs-2 text-primary`}></span>
                  </div>
                  <h5 className="fw-bold text-dark mb-0 lh-base">{content.heading}</h5>
                </div>

                {/* Content Details */}
                <div className="mb-4">
                  {content.details.map((paragraph, index) => (
                    <p key={index} className="text-muted lh-lg mb-3" style={{ textAlign: "justify" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Call to Action Button */}
                <div className="mt-auto">
                  <button
                    onClick={handleEnquiry}
                    className="btn btn-primary  px-4 py-2 fw-medium shadow-sm hover-lift"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    {content.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}
