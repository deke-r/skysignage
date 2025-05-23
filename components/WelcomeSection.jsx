export default function WelcomeSection() {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 text-center">
            <h3 className="text-primary fs-2 fs-lg-3">Welcome to the Sky Signage</h3>
            <p className="px-lg-4 mt-3">
              A Signage Company in Delhi NCR. Sky Signage is your visual communication expert. We transform spaces with
              Impactful Signs.
            </p>
            <hr className="w-25 mx-auto my-4 border-primary border-2" />
          </div>
        </div>

        <div className="row mt-4 mt-md-5">
          <div className="col-sm-6 col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="100">
            <p>
              Sky Signage is the NO. 1 signage company in Delhi NCR! Signage is like visual messages in guiding people
              and sharing essential information and knowing what's happening around us. It's important for safety and
              advertising. Sky Signage creates stunning signs, symbols, and texts for different purposes like guiding
              people, branding, and advertising. We work with businesses, public places, and events to make
              communication better and more visible.
            </p>
            <p>
              Our team of experts excels in designing, manufacturing, and installing a diverse range of eye-catching
              designs and using top-quality materials. We ensure our signs impress your target audience, leaving a
              lasting impression. we also provide services in signboard creation, visual merchandise, printing, and
              retail displays.
            </p>
            <p>
              So, if you want your space to look amazing and your brand to stand out, choose Sky Signage! We're the
              experts in making the best visual stuff that everyone will love. Let's make your space awesome with our
              impressive and effective signage solutions.!
            </p>
          </div>
          <div className="col-sm-6 col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="200">
            <div
              className="h-100 rounded"
              style={{
                backgroundImage: "url('/img/WelcometoSkySignage.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}
            ></div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-6 col-lg-4 mt-3 mt-lg-0 px-4 px-sm-3" data-aos="fade-up" data-aos-delay="100">
            <h5>
              <span className="me-2">
                <img src="/img/WelcometoSkySignageIcon.webp" alt="Icon" />
              </span>
              Brand Awareness
            </h5>
            <p className="mt-3 pr-3 pr-lg-5">Lots of people will know about your brand.</p>
          </div>
          <div className="col-sm-6 col-lg-4 mt-3 mt-lg-0 px-4 px-sm-3" data-aos="fade-up" data-aos-delay="200">
            <h5>
              <span className="me-2">
                <img src="/img/WelcometoSkySignageIcon2.webp" alt="Icon" />
              </span>
              Cost-Effective Advertising
            </h5>
            <p className="mt-3 pr-3 pr-lg-5">Advertising that's affordable and gives great value to businesses.</p>
          </div>
          <div className="col-sm-6 col-lg-4 mt-3 mt-lg-0 px-4 px-sm-3" data-aos="fade-up" data-aos-delay="300">
            <h5>
              <span className="me-2">
                <img src="/img/WelcometoSkySignageIcon3.webp" alt="Icon" />
              </span>
              Customer Experience
            </h5>
            <p className="mt-3 pr-3 pr-lg-5">
              Signage guides, informs, and enhances the brand experience for customers effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
