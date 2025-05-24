import Image from "next/image"
import Link from "next/link"


export default function BlogCard({ blog }) {
  return (
    <div className="card h-100 shadow-sm border-0 overflow-hidden hover-card">
      <div className="position-relative overflow-hidden">
        <Image
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          width={300}
          height={200}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="position-absolute top-0 end-0 m-2">
          <span className="badge bg-primary rounded-pill">New</span>
        </div>
      </div>

      <div className="card-body d-flex flex-column p-3">
        <h5 className="card-title fw-bold text-dark mb-3 lh-base">{blog.title}</h5>
        <p className="card-text text-muted small lh-base flex-grow-1">{blog.excerpt}</p>
      </div>

      <div className="card-footer bg-transparent border-0 p-3 pt-0">
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            <i className="bi bi-clock me-1"></i>
            {blog.lastUpdated}
          </small>
        </div>
        <Link href={blog.readLink} className="btn btn-outline-primary btn-sm mt-2 w-100 fw-medium">
          Read Article
        </Link>
      </div>
    </div>
  )
}
