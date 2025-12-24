import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "../../../DB/blogs";

export default function BlogDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={600}
        className="w-full h-72 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6 text-white">
        {blog.title}
      </h1>

      <div className="text-white mt-2">
        <span>{blog.author}</span> • <span>{blog.date}</span>
      </div>

      <p className="text-sm font-semibold mt-1 text-white">
        {blog.category}
      </p>

      <div
        className="mt-6 prose max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
