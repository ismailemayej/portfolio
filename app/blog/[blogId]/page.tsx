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
  return (
    <>
      <div className="text-white lg:mt-40 mt-20 px-20 mx-auto">
        <Image src={data.image} width={300} height={300} alt={data.title} />
        Title:{data.title}
        <div className="  border  rounded-xl p-3">{data.details}</div>
      </div>
    </>
  );
};

export default BlogDateils;
