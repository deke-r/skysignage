import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        {/* Call to action section */}
        <div className="info-section bg-primary rounded-3 mb-5">
          <div className="container">
            <div className="row align-items-center py-4 px-3">
              <div className="col-lg-4">
                <div className="border border-2 border-warning p-4 py-lg-5 text-center rounded">
                  <div className="overflow-hidden">
                    <h4 className="text-white">Request a call back</h4>
                  </div>
                  <div className="overflow-hidden">
                    <p className="px-lg-1 text-white-50 mb-0">
                      Would you like to speak to one of our executive over the phone? <br />
                      Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 pl-lg-5 mt-6 mt-lg-0">
                <h5 className="text-white">I would like to discuss:</h5>
                <form className="mt-4" id="discussform">
                  <div className="row">
                    <div className="col-6">
                      <input className="form-control" id="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="col-6">
                      <input className="form-control" id="mobile" type="number" placeholder="Phone Number" required />
                    </div>
                    <div className="col-6 mt-4">
                      <input className="form-control" type="text" placeholder="Subject" id="subject" required />
                    </div>
                    <div className="col-6 mt-4">
                      <button id="submit_btn" className="btn btn-warning btn-block w-100" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                <div className="col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="footer-widget-two logo-widget">
                    <h2 className="text-white pb-3 border-bottom border-secondary mb-4">About Us</h2>
                    <div className="widget-content">
                      <div className="text text-white-50">
                        We are the good Signage manufactures of india-who focus on Quality, Design and Timely Delivery
                        of products
                        <br />
                        <Link className="text-primary" href="/about">
                          Read More...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="footer-widget-two links-widget-two">
                    <h2 className="text-white pb-3 border-bottom border-secondary mb-4">Services</h2>
                    <ul className="links list-unstyled">
                      <li>
                        <Link href="/glow-signboard" className="text-white-50 hover-text-white">
                          Glow Sign Board
                        </Link>
                      </li>
                      <li>
                        <Link href="/flex-printing" className="text-white-50 hover-text-white">
                          Flex Printing
                        </Link>
                      </li>
                      <li>
                        <Link href="/window-installations" className="text-white-50 hover-text-white">
                          Window Display
                        </Link>
                      </li>
                      <li>
                        <Link href="/display-rocks" className="text-white-50 hover-text-white">
                          Display Rocks
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                <div className="col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="footer-widget-two links-widget-two">
                    <h2 className="text-white pb-3 border-bottom border-secondary mb-4">Other links</h2>
                    <ul className="links list-unstyled">
                      <li>
                        <Link href="/about" className="text-white-50 hover-text-white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery" className="text-white-50 hover-text-white">
                          Our Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-white-50 hover-text-white">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="text-white-50 hover-text-white">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 mb-4">
                  <div className="footer-widget-two working-hour-widget">
                    <h2 className="text-white pb-3 border-bottom border-secondary mb-4">Find Us</h2>
                    <ul className="list-unstyled text-white-50">
                      <li className="d-flex mb-2">
                        <MapPin size={16} className="me-2 flex-shrink-0" />
                        <span>209, US Complex, Mathura Road, Jasola, New Delhi 110076</span>
                      </li>
                      <li className="d-flex mb-2">
                        <Mail size={16} className="me-2 flex-shrink-0" />
                        <a href="mailto:info@skysignage.in" className="text-primary">
                          info@skysignage.in
                        </a>
                      </li>
                      <li className="d-flex mb-2">
                        <Phone size={16} className="me-2 flex-shrink-0" />
                        <span>+91-9311405211</span>
                      </li>
                      <li className="d-flex mb-2">
                        <Globe size={16} className="me-2 flex-shrink-0" />
                        <a href="https://skysignage.in" className="text-primary">
                          skysignage.in
                        </a>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <ul className="list-unstyled d-flex">
                        <li className="me-3">
                          <a
                            href="https://www.facebook.com/profile.php?id=100083251807523"
                            className="btn btn-sm btn-primary rounded-circle"
                          >
                            <Facebook size={16} />
                          </a>
                        </li>
                        <li className="me-3">
                          <a href="https://twitter.com/skysignage" className="btn btn-sm btn-info rounded-circle">
                            <Twitter size={16} />
                          </a>
                        </li>
                        <li className="me-3">
                          <a
                            href="https://www.linkedin.com/in/sky-signage-aa0462245/"
                            className="btn btn-sm btn-primary rounded-circle"
                          >
                            <Linkedin size={16} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/sky__signage/"
                            className="btn btn-sm btn-danger rounded-circle"
                          >
                            <Instagram size={16} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-black py-3">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="text-white-50">
                Copyright © 2023 SKY SIGNAGE, All Right Reserved. Designed & developed by{" "}
                <a className="text-primary" href="https://skysignage.in/">
                  Sky Signage Pvt. Ltd.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
