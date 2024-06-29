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
    <div className=" bg-slate-900 rounded-lg px-2 lg:my-6 my-3">
      <Heading text="Blogs" />
      <div
        id="blogs"
        className="grid relative px-2 lg:grid-cols-4 w-[100%] md:grid-cols-2 grid-cols-1 gap-2"
      >
        {data?.data?.map((news: any) => (
          <BlogCard key={news._id} news={news} />
        ))}
        <span className="flex pb-3">
          <Link
            className="bg-red-600 px-3 text-white py-1 rounded-xl"
            href="/allblog"
          >
            See all blog
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Blogs;
