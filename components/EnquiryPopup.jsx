"use client"

import { useState, useEffect } from "react"

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState("")

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const displayPopup = (serviceName = "") => {
    setService(serviceName)
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Popup container */}
      <div className={`popup-container ${isOpen ? "d-block" : "d-none"}`} id="popup">
        <div className="popup-box">
          <div className="container">
            <div className="row">
              <div className="col-md-7 p-0 form-left-pop">
                <h3>"Get Noticed!</h3>
                <p>
                  Light Up Your Business <br /> with Eye-Catching Signage! 💡
                </p>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  className="img-fluid"
                  style={{ height: "50%" }}
                  alt="Sky Signage Van"
                />
                <p>
                  <span className="span2">WE BRAND YOUR PLACES & SPACES</span>
                </p>
                <button className="close close-button cut d-md-none" onClick={closePopup}>
                  ×
                </button>
              </div>
              <div className="col-md-5 form-div-pop">
                <form className="company_form bridges-form">
                  <fieldset className="mb-3">
                    <input className="form-control" placeholder="NAME" name="name" type="text" required />
                  </fieldset>
                  <fieldset className="mb-3">
                    <input className="form-control" placeholder="EMAIL" name="email" type="email" required />
                  </fieldset>
                  <fieldset className="mb-3">
                    <input className="form-control" placeholder="PHONE NO." name="mobile" type="tel" required />
                  </fieldset>
                  <fieldset>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="MESSAGE"
                      rows={3}
                      required
                    ></textarea>
                  </fieldset>
                  <label htmlFor="services" className="col-form-label">
                    Select Services
                  </label>
                  <select
                    className="form-select form-control"
                    name="services"
                    id="services"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Options</option>
                    <option value="3D Acrlic LED Letter">3D Acrlic LED Letter</option>
                    <option value="Glow Sign Board">Glow Sign Board</option>
                    <option value="Neon Sign Board">Neon Sign Board</option>
                    <option value="3d Steel LED Letter">3d Steel LED Letter</option>
                    <option value="ACP Sign Board">ACP Sign Board</option>
                    <option value="3D Brass LED Letter">3D Brass LED Letter</option>
                    <option value="Indoor Reception Sign Board">Indoor Reception Sign Board</option>
                    <option value="Indoor Office Sign Board">Indoor Office Sign Board</option>
                    <option value="Safety Signage">Safety Signage</option>
                    <option value="Directional Sign Board">Directional Sign Board</option>
                  </select>
                  <fieldset>
                    <button
                      name="submit"
                      style={{ width: "100%", background: "white" }}
                      id="contact-submit"
                      type="submit"
                      className="btn mt-2"
                    >
                      SUBMIT
                    </button>
                  </fieldset>
                </form>
                <button className="close close-button cut-1 d-none d-md-block" onClick={closePopup}>
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global function for other components to use */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.displayPopup = function(service) {
            const event = new CustomEvent('openPopup', { detail: { service: service || '' } });
            document.dispatchEvent(event);
          }
        `,
        }}
      />
    </>
  )
}
