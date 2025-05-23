import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="bg-primary py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md">
            <h4 className="text-white mb-0">
              If you have any query related Branding…
              <br className="d-md-none" /> we are available
            </h4>
          </div>
          <div className="col-md-auto mt-md-0 mt-4">
            <Link className="btn btn-light rounded-pill" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
