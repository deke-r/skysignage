import Link from "next/link";

export default function OtherServices({ title, subtitle, services }) {
  return (
    <section className="other-services py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-start">
            <h4 className="f_40 fw-bold">{title}</h4>
            <i>
            <h6 className="text-muted fw-bold border-start ps-3 border-3  border-danger" dangerouslySetInnerHTML={{ __html: subtitle }}></h6>
            </i>
          </div>
        </div>

<div className="row">
  {services.map((service, index) => (
    <div
      className={`col-md-${services.length === 4 ? "6" : "4"} mb-4`}
      key={index}
    >
      <div className="card card-3d border-0 h-100">
        <div className="card-body">
          <h5 className="card-title fw-bold">{service.title}</h5>
          <Link href={service.link} className="card-link fw-semibold">
            More Details <span style={{ fontSize: "20px" }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
