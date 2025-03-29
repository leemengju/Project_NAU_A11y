import React from "react";
import "../index.css";
import logo from "../assets/layout/LoGO_L.svg";
import { Button } from "../components/ui/button";
import { useState } from "react";




const Navbar_inline = () => {
  // 側邊選單
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#1A1313] flex justify-between items-center px-4 py-2 top-0 left-0 right-0 z-10 h-[80px] w-full lg:px-8 lg:py-4 md:px-6 md:py-3 sm:px-4 sm:py-2" aria-label="主導航">
        {/* 左邊 */}
        <div className="flex items-center max-sm:items-start">
          <a href="/home">
          <img  src={logo} alt="公司網站標誌logo" className="max-sm:w-[100px] cursor-pointer " />
          </a>
        </div>

        {/* 右邊 */}
        
          <Button onClick={() => window.open("https://www.uxi-design.com/connect", "_blank")} className="rounded-full p-5 bg-[#DC3545]  font-[600] text-xl max-lg:text-md max-md:text-sm  max-md:p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#D63C3D] hover:to-[#7A31C1]  " aria-label="聯繫我們按鈕">
            <span className="text-white font-semibold">聯繫我們</span>
          </Button>
         
      </nav>
      {/* end of navbar */}
    </>
  )
};

export default Navbar_inline;