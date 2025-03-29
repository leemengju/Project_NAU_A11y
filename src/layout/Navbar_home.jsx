import React from "react";
import "../index.css";
import logo from "../assets/layout/LoGO_L.svg";
import { Button } from "../components/ui/button";
import {
  Menu
} from "lucide-react";
import { useState } from "react";




const Navbar_home = () => {
  // 側邊選單
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar_home bg-[#1A1313] flex justify-between items-center px-4 py-2 top-0 left-0 right-0 z-10 h-[80px] w-full lg:px-8 lg:py-4 md:px-6 md:py-3 sm:px-4 sm:py-2" aria-label="主導航">
        {/* 左邊 */}
        <div className="flex items-center max-sm:items-start">
          <a href="/home">
            <img src={logo} alt="公司網站標誌logo" className="max-sm:w-[100px] cursor-pointer" />
          </a>
        </div>

        {/* 右邊 */}
        <div className="flex justify-end items-center gap-5">
          <a href="/home" className="knowledge text-white font-regular cursor-pointer hover:text-[#D4B0F7] transition-colors duration-300 max-sm:hidden">知識補給</a>
          <a href="/workshop" className="text-white font-regular cursor-pointer hover:text-[#D4B0F7] transition-colors duration-300 max-sm:hidden">共創實績</a>
          <a href="/toolkits" className="text-white font-regular cursor-pointer hover:text-[#D4B0F7] transition-colors duration-300 max-sm:hidden">數位無障礙工具包</a>
          <Button onClick={() => window.open("https://www.uxi-design.com/connect", "_blank")} className="rounded-full p-5 bg-[#DC3545]  font-[600] text-xl max-lg:text-md max-md:text-sm  max-md:p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#D63C3D] hover:to-[#7A31C1]  " aria-label="聯繫我們按鈕">
            <span className="text-white font-semibold">聯繫我們</span>
          </Button>
          {/* menu */}
          <div className="relative sm:hidden">
            {/* 執行setIsOpen函數，當點擊時，isOpen的值會被切換為true或false */}
            <Menu onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer" />
            {/* 下拉選單 */}
            {/* 這段是條件渲染的寫法，意味著當 isOpen 為 true 時，下方的 <div> 元素才會被渲染並顯示。若 isOpen 是 false，則不會渲染下拉選單。 */}
            {isOpen && (
              <div className="layoutDropdown absolute right-[-20px] mt-2 w-[400px] bg-[#1A1313] rounded-md shadow-lg z-20">
                <a href="/knowledge" className="block px-4 py-2 text-white hover:bg-[#5E3587]">知識補給</a>
                <a href="/workshop" className="block px-4 py-2 text-white hover:bg-[#5E3587]">共創實績</a>
                <a href="/toolkits" className="block px-4 py-2 text-white hover:bg-[#5E3587]">數位無障礙工具包</a>
              </div>
            )}
          </div>
          {/* end of menu */}
        </div>
        {/* end of right */}
      </nav>
      {/* end of navbar */}
    </>
  )
};

export default Navbar_home;