import BannerC from "@/components/Banner-c";
import BlogPost from "@/components/Blog/Blog-post";

const blogData = {
  post: {
    title: "What Is the Difference Between a Sign and Signage",
    featuredImage: "/img/WhatistheDifferenceBetweenASignandSignage.webp",
    content: {
        paragraphs: [
        `In all activities including business, signs are crucial.<br>Signs are significant in all aspects of life because they define what it means to be human. A sign is a visual mode of communication that should complement rather than replace spoken. Signs are solely based on gestures, which are a natural way for most of us to communicate. We couldn't think, convey what we thought, or assure good collaboration in our work, home, and leisure activities if we didn't have signals. Signs dominantly provide additional visual information regarding the message text, making it easier to comprehend.<br>For persons who have difficulty hearing or speaking, signs are extremely useful. Gestures symbolizing or picturing objects, actions, or thoughts are used to codify signs, but no attempt is made to spell them out. By providing Identifiable meanings that are shared throughout nations, signs provide insights to comprehending experiences.`,
        `The most important aspect of a sign is that it assists us in thinking, imagining, and recalling information. Safety signs are one of the most crucial signs as they provide advice on how to avoid danger. Safety signs play an important role in ensuring that facilities are in compliance and that staff is well informed.<br><br>Whereas the term "Signage" refers to a group of signs taken together. Signage refers to a collection of signs or groups of signs. It is the use of signs collectively in a unique and creative way to provide commercial and public display purpose and provide information to the audience.<br><br>The design or use of signs and symbols to transmit a message is known as Signage.`,
      ],
      roles: {
        title: "ROLES AND FUNCTIONS of Signage:",
        items: [
          "Persuasion: A promotional signage...",
          "Provision of Information: Signs that transmit information...",
          "Direction/ Navigation: Signs, such as signposts...",
          "Identification: Room names and numbers...",
          "Safety and regulatory: Warning sign or safety instructions...",
        ],
      },
      conclusion:
        "Sky Signage provide you with the most creative and imaginative signages...",
    },
  },
  relatedBlogs: [
    {
      id: "1",
      title: "What Are Neon Sign Boards",
      image: "/img/WhatAreNeonSignBoards.webp",
      excerpt:
        "One of the most stunning, distinctive, and dazzling outdoor advertising is the neon signs...",
      lastUpdated: "3 mins ago",
      readLink: "/blog/neon-sign-boards",
    },
    {
      id: "2",
      title: "Glass Printing",
      image: "/img/BenefitsOfLEDSignBoards.webp",
      excerpt:
        "Glass is widely used in corporate offices, commercial and retail space...",
      lastUpdated: "3 mins ago",
      readLink: "/blog/glass-printing",
    },
  ],
};

const banner = {
  title: "Blog",
  backgroundImage: "/img/background-2.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Blog", active: true },
  ],
};

export default function Blog() {
  return (
    <>
      <BannerC {...banner} />
      <BlogPost post={blogData.post} relatedBlogs={blogData.relatedBlogs} />
    </>
  );
}
