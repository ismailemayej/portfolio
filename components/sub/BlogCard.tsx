"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
type TNews = {
  title: string;
  image: string;
  category: string;
  _id: string;
  news: TNews;
};
export default function BlogCard({ news }: any) {
  return (
    <>
      <Card className="py-4 w-full">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className=" rounded-xl w-full h-44"
            src={news.image}
            width="100%"
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col justify-between items-start">
          <div>
            <h4 className="font-bold text-large">{news.title}</h4>
            <p className="text-tiny uppercase">Category:{news.category}</p>
          </div>
          <div className="flex justify-between">
            <span>.</span>
            <Link href={`/blog/${news._id}`}>
              <button className="bg-green-500 px-6 translate-x-2 text-white rounded-xl">
                Details
              </button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
