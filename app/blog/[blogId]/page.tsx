import Navbar from "@/components/main/Navbar";
import Image from "next/image";

const BlogDateils = async ({ params }: any) => {
  const res = await fetch(
    `https://portfolio-server-six-tau.vercel.app/api/v1/blogs/${params.blogId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const stripHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const cleanDetails = stripHtmlTags(data.details);

  return (
    <>
      <div className="text-white lg:mt-10  py-20 lg:px-20 mx-auto">
        <Image
          className="rounded-xl mx-auto"
          src={data.image}
          width={350}
          height={350}
          alt={data.title}
        />
        <span className=" bg-slate-700 text-white px-2 py-1 text-xs mt-3 rounded-lg">
          {data.category}
        </span>
        <div className="mt-4 text-2xl font-bold">{data.title}</div>
        <div className="border rounded-xl p-3 mt-4">{cleanDetails}</div>
      </div>
    </>
  );
};

export default BlogDateils;
