// app/blog/[id]/page.tsx
import { blogs } from "../../../DB/blogs";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function BlogDetails({ params }: Props) {
  const blog = blogs.find((b) => b.id === Number(params.id));

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6 text-white">{blog.title}</h1>

      <div className="text-white mt-2">
        <span>{blog.author}</span> • <span>{blog.date}</span>
      </div>

      <p className="text-sm text-blue-600 font-semibold mt-1 text-white">
        {blog.category}
      </p>

      <div
        className="mt-6 prose prose-blue max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
