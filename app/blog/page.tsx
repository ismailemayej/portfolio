import Heading from "@/components/main/Heading";
import BlogCard from "@/components/sub/BlogCard";
import Link from "next/link";
const Blogs = async ({ index }: any) => {
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
        key={index}
        id="blogs"
        className="grid relative px-6 lg:px-20 lg:grid-cols-4 w-full md:grid-cols-2 grid-cols-1 pb-12 gap-2"
      >
        {data?.data.slice(0, 4).map((news: { _id: any }): any => (
          <BlogCard key={news._id} news={news} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
