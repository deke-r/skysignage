import { MapPin, Phone, Instagram, Twitter, Facebook } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="container py-5">
      <div className="row align-items-stretch justify-content-center g-4">
        {/* Delhi Office Information */}
        <div className="col-lg-8">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h4 className="mb-0 fw-bold text-dark">Delhi Office</h4>
              </div>

              <div className="mb-4">
                <p className="text-muted mb-2 fw-medium">Address:</p>
                <address className="mb-0 lh-lg text-dark">
                  209, US Complex,
                  <br />
                  Mathura Road,
                  <br />
                  Jasola, New Delhi
                  <br />
                  110076, India
                </address>
              </div>

              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                  <Phone className="text-success" size={18} />
                </div>
                <div>
                  <p className="mb-1 text-muted small fw-medium">Mobile No.:</p>
                  <a href="tel:9311405211" className="text-decoration-none fw-semibold text-dark fs-5">
                    +91-9311405211
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4 p-md-5 text-center">
              <h4 className="mb-4 fw-bold text-dark">Connect With Us</h4>

              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://www.instagram.com/infoskysignage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg rounded-circle p-3 text-decoration-none"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Instagram size={24} />
                </a>

                <a
                  href="https://twitter.com/skysignage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg rounded-circle p-3 text-decoration-none"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Twitter size={24} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100083251807523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg rounded-circle p-3 text-decoration-none"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Facebook size={24} />
                </a>
              </div>

              <p className="text-muted mt-3 mb-0 small">Follow us for updates and latest news</p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="position-relative overflow-hidden rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.13848129075!2d77.2821337!3d28.5386791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb127175410d97!2sSky%20Signage!5e0!3m2!1sen!2sin!4v1657703596852!5m2!1sen!2sin"
                  height="450"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
