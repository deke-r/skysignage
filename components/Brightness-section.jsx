import Image from "next/image";

export default function BrightnessSection({ backgroundImage, title, subtitle, icons }) {
  return (
    <section className="position-relative py-6 text-white">
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      </div>

      {/* Content */}
      <div className="container py-5 position-relative z-2">
        <div className="row justify-content-start text-start mb-5">
          <div className="col-lg-10 ms-md-5">
            <h1 className="text-warning ms-md-5 f_50 fw-bold lh-base">
              {title} <br />
              <span className="text-light">{subtitle}</span>
            </h1>
          </div>
        </div>

        {/* Icons Grid */}
        <div className="row justify-content-center">
          {icons.map((icon, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 d-flex flex-column align-items-center">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.alt || "Icon"}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
