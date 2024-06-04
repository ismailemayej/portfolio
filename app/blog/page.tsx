import Heading from "@/components/main/Heading";
import BlogCard from "@/components/sub/BlogCard";
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
      <div className="grid relative px-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {data?.data.slice(0, 3).map((news: { _id: any }): any => (
          <BlogCard key={news._id} news={news} />
        ))}
      </div>
      <span>
        <Link
          className=" px-20 mt-[-100] rounded-lg bg-slate-900 text-white"
          href="/"
        >
          See all bolg
        </Link>
      </span>
    </>
  );
};

export default Blogs;
