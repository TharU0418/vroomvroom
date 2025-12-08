// app/blog/page.tsx
import Link from "next/link";
import { blogs } from "../../DB/blogs";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>

      <div className="grid sm:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              className="w-full h-56 object-cover"
              alt={blog.title}
            />
            <div className="p-4">
              <p className="text-sm text-white">{blog.category}</p>
              <h2 className="text-xl font-semibold mt-1 text-white">{blog.title}</h2>
              <p className="text-sm mt-2 text-white">{blog.description}</p>
              <span className="text-xs text-white">{blog.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
