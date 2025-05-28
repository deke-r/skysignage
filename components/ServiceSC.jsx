"use client"

import { useState } from "react"

export default function ServiceSS({ title, description, image, content, extraHeading, extraP }) {
  const [showModal, setShowModal] = useState(false)

  const handleEnquiry = () => {
    setShowModal(true)
  }

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          {/* Header Section */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h3 className="display-5 fw-bold text-dark mb-3">{title}</h3>
              <hr className="mx-auto border-primary border-3 opacity-100" style={{ width: "4rem" }} />
            </div>
          </div>

          {/* Description Section */}
          <div className="row mb-5">
            <div className="col-md-12">
              <p className="lead text-muted lh-lg fs-6 text-justify px-lg-5 mb-0">
                {description}
              </p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="row align-items-center mb-5">
            {/* Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative overflow-hidden shadow">
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  width={600}
                  height={400}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "550px" }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 ps-lg-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                {/* Icon and Heading */}
                {content.icon || content.heading ? (
                  <div className="d-flex align-items-center mb-4">
                    {content.icon && (
                      <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3 flex-shrink-0">
                        <span className={`${content.icon} fs-2 text-primary`}></span>
                      </div>
                    )}
                    <h5 className="fw-bold text-dark mb-0 lh-base">{content.heading}</h5>
                  </div>
                ) : null}

                {/* Paragraphs */}
                <div className="mb-4">
                  {content.details.map((paragraph, index) => (
                    <p key={index} className="text-muted lh-lg mb-3 text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-auto">
                  <button
                    onClick={handleEnquiry}
                    className="btn btn-primary px-4 py-2 fw-medium shadow-sm"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    {content.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Section */}
          {(extraHeading || (extraP && extraP.length > 0)) && (
            <>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    {extraHeading && content.icon && (
                      <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3 flex-shrink-0">
                        <span className={`${content.icon} fs-2 text-primary`}></span>
                      </div>
                    )}
                    <h5 className="fw-bold text-dark mb-0 lh-base">{extraHeading}</h5>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  {extraP?.map((paragraph, index) => (
                    <p key={index} className="text-muted lh-lg mb-3 text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
