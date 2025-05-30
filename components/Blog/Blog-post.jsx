import Image from "next/image"
import BlogCard from "./Blog-card"



export default function BlogPost({ post, relatedBlogs }) {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-9">
          <div className="row">
            {/* Featured Image */}
            <div className="col-12 mb-4">
              <div className="position-relative overflow-hidden rounded-3 shadow-sm">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "400px" }}
                />
              </div>
            </div>

            {/* Title */}
            <div className="col-12 mb-4">
              <h1 className="display-5 fw-bold text-dark mb-4 lh-base">{post.title}</h1>
              <hr className="border-primary border-2 w-25 mb-4" />
            </div>
          </div>

          {/* Content */}
          <div className="row">
            <div className="col-12">
              <article className="blog-content">
                {/* Main Paragraphs */}
                {post.content.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4 lh-lg text-muted fs-6">
                    {paragraph.split("<br>").map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < paragraph.split("<br>").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}

                {/* Roles Section */}
                <div className="my-5 p-4 bg-light border-start  border-4">
                  <h4 className="fw-bold text-primary mb-4">{post.content.roles.title}</h4>
                  <ul className="list-unstyled">
                    {post.content.roles.items.map((item, index) => (
                      <li key={index} className="mb-3 d-flex align-items-start">
                        <span className="badge bg-primary rounded-pill me-3 mt-1 flex-shrink-0">{index + 1}</span>
                        <span className="text-muted lh-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion */}
                <div className="mt-5 p-4 bg-primary bg-opacity-10 rounded-3 border border-primary border-opacity-25">
                  <p className="mb-0 fw-medium text-light fs-6 lh-lg">{post.content.conclusion}</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-3">
          <div className="sticky-top" style={{ top: "2rem" }}>
            <h4 className="fw-bold mb-4 text-dark">Related Articles</h4>
            <div className="row g-3">
              {relatedBlogs.map((blog) => (
                <div key={blog.id} className="col-12">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
