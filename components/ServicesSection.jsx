"use client"

import { useState } from "react"



export default function ServicesSection() {
  const [services] = useState([
    {
      id: "signboard",
      title: "Sign Board",
      description:
        "Sky Signage offers a diverse array of dynamic signboards, including 3D Acrylic LED Letters, Glow Sign Board, Neon Sign Boards, 3d Steel LED Letters, ACP Sign Board, 3D Brass LED Letters, Indoor, Reception Sign Boards, Indoor Office Sign Board, Safety Signage, Directional Sign Board, and many more amazing signboards. These signboards can totally change how a business works in just a short time. They're not just for showing off, they're like secret messengers about a business, showing how it feels about its stuff and customers. And the best part? Those LED signs are like business boosters. They make brands look great and help everyone know about them. So, if you need a professional, team up with a signboard manufacturer - Sky Signage!",
      image: "/img/OurServicesSignBoard.webp",
    },
    {
      id: "printing",
      title: "Printing",
      description:
        "Putting words and pictures on paper using ink or a computer to share information and ideas. Printing is like making big signs on flexible material, printing on vinyl, glass, canvas, and even wood. it helps share information clearly, keeps important records, and makes things like posters and signs that catch your eye. Sky Signage does it all! We're experts at making copies of pictures and words using machines. And here's the exciting part — We offer flex printing, vinyl printing, glass printing, canvas printing, and even wood printing. So, if you're looking for eye-catching ads, unique posters, or unique prints on all sorts of stuff, Sky Signage is here to help you with our printing magic.",
      image: "/img/OurServicesPrinting.webp",
      isReversed: true,
    },
    {
      id: "visual-merchandising",
      title: "Visual Merchandising",
      description:
        "Visual merchandising is arranging products and displays in stores to attract customers, tell stories, and boost sales through appealing visuals. Visual merchandising enhances brand image, increases customer engagement, boosts sales, and creates memorable shopping experiences through captivating displays. Sky Signage makes stores look amazing. We arrange products in ways that catch your eye and make you want to buy stuff. We arrange the products in store windows that make you want to come inside. We also make awesome setups inside the stores that tell stories about the products. We create awesome posters and displays that show off things on sale or for special times like holidays. Sky Signage makes shopping more exciting and helps stores sell more things!",
      image: "/img/OurServicesVisualMechandising.webp",
    },
    {
      id: "retail-display",
      title: "Retail Display",
      description:
        "Retail display is like arranging things in a store to grab your attention, showcase products and make the shopping experience a good one. It is like arranging the products on the shelves, tables and counters in a good way to show their best side. When stores use display racks, store fixtures, and retail counters, it helps them sell more items because customers notice them better. Good displays inspire you to shop and wander, and they also make the store look better and more interesting. Therefore, retail displays are a smart way for stores to create an engaging and immersive shopping environment, drive more sales, and make your store look great to everyone who walks in.",
      image: "/img/OurServicesRetailDisplay.webp",
      isReversed: true,
    },
  ])

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="text-center fs-2 fs-md-3">Our Services</h3>
        <hr className="w-25 mx-auto my-4 border-primary border-2" />

        {services.map((service, index) => (
          <div key={service.id} className="row no-gutters  position-relative mt-4 mt-lg-0">
            <div
              className="position-absolute top-50 start-50 translate-middle d-none d-lg-block bg-white shadow-sm"
              style={{ width: "25px", height: "25px", transform: "rotate(45deg)", zIndex: 1 }}
            ></div>

            <div
              className={`col-lg-6 py-3 py-lg-0  mb-0 ${service.isReversed ? "order-lg-2" : ""}`}
              style={{ minHeight: "400px" }}
            >
              <div
                className="h-100"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos={service.isReversed ? "fade-left" : "fade-right"}
              ></div>
            </div>

            <div
              className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg-white  shadow-sm"
              data-aos={service.isReversed ? "fade-right" : "fade-left"}
            >
              <div className="d-flex align-items-center h-100">
                <div>
                  <div className="overflow-hidden">
                    <h5 className="mb-3">{service.title}</h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3">{service.description}</p>
                    <div className="mt-4">
                      <button
                        className="btn btn-outline-primary rounded-pill"
                        onClick={() => alert(`Enquiry for ${service.title}`)}
                      >
                        Enquiry Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="row mt-5">
          <div className="col-sm-6 col-lg-4 px-4 px-sm-3 text-lg-x" data-aos="fade-up" data-aos-delay="100">
            <h5 className="fw-bold">
              Computerized Digital Printing Plotters <br /> (Including Solvent Machines as well)
            </h5>
            <p className="mt-3 pr-3 pr-lg-5 mb-0">
              We ensure your brand values are represented from design to installation.
            </p>
          </div>
          <div
            className="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-sm-0 text-lg-x"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h5 className="fw-bold">
              Computerized Engraving Machines <br /> (Laser Technology)
            </h5>
            <p className="mt-3 pr-3 pr-lg-5 mb-0">
              We install and maintain brand elements using the latest technology and materials.
            </p>
          </div>
          <div
            className="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-lg-0 text-lg-x"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h5 className="fw-bold">
              And all other small & big machines used in processing of our wide range of products
            </h5>
            <p className="mt-3 pr-3 pr-lg-5 mb-0">We take care of everything from site surveys to vendor management.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
