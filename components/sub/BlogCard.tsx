"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export type TNews = {
  title: string;
  image: string;
  category: string;
  _id: string;
  details: string;
  news: TNews;
};

export default function BlogCard({ news }: { news: TNews }) {
  const datadetails = news.details.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <>
      <Card className="py-4 w-full h-96 relative">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="rounded-xl w-full h-44"
            src={news.image}
            width="100%"
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 h-full px-4 flex-col justify-between items-start">
          <div>
            <span className="text-xs uppercase text-white rounded-lg bg-green-500 py-1 px-2">
              {news.category}
            </span>
            <h4 className="font-semibold mt-2 text-lg">{news.title}</h4>
            <span className="">{datadetails.slice(0, 30)}</span>
          </div>
          <div className="flex justify-end absolute bottom-2 w-full right-4">
            <Link href={`/blog/${news._id}`}>
              <button className="bg-blue-500 py-1 px-6 translate-x-2 text-white rounded-md">
                Details
              </button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
