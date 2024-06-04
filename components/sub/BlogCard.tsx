import Link from "next/link";
const BlogCard = ({ news }: any) => {
  return (
    <div
      id="blogs"
      className="w-[100%] hover:transition-all hover:scale-105 bg-white border border-gray-200 rounded-t-xl shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href="#">
        <img
          className="rounded-t-xl h-[60%] w-full"
          src={news.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5 h-[30%]">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-blue-900 dark:text-white">
            {news.title}
          </h5>
        </Link>
        <span className="text-2 font-bold text-yellow-500 dark:text-white">
          Category: {news.category}
        </span>
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${news._id}`}
            className="text-white bg-blue-700 absolute bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1.5 text-center dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
