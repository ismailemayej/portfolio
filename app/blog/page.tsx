import Heading from "@/components/main/Heading";
import BlogCard, { TNews } from "@/components/sub/BlogCard";
import Link from "next/link";

const Blogs = async () => {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <>
      <Heading text="Blogs" />
      <div
        id="blogs"
        className="grid relative px-2 lg:px-20 lg:grid-cols-4 w-full md:grid-cols-2 grid-cols-1 pb-12 gap-2"
      >
        {data?.data.slice(0, 4).map((news: any) => (
          <BlogCard key={news._id} news={news} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
