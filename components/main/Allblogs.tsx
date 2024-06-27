import Heading from "@/components/main/Heading";
import BlogCard from "@/components/sub/BlogCard";

const Allblog = async () => {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <>
      <Heading text="All Blog" />
      <div
        id="blogs"
        className="grid relative px-2 lg:grid-cols-4 w-[100%] md:grid-cols-2 grid-cols-1 pb-12 gap-2"
      >
        {data?.data?.map((news: any) => (
          <div>
            <BlogCard key={news._id} news={news} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Allblog;
