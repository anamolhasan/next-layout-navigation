import Link from "next/link";
import React from "react";



const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    slug: "getting-started-nextjs-15",
    from: "Official-Docs",
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    slug: "understanding-tailwind-css",
    from: "Tailwind-Blog",
  },
  {
    id: 3,
    title: "React Hooks Deep Dive",
    slug: "react-hooks-deep-dive",
    from: "React-Official",
  },
  {
    id: 4,
    title: "Building a Responsive Navbar",
    slug: "building-responsive-navbar",
    from: "Medium-Tutorial",
  },
  {
    id: 5,
    title: "Next.js Metadata and SEO",
    slug: "nextjs-metadata-seo",
    from: "Dev.to",
  },
];

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
      <ul>
        {
          blogPosts.map((post) =>(
            <li key={post.id}>
              <Link href={`/blog/${post.from}`}>{post.from}</Link>
            </li>
          ))
        }
      </ul>
      <p className="text-gray-600">
        This is the blog main page content.
      </p>
    </div>
  );
};

export default BlogPage;
