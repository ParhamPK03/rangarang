"use client";
import Image from "next/image";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa6";

const MainSection = () => {
  const [activeMenu, setActiveMenu] = useState<string>("محصولات تبلیغاتی");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <div className="md:flex flex-wrap items-start lg:flex-nowrap lg:justify-center gap-6 gap-y-5 mt-24 mx-10 hidden">
        <div className="md:-mt-[85px]">
          <div className="flex flex-col pt-7 items-start  gap-y-3 ">
            
            <h1 className="flex items-center gap-1 text-xl text-red-500 mb-5 font-semibold"> <span className="bg-gray-300 px-[3.5px] py-2 mt-2"></span> سایر محصولات </h1>
            <div
              onClick={() => handleMenuClick("محصولات تبلیغاتی")}
              className={`flex items-center gap-1 px-2 w-[200px] h-[40px] text-sm font-semibold cursor-pointer ${
                activeMenu === "محصولات تبلیغاتی"
                  ? "bg-gray-100 text-gray-700 rounded-[5px]"
                  : "text-gray-800"
              }`}
            >
              {activeMenu === "محصولات تبلیغاتی" && (
                <span className="text-red-600 text-[10px]">
                  <FaLessThan />
                </span>
              )}
              <span>محصولات تبلیغاتی</span>
            </div>
            <div
              onClick={() => handleMenuClick("محصولات فوری و 24 ساعته")}
              className={`flex items-center gap-1 px-2 w-[200px] h-[40px] text-sm font-semibold  cursor-pointer ${
                activeMenu === "محصولات فوری و 24 ساعته"
                  ? "bg-gray-100 text-gray-700 rounded-[5px]"
                  : "text-gray-800"
              }`}
            >
              {activeMenu === "محصولات فوری و 24 ساعته" && (
                <span className="text-red-600 text-[10px]">
                  <FaLessThan />
                </span>
              )}
              <span>محصولات فوری و 24 ساعته</span>
            </div>
            <div
              onClick={() => handleMenuClick("چاپ عکس")}
              className={`flex items-center gap-1 px-2 w-[200px] h-[40px] text-sm font-semibold  cursor-pointer ${
                activeMenu === "چاپ عکس"
                  ? "bg-gray-100 text-gray-700 rounded-[5px]"
                  : "text-gray-800"
              }`}
            >
              {activeMenu === "چاپ عکس" && (
                <span className="text-red-600 text-[10px]">
                  <FaLessThan />
                </span>
              )}
              <span>چاپ عکس</span>
            </div>
            <div
              onClick={() => handleMenuClick("تبلیغات و بازاریابی")}
              className={`flex items-center gap-1 px-2 w-[200px] h-[40px] text-sm font-semibold  cursor-pointer ${
                activeMenu === "تبلیغات و بازاریابی"
                  ? "bg-gray-100 text-gray-700 rounded-[5px]"
                  : "text-gray-800"
              }`}
            >
              {activeMenu === "تبلیغات و بازاریابی" && (
                <span className="text-red-600 text-[10px]">
                  <FaLessThan />
                </span>
              )}
              <span>تبلیغات و بازاریابی</span>
            </div>
          </div>
        </div>

        <div>
          {activeMenu === "محصولات تبلیغاتی" && <div className="">

            <div className="flex gap-4">
          <Image src="/images/p20.jpg" alt="image" width={600} height={400} className="rounded-[5px]"/>  
          <Image src="/images/22.jpg" alt="image" width={270} height={270} className="rounded-[5px]"/>  
          </div>

          <div className="flex gap-4 mt-4">
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="border rounded-[5px]"/>  
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          </div>

          </div>}

          {activeMenu === "محصولات فوری و 24 ساعته" && <div>
            <div className="flex gap-4 ">
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="border rounded-[5px]"/>  
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          </div>
          <div className="flex gap-4 mt-4">
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          
          </div>
           </div>}
          {activeMenu === "چاپ عکس" && <div>
            <div className="flex gap-4 ">
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="border rounded-[5px]"/>  
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          </div>
          <div className="flex gap-4 mt-4">
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="border rounded-[5px]"/>  
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          </div>
            
          </div>}
          {activeMenu === "تبلیغات و بازاریابی" && <div>
            <div className="flex gap-4 ">
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="border rounded-[5px]"/>  
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          </div>
          <div className="flex gap-4 mt-4">
          <Image src="/images/p24.jpg" alt="image" width={285} height={285} className="border rounded-[5px]"/>  
          <Image src="/images/p25.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          <Image src="/images/p23.jpg" alt="image" width={285} height={285} className="rounded-[5px]"/>  
          </div>  
          </div>}
        </div>
      </div>
    </>
  );
};

export default MainSection;
