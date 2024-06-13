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
      <div className="text-white lg:mt-10  py-20 px-20 mx-auto">
        <Image
          className="rounded-xl"
          src={data.image}
          width={300}
          height={300}
          alt={data.title}
        />
        <div className="mt-4 text-2xl font-bold">{data.title}</div>
        <div className="border rounded-xl p-3 mt-4">{cleanDetails}</div>
      </div>
    </>
  );
};

export default BlogDateils;
