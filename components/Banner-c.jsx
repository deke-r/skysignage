import Link from "next/link"

export default function BannerC({ title, backgroundImage, breadcrumbs }) {
  return (
    <section className="position-relative" style={{ height: '380px' }}>
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      </div>

      <div className="container h-100 position-relative">
        <div className="row h-100 align-items-end pb-5">
          <div className="col-md-8 px-md-0 text-white">
            <div className="overflow-hidden">
              <h1 className="text-white display-4 display-md-3 mb-0 text-uppercase fw-bold">{title}</h1>
              <nav aria-label="breadcrumb" className="mt-3">
                <ol className="breadcrumb fs-6 ps-0 fw-bold bg-transparent">
                  {breadcrumbs.map((crumb, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${crumb.active ? "active" : ""}`}
                      {...(crumb.active && { "aria-current": "page" })}
                    >
                      {crumb.active ? (
                        <span className="text-white">{crumb.label}</span>
                      ) : (
                        <Link href={crumb.href || "#"} className="text-white text-decoration-none">
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
