"use client";
import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";

const FooterSection = () => {
  // تعیین نوع دقیق برای openItems
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleToggle = (item: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="w-[75%] mx-auto">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-red-500 font-semibold flex items-center gap-1 text-lg md:text-xl">
          <span className="bg-gray-300 px-[3.5px] py-2 mt-2"></span> سوالات
          متداول
        </h2>
        <h3 className="flex items-center gap-2 hover:gap-4 duration-500 cursor-pointer text-sm text-gray-600">
          لیست سوالات <FaLessThan className="text-[10px] text-gray-700" />
        </h3>
      </div>

      <div>
        {/* Accordion Item 1 */}
        <div className="accordion-item mt-2">
          <div
            className={`flex items-center py-3 px-4 border-b text-right relative ${
              openItems["item-1"] ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => handleToggle("item-1")}
          >
            <button
              className={`absolute right-0 w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                openItems["item-1"]
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-red-500"
              }`}
            >
              {openItems["item-1"] ? "−" : "+"}
            </button>
            <span
              className={`sm:text-xs text-[14px] font-semibold pr-10 ${
                openItems["item-1"] ? "text-red-500" : "text-gray-700"
              }`}
            >
              تعریف مشتری در این سیستم چیست؟
            </span>
          </div>
          {openItems["item-1"] && (
            <div className="text-gray-700 p-4 text-[14px] leading-7">
              این محتوای بخش اول است.
            </div>
          )}
        </div>
        {/* Accordion Item 2 */}
        <div className="accordion-item mt-2">
          <div
            className={`flex items-center py-3 px-4 border-b text-right relative ${
              openItems["item-2"] ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => handleToggle("item-2")}
          >
            <button
              className={`absolute right-0 w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                openItems["item-2"]
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-red-500"
              }`}
            >
              {openItems["item-2"] ? "−" : "+"}
            </button>
            <span
              className={`sm:text-xs text-[14px] font-semibold pr-10 ${
                openItems["item-2"] ? "text-red-500" : "text-gray-700"
              }`}
            >
              چه نوع خدمات در این سایت ارایه میشود؟
            </span>
          </div>
          {openItems["item-2"] && (
            <div className="text-gray-700 p-4 text-[14px] leading-7">
              این محتوای بخش دوم است.
            </div>
          )}
        </div>
        {/* Accordion Item 3 */}
        <div className="accordion-item mt-2">
          <div
            className={`flex items-center py-3 px-4 border-b text-right relative ${
              openItems["item-3"] ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => handleToggle("item-3")}
          >
            <button
              className={`absolute right-0 w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                openItems["item-3"]
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-red-500"
              }`}
            >
              {openItems["item-3"] ? "−" : "+"}
            </button>
            <span
              className={`sm:text-xs text-[14px] font-semibold pr-10 ${
                openItems["item-3"] ? "text-red-500" : "text-gray-700"
              }`}
            >
              برای استفاده از خدمات حتما باید عضو شد ؟
            </span>
          </div>
          {openItems["item-3"] && (
            <div className="text-gray-700 p-4 text-[14px] leading-7">
              بله توجه داشته باشید کلیه اصول و رویه چاپ کهن بله توجه داشته باشید
              کلیه اصول و رویه چاپ کهن بله توجه داشته باشید کلیه اصول و رویه چاپ
              کهن بله توجه داشته باشید کلیه اصول و رویه چاپ کهن بله توجه داشته
              باشید کلیه اصول و رویه چاپ کهن بله توجه داشته باشید کلیه اصول و
              رویه چاپ کهن بله توجه داشته باشید کلیه اصول و رویه چاپ کهن بله
              توجه داشته باشید کلیه اصول و رویه چاپ کهن بله توجه داشته باشید
            </div>
          )}
        </div>
        {/* Accordion Item 4 */}
        <div className="accordion-item mt-2">
          <div
            className={`flex items-center py-3 px-4 border-b text-right relative ${
              openItems["item-4"] ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => handleToggle("item-4")}
          >
            <button
              className={`absolute right-0 w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                openItems["item-4"]
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-red-500"
              }`}
            >
              {openItems["item-4"] ? "−" : "+"}
            </button>
            <span
              className={`sm:text-xs text-[14px] font-semibold pr-10 ${
                openItems["item-4"] ? "text-red-500" : "text-gray-700"
              }`}
            >
              در چه صورت حساب کار بری من شامل تخفیف میشود؟
            </span>
          </div>
          {openItems["item-4"] && (
            <div className="text-gray-700 p-4 text-[14px] leading-7">
              این محتوای بخش چهارم است.
            </div>
          )}
        </div>
        {/* Accordion Item 5 */}
        <div className="accordion-item mt-2">
          <div
            className={`flex items-center py-3 px-4 border-b text-right relative ${
              openItems["item-5"] ? "border-b-2 border-red-500" : ""
            }`}
            onClick={() => handleToggle("item-5")}
          >
            <button
              className={`absolute right-0 w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                openItems["item-5"]
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-red-500"
              }`}
            >
              {openItems["item-5"] ? "−" : "+"}
            </button>
            <span
              className={`sm:text-xs text-[14px] font-semibold pr-10 ${
                openItems["item-5"] ? "text-red-500" : "text-gray-700"
              }`}
            >
              برای حفاظت از حریم خصوصی چه اقداماتی انجام شده است؟
            </span>
          </div>
          {openItems["item-5"] && (
            <div className="text-gray-700 p-4 text-[14px] leading-7">
              این محتوای بخش پنجم است.
            </div>
          )}
        </div>
      </div>
      <p className="flex justify-center items-center mx-auto pt-8 mb-5 text-center">
        {" "}
        <span className="text-red-600">"</span>ساخته شده توسط پرهام
        پورخانی---Developed by Parham-Pourkhani{" "}
        <span className="text-red-600">"</span>
      </p>
    </div>
  );
};

export default FooterSection;
