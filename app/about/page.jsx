import TopBar from "@/components/TopBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <main>


      <div className="bg-primary py-5 text-white">
        <div className="container">
          <h1 className="text-center">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="mb-4">Who We Are</h2>
              <p>
                Sky Signage is the NO. 1 signage company in Delhi NCR! We specialize in creating stunning visual
                communication solutions that help businesses stand out and make a lasting impression.
              </p>
              <p>
                Our team of experts excels in designing, manufacturing, and installing a diverse range of eye-catching
                designs using top-quality materials. We ensure our signs impress your target audience, leaving a lasting
                impression.
              </p>
              <p>
                With years of experience in the industry, we've built a reputation for excellence, reliability, and
                innovation. Our commitment to quality and customer satisfaction has made us the preferred choice for
                businesses across Delhi NCR.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="About Sky Signage"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2>Our Mission & Vision</h2>
              <hr className="w-25 mx-auto my-4 border-primary border-2" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4" data-aos="fade-up">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title mb-3">Our Mission</h3>
                  <p className="card-text">
                    To provide innovative and high-quality signage solutions that help businesses effectively
                    communicate their brand message and stand out in a competitive marketplace.
                  </p>
                  <p className="card-text">
                    We strive to exceed customer expectations through exceptional service, creative designs, and timely
                    delivery, ensuring that every project we undertake reflects our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title mb-3">Our Vision</h3>
                  <p className="card-text">
                    To be the leading signage company in India, recognized for our innovation, quality, and
                    customer-centric approach.
                  </p>
                  <p className="card-text">
                    We aim to continuously evolve with changing technologies and market trends, setting new standards in
                    the signage industry while maintaining our core values of integrity, creativity, and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
