"use client"

import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function TopBar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="bg-dark py-1 d-none d-sm-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto d-none d-lg-block">
            <div className="d-flex align-items-center">
              <MapPin className="text-warning" size={14} />
              <p className="ms-2 mb-0 f_14 text-white fw-normal">
                209, US Complex, Mathura Road, Jasola, New Delhi 110076.
              </p>
            </div>
          </div>
          <div className="col-auto ms-md-auto order-md-2 d-none d-sm-block">
            <ul className="list-unstyled d-flex mb-0 social-icon-head">
              <li className="mx-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100083251807523"
                  className="text-white"
                  rel="noreferrer"
                >
                  <Facebook size={14} />
                </a>
              </li>
              <li className="mx-2">
                <a target="_blank" href="https://twitter.com/skysignage" className="text-white" rel="noreferrer">
                  <Twitter size={14} />
                </a>
              </li>
              <li className="mx-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sky-signage-aa0462245/"
                  className="text-white"
                  rel="noreferrer"
                >
                  <Linkedin size={14} />
                </a>
              </li>
              <li className="mx-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/sky__signage/"
                  className="text-white"
                  rel="noreferrer"
                >
                  <Instagram size={14} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center">
              <Phone className="text-warning" size={14} />
              <a className="ms-2 mb-0 f_14 text-decoration-none d-inline text-white fw-normal" href="tel:9311405211">
                9311405211
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
