"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { SliderImage } from "../assets/ProductDetails";
import { SliderImageType } from "../types/types";

const TopSection = () => {
  // تغییر نوع به HTMLDivElement
  const carouselRef = useRef<HTMLDivElement | null>(null);

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
    <div className="bg-gradient-to-b from-gray-200 via-white to-gray-300">
      <div className="pt-6 flex justify-between sm:flex-row flex-col gap-5 lg:gap-0 items-center">
        {/* Right Text */}
        <div className="flex flex-row sm:flex-col items-center text-center sm:w-1/5 w-full justify-between px-4">
          <h3 className="text-xl font-semibold leading-8">
            محصولات <br className="hidden sm:flex" />
            نمایشگاهی <br className="hidden sm:flex" />
            وهمایش
          </h3>
          <p className="text-sm mt-5 font-medium sm:flex hidden">
            ارِایِه سفارش محصولات <br /> نمایشگاهی با استفاده از <br /> چاپ
            دیجیتال
          </p>
          <Button className="bg-transparent text-black text-lg sm:hover:bg-slate-800 hover:bg-transparent hover:text-slate-400 sm:border border-gray-400 rounded-[3px] sm:hover:text-white duration-300 items-center sm:mt-4 sm:mb-6">
            مشاهده همه
            <MdKeyboardArrowLeft className="sm:hidden" />
          </Button>
        </div>

        {/* Left Slider */}
        <div className="relative w-4/5 mb-10 items-center">
          <Button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:text-white"
            onClick={scrollLeft}
          >
            &#8250; {/* Left Arrow */}
          </Button>
          <Button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:text-white"
            onClick={scrollRight}
          >
            &#8249; {/* Right Arrow */}
          </Button>

          <Carousel>
            <CarouselContent
              ref={carouselRef}
              className="flex overflow-x-scroll snap-x snap-mandatory gap-4 scrollbar-hide mx-auto"
            >
              {SliderImage.map((item: SliderImageType) => (
                <CarouselItem
                  key={item.id}
                  className="snap-start flex-none w-[200px] relative group"
                >
                  <div className="bg-gray-300 rounded-[4px] flex flex-col items-center transition-transform transform group-hover:shadow-xl relative">
                    <div className="bg-gray-300 p-3 sm:p-4 rounded-[4px] flex flex-col items-center transition-transform transform group-hover:shadow-xl">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={200}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-white/80 bg-opacity-30 backdrop-blur-sm rounded-[4px] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    {/* Buttons on the Image */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-transparent border border-gray-400 rounded-[3px] m-2 text-gray-600 hover:text-white duration-300">
                        <FaSearch className="w-4 h-4" />
                      </Button>
                      <Button className="bg-transparent border border-gray-400 rounded-[3px] m-2 text-gray-600 hover:text-white duration-300">
                        <FaShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <span className="block text-center mt-6 text-sm font-medium">
                    {item.title}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
