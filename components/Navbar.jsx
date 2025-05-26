"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import '../styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`znav-white znav-container sticky-top navbar-elixir ${isScrolled ? "scrolled" : ""}`}
      id="znav-container"
    >
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <Link href="/" className="navbar-brand overflow-hidden ms-lg-5 pr-1 my-auto">
            <img src="/img/logo-dark.png" alt="logo" width={100} className="logo_image" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNavDropdown"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className={`hamburger hamburger--emphatic ${isMenuOpen ? "is-active" : ""}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNavDropdown">
            <ul className="navbar-nav fs-0 fw-700 mx-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link shadow_nav">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link shadow_nav">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown position-static">
                <Link
                  href="#"
                  className="nav-link services-dp shadow_nav"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div className="dropdown-menu mega-menu w-100" aria-labelledby="servicesDropdown">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <h3>
                          <Link href="#">Sign Board</Link>
                        </h3>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="/3d-acrlic-signboard" className="dropdown-item">
                              3D Acrlic LED Letter
                            </Link>
                          </li>
                          <li>
                            <Link href="/glow-signboard" className="dropdown-item">
                              Glow Sign Board
                            </Link>
                          </li>
                          <li>
                            <Link href="/neon-signboard" className="dropdown-item">
                              Neon Sign Board
                            </Link>
                          </li>
                          <li>
                            <Link href="/3d-steel-led-letter" className="dropdown-item">
                              3d Steel LED Letter
                            </Link>
                          </li>
                          <li>
                            <Link href="/acp-sign-board" className="dropdown-item">
                              ACP Sign Board
                            </Link>
                          </li>
                          <li>
                            <Link href="/3d-brass-signboard" className="dropdown-item">
                              3D Brass LED Letter
                            </Link>
                          </li>
                          <li>
                            <Link href="/indoor-reception-sign-board" className="dropdown-item">
                              Indoor Reception Sign Board
                            </Link>
                          </li>
                          <li>
                            <Link href="/indoor-office-sign-board" className="dropdown-item">
                              Indoor Office Sign Board
                            </Link>
                          </li>
                          <li>
                            <Link href="/safety-signage" className="dropdown-item">
                              Safety Signage
                            </Link>
                          </li>
                          <li>
                            <Link href="/directional-sign-board" className="dropdown-item">
                              Directional Sign Board
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h3>
                          <Link href="#">Printing</Link>
                        </h3>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="/flex-printing" className="dropdown-item">
                              Flex Printing
                            </Link>
                          </li>
                          <li>
                            <Link href="/vinyl-printing" className="dropdown-item">
                              Vinyl Printing
                            </Link>
                          </li>
                          <li>
                            <Link href="/glass-printing" className="dropdown-item">
                              Glass Printing
                            </Link>
                          </li>
                          <li>
                            <Link href="/canvas-printing" className="dropdown-item">
                              Canvas Printing
                            </Link>
                          </li>
                          <li>
                            <Link href="/wood-printing" className="dropdown-item">
                              Wood Printing
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h3>
                          <Link href="#">Visual Merchandising</Link>
                        </h3>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="/window-installations" className="dropdown-item">
                              Window Display
                            </Link>
                          </li>
                          <li>
                            <Link href="/in-store-displays" className="dropdown-item">
                              In-store Displays
                            </Link>
                          </li>
                          <li>
                            <Link href="/posters" className="dropdown-item">
                              Posters
                            </Link>
                          </li>
                          <li>
                            <Link href="/promotional-seasonal-displays" className="dropdown-item">
                              Promotional Seasonal Displays
                            </Link>
                          </li>
                          <li>
                            <Link href="/mannequin-styling" className="dropdown-item">
                              Mannequin Styling
                            </Link>
                          </li>
                          <li>
                            <Link href="/point-of-sale-displays" className="dropdown-item">
                              Point of Sale Displays
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h3>
                          <Link href="#">Retail Display</Link>
                        </h3>
                        <ul className="list-unstyled">
                          <li>
                            <Link href="/display-racks" className="dropdown-item">
                              Display Racks
                            </Link>
                          </li>
                          <li>
                            <Link href="/store-fixtures" className="dropdown-item">
                              Store Fixtures
                            </Link>
                          </li>
                          <li>
                            <Link href="/retails-counters" className="dropdown-item">
                              Retails Counters
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/gallery" className="nav-link shadow_nav">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link shadow_nav">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link shadow_nav">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
