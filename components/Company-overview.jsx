

export default function CompanyOverview({ title, heading, content, quote, dropCapContent }) {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row mt-6">
          <div className="col">
            <h3 className="text-center display-5 display-md-4">{title}</h3>
            <hr
              className="mx-auto mt-4"
              style={{
                width: "4.20873rem",
                height: "3px",
                backgroundColor: "#007bff",
                border: "none",
              }}
            />
          </div>
          <div className="col-12">
            <div className="bg-white px-3 mt-6 px-0 py-5 px-lg-5 rounded">
              <h5 className="fw-bold">{heading}</h5>
              <p className="mt-3 lh-lg">{content}</p>
              <blockquote className="blockquote my-5 ms-lg-6" style={{ maxWidth: "700px" }}>
                <h5 className="fw-medium ms-3 mb-0 fst-italic">{quote}</h5>
              </blockquote>
              <p
                className="lh-lg"
                style={{
                  textIndent: "2em",
                  fontSize: "1.1rem",
                }}
              >
                <span
                  className="float-start me-2 lh-1 fw-bold text-primary"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "3rem",
                    marginTop: "0.2rem",
                  }}
                >
                  T
                </span>
                {dropCapContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
