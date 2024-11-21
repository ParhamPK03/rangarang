"use client";

import { useEffect, useState, useRef } from "react";
import { FaLessThan } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { StaticImageData } from "next/image";

type BlogType = {
  id: number;
  img: StaticImageData;
  title: string;
  excerpt: string;
  date: string;
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json() as Promise<BlogType[]>;
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-300 py-10 mt-10">
      <div className="w-[75%] mx-auto items-center">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-red-500 font-semibold flex items-center gap-1 text-lg md:text-xl">
            <span className="px-[3.5px] py-2 mt-2"></span> جدید ترین مطالب بلاگ
          </h2>
          <h3 className="flex items-center gap-2 hover:gap-4 duration-500 cursor-pointer text-sm text-gray-600">
            ورود به بلاگ
            <FaLessThan className="text-[10px] text-gray-700" />
          </h3>
        </div>

        <div className="relative">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:text-white hover:bg-gray-700"
            onClick={scrollLeft}
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:text-white hover:bg-gray-700"
            onClick={scrollRight}
          >
            <MdKeyboardArrowRight size={24} />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-scroll snap-x snap-mandatory gap-4 scrollbar-hide mx-auto"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="snap-start flex-none w-[300px] relative group"
              >
                <div className="bg-white hover:text-white text-gray-600 backdrop-blur-md hover:bg-black/50 rounded-[6px] flex flex-col items-center transition-transform transform duration-500 hover:scale-105">
                  <div className="relative">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={300}
                      height={300}
                      className="rounded-t-[4px]"
                    />
                    <div className="flex flex-col absolute top-0  left-4 items-center">
                      <span className="block text-center text-xl absolute text-white bg-red-500 w-14 p-3">
                        {blog.date}
                      </span>
                      <span className="bg-gray-600 mt-[52px] w-14 text-white">
                        مهر ماه
                      </span>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-medium">
                      <span className="border-r-2 border-red-600 ml-1"></span>
                      {blog.title}
                    </h3>
                    <p className="text-xs mt-2">{blog.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
