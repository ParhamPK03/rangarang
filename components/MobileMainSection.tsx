"use client";
import React, { useRef, useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const imageData: Record<string, string[][]> = {
  "محصولات تبلیغاتی": [
    ["/images/p23.jpg", "/images/22.jpg"],
    ["/images/p20.jpg"],
    ["/images/p25.jpg", "/images/p24.jpg"],
  ],
  "محصولات فوری و 24 ساعته": [
    ["/images/p25.jpg", "/images/p24.jpg"],
    ["/images/p23.jpg"],
    ["/images/p24.jpg", "/images/p20.jpg"],
  ],
  "چاپ عکس": [
    ["/images/p20.jpg", "/images/p23.jpg"],
    ["/images/22.jpg"],
    ["/images/p25.jpg", "/images/p24.jpg"],
  ],
  "تبلیغات و بازاریابی": [
    ["/images/p24.jpg", "/images/p23.jpg"],
    ["/images/p25.jpg"],
    ["/images/22.jpg", "/images/p20.jpg"],
  ],
};

const MobileMainSection = () => {
  const [activeMenu, setActiveMenu] = useState<string>("محصولات تبلیغاتی");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-10 flex flex-col w-[94%] mx-auto md:hidden">
      <h1 className="flex items-center gap-1 text-xl text-red-500 mb-5 font-semibold">
        <span className="bg-gray-300 px-[3.5px] py-2 mt-2"></span> سایر محصولات
      </h1>
      <div className="relative flex items-center">
        {/* دکمه اسکرول به چپ */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white p-1 rounded-full shadow-md"
        >
          <MdKeyboardArrowLeft className="text-gray-600 w-5 h-5" />
        </button>

        {/* منوی افقی */}
        <div
          ref={menuRef}
          className="flex items-center gap-5 overflow-x-auto scrollbar-hide px-8"
          style={{ maxWidth: "100%" }}
        >
          {Object.keys(imageData).map((menu) => (
            <div
              key={menu}
              onClick={() => handleMenuClick(menu)}
              className={`flex items-center justify-center gap-1 px-2 min-w-[146px] h-[36px] text-[10px] font-bold cursor-pointer rounded-[5px] ${
                activeMenu === menu
                  ? "bg-gray-200 text-gray-700 "
                  : "text-gray-800 bg-gray-100"
              }`}
            >
              {activeMenu === menu && (
                <span className="text-red-600 text-[10px]">
                  <FaLessThan />
                </span>
              )}
              <span>{menu}</span>
            </div>
          ))}
        </div>

        {/* دکمه اسکرول به راست */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white p-1 rounded-full shadow-md"
        >
          <MdKeyboardArrowRight className="text-gray-600 w-5 h-5" />
        </button>
      </div>

      {/* بخش تصاویر */}
      <div className="grid gap-4 mt-4 items-center justify-center">
        {imageData[activeMenu].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-4 ${
              row.length === 2 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {row.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={image}
                alt="image"
                className="border rounded-[5px] w-full"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMainSection;
