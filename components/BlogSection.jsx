import Link from "next/link"
import { ChevronRight } from "lucide-react"



export default function BlogSection() {
  const blogPosts = [
    {
      id: "post1",
      title: "What Is the Difference Between a Sign and Signage",
      excerpt: "Signs are significant in all aspects of life because they define what it means to be human. A sign...",
      image: "/placeholder.svg?height=200&width=400",
      url: "/blog",
    },
    {
      id: "post2",
      title: "What Are Neon Sign Boards",
      excerpt:
        "One of the most stunning, distinctive, and dazzling outdoor advertising is the neon signs. While other traditional characters...",
      image: "/placeholder.svg?height=200&width=400",
      url: "/blog-2",
    },
    {
      id: "post3",
      title: "Glass Printing",
      excerpt:
        "Glass is widely used in corporate offices, commercial and retail space to make cubicles, cabins and partitions....",
      image: "/placeholder.svg?height=200&width=400",
      url: "/blog-3",
    },
  ]

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center fs-2 fs-lg-3">Read Our Blog</h3>
            <hr className="w-25 mx-auto my-4 border-primary border-2" />
          </div>
        </div>

        <div className="row mt-lg-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 py-0 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="bg-white pb-4 h-100 rounded shadow-sm">
                <img className="w-100 rounded-top" src={post.image || "/placeholder.svg"} alt={post.title} />
                <div className="px-4 pt-4">
                  <div className="overflow-hidden">
                    <Link href={post.url}>
                      <h5 className="hover-text-primary">{post.title}</h5>
                    </Link>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3">{post.excerpt}</p>
                  </div>
                  <div className="overflow-hidden">
                    <div className="d-inline-block">
                      <Link href={post.url} className="d-flex align-items-center text-primary">
                        Learn More
                        <ChevronRight className="ms-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
