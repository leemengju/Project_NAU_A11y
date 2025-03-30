import React from 'react';
import "../index.css";
import mission_pics from '../assets/home/mission.svg';
import banner from '../assets/home/banner.svg';
import toolkits from '../assets/home/toolkits.svg';
import ArrowRight, { ArrowRightWithStroke } from '../components/icons';
import workshop_pics from '../assets/home/workshop_main.svg';
import article_1 from '../assets/home/article_1.svg';
import article_2 from '../assets/home/article_2.svg';
import article_3 from '../assets/home/article_3.svg';
import article_4 from '../assets/home/article_4.svg';
import article_5 from '../assets/home/article_5.svg';
import { Button } from "@/components/ui/button";
import logo from '../assets/layout/LOGO_L.svg';
import {
  Menu
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  // 側邊選單
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    {/* 固定導航 */}
      <nav className="fixed navbar_home bg-[#1A1313] flex justify-between items-center px-4 py-2 top-0 left-0 right-0 z-10 h-[80px] w-full lg:px-8 lg:py-4 md:px-6 md:py-3 sm:px-4 sm:py-2" aria-label="主導航">
        {/* 左邊 */}
        <div className="flex items-center max-sm:items-start">
          <a href="/home">
            <img src={logo} alt="公司網站標誌logo" className="max-sm:w-[100px] cursor-pointer" />
          </a>
        </div>

        {/* 右邊 */}
        <div className="flex justify-end items-center gap-5">
          <a href="#knowledge" className="text-white font-regular cursor-pointer hover:text-[#D4B0F7] transition-colors duration-300 max-sm:hidden">知識補給</a>
          <a href="#workshop" className="text-white font-regular cursor-pointer hover:text-[#D4B0F7] transition-colors duration-300 max-sm:hidden">共創實績</a>
          <a href="#toolkits" className="text-white font-regular cursor-pointer hover:text-[#D4B0F7] transition-colors duration-300 max-sm:hidden">數位無障礙工具包</a>
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
                <a href="#knowledge" className="block px-4 py-2 text-white hover:bg-[#5E3587]">知識補給</a>
                <a href="#workshop" className="block px-4 py-2 text-white hover:bg-[#5E3587]">共創實績</a>
                <a href="#toolkits" className="block px-4 py-2 text-white hover:bg-[#5E3587]">數位無障礙工具包</a>
              </div>
            )}
          </div>
          {/* end of menu */}
        </div>
        {/* end of right */}
      </nav>
      {/* end of fixed navbar */}


      {/* banner */}
      <div
        className=" flex flex-col overflow-hidden items-center  pb-24 w-full bg-[#1A1313] text-white font-sans  max-md:w-full max-sm:relative max-sm:left-0 max-sm:px-5"
      >
        <img src={banner} alt="banner_bg" className="absolute top-0 right-[-200px]   max-sm:right-[-110px]  max-sm:top-[-40px] " />
        {/* banner-content */}
        <section
          className=" flex w-full  relative flex-col items-start justify-start pt-96 px-24 max-lg:pt-52  max-lg:px-12  max-sm:pt-24 max-sm:px-6 "
        >
          <div className="flex flex-col items-start w-full "></div>
          <h1
            className="w-full text-white text-6xl font-light leading-[100px] max-lg:text-5xl  max-lg:leading-[70px] max-sm:text-3xl max-sm:leading-[40px]"
          >
            創造無障礙的數位未來
          </h1>
          <div className="flex flex-col items-start w-full">
            <h1
              className="w-full text-white text-6xl font-light leading-[100px] max-lg:text-5xl  max-lg:leading-[70px] max-sm:text-3xl max-sm:leading-[40px]"
            >
              以體驗設計的視角帶領
            </h1>
            <p
              className="w-full text-3xl leading-10 tracking-[5.28px] max-md:text-2xl max-md:leading-9 max-sm:text-lg max-sm:leading-7 max-sm:tracking-[3px]"
            >
              Build an Accessible Digital World for the Future
            </p>
          </div>
        </section>
      </div>
      {/* end of banner */}

      {/* mission */}
      {/* mission_top  */}
      <section className=" flex flex-col gap-0.5 justify-center items-center w-full bg-[#1A1313] pb-24 lg:px-[60px] lg:py-[90px] " >
        <h1 className="px-64 py-0 w-full text-base font-bold leading-6 text-center text-red-500 tracking-[3px] max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
          Mission of UXI's AaaS
        </h1>

        <h2 className="px-52 py-0 w-full text-3xl leading-10 text-center text-white font-[350] max-md:px-10 max-md:py-0 max-md:text-2xl max-sm:px-5 max-sm:py-0 max-sm:text-2xl">
          開拓友善包容的數位世界
        </h2>

        <p className="pt-4 w-[732px] max-lg:w-[680px] max-sm:w-[340px] text-lg tracking-widest leading-7 text-center text-white font-[350] max-md:text-base  max-sm:text-sm">
          遊石設計以體驗設計 (user experience) 驅動數位無障礙 (digital accessibility)， 提供 AaaS（Accessibility as a Service）全方面服務。無論您是企業、政府機構還是非營利組織，我們將成為您實現數位無障礙的最佳夥伴，共同創造充滿同理心 (empathic) 、包容（inclusive）與友善的（friendly）數位體驗。
        </p>
        {/* mission_pics  */}

        <img src={mission_pics} alt="mission_pics" className="flex my-8 w-[732px] max-lg:w-[680px] max-sm:w-[340px] justify-center items-center  " />


        {/* mission_bottom  */}

        <h3 className="flex  md:pt-12  text-lg font-medium tracking-widest leading-7 text-white max-md:text-base max-sm:text-sm w-[732px] max-lg:w-[680px] max-sm:w-[340px]" >
          無障礙介面設計與顧問 Inclusive UI Design and Consultants
        </h3>

        <ul className="flex flex-col gap-2    items-start w-[732px] max-lg:w-[680px] max-sm:w-[340px]">
          <li className=" flex  gap-2 items-start w-full md:pl-12 ">
            <span className="text-2xl tracking-widest leading-7 text-white font-[350]">·</span>
            <p className="text-lg tracking-widest leading-7 text-white font-[350] max-md:text-base max-sm:text-sm">
              提供設計系統無障礙健檢、修改建議報告書，協助企業通過無障礙審查。
            </p>
          </li>
          <li className=" flex  gap-2 items-start w-full md:pl-12 ">
            <span className="text-2xl tracking-widest leading-7 text-white font-[350]">·</span>
            <p className="text-lg tracking-widest leading-7 text-white font-[350] max-md:text-base max-sm:text-sm">
              響應各國無障礙法規及規範，打造合規的無障礙設計系統及開發交付文件。
            </p>
          </li>
        </ul>

        <h3 className="flex  text-lg font-medium tracking-widest leading-7 text-white max-md:text-base max-sm:text-sm w-[732px] max-lg:w-[680px] max-sm:w-[340px]" >
          輔助技術之用戶研究 User Research for Various Assistive Technologies
        </h3>

        <ul className="flex flex-col gap-2    items-start w-[732px] max-lg:w-[680px] max-sm:w-[340px]">
          <li className=" flex  gap-2 items-start w-full md:pl-12 ">
            <span className="text-2xl tracking-widest leading-7 text-white font-[350]">·</span>
            <p className="text-lg tracking-widest leading-7 text-white font-[350] max-md:text-base max-sm:text-sm">
              提供螢幕閱讀器、鍵盤操作之使用者易用性測試（usability testing）、用戶訪談（interview）服務。
            </p>
          </li>
          <li className=" flex  gap-2 items-start w-full md:pl-12 ">
            <span className="text-2xl tracking-widest leading-7 text-white font-[350]">·</span>
            <p className="text-lg tracking-widest leading-7 text-white font-[350] max-md:text-base max-sm:text-sm">
              提供用戶研究報告書、產品無障礙設計優化策略和數位產品指導方針。
            </p>
          </li>
        </ul>



      </section>
      {/* knowledge */}
      <section id="knowledge" className="knowledge flex flex-col items-center w-full bg-[#F4F4F4]">
        {/* knowledge_top */}
        <header className="flex flex-col gap-0.5 items-start pt-24 max-w-[732px] w-[732px] max-md:px-6 max-md:w-full max-sm:pt-11">
          <h2 className="w-full text-base font-bold leading-6 text-red-500 tracking-[2px]">
            Digital Accessibility Resources
          </h2>
          <h1 className="pb-10 w-full text-3xl leading-10 text-black font-[350]">
            知識補給
          </h1>

          <figure className="knowledge_main_img">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7341d2c87c4d8677cd0514705e4573adc1b65fb"
              alt=""
              className="w-[732px] h-[396px] max-w-[732px] rounded-[15px] max-lg:w-full max-lg:h-auto"
            />
          </figure>

          <p className="pt-7 w-full text-lg tracking-widest leading-7 font-[350] text-stone-700">
            遊石設計為您提供豐富的數位無障礙資訊。我們深入探討無障礙標準和法規，提供實用的設計指南和技巧。我們展示遊石團隊的無障礙作品案例，彰顯專業實力，同時精選全球創新無障礙設計案例。
          </p>
        </header>

        {/* knowledge_titleRow */}
        <section className="flex justify-between items-center pt-16 w-[732px]  max-sm:w-[390px] max-sm:px-[32px] ">
          <h2 className="text-xl leading-8 font-[350] text-stone-700 tracking-[3px]">
            精選文章
          </h2>
          <a href="/collection_knowledge" className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
            <span className="pr-2.5 text-lg leading-7 text-stone-600 tracking-[2.4px]">
              more
            </span>
            <ArrowRightWithStroke />
          </a>
        </section>

        {/* knowledge_cardsRow */}
        <section className=" flex flex-row gap-4 py-4 w-[732px] max-sm:flex-col max-sm:px-9 max-sm:justify-center max-sm:w-[390px] ">
          <article onClick={()=>window.location.href="/informative_article_1"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src={article_1}
                alt=""
                className="w-full h-full object-cover rounded-t-[15px] "
              />
            </figure>
            <div className="flex flex-col justify-between px-5 pt-2.5 pb-0 h-[124px]">
              <h3 className="pt-1 text-base font-bold tracking-wider leading-6 text-stone-700">
                推開數位無障礙大門，輕鬆淺談數位無障礙規範
              </h3>
              <div className="pt-5 pb-7">
                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>
          <article onClick={()=>window.location.href="/informative_article_2"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src={article_2}
                alt=""
                className="w-full h-full object-cover rounded-t-[15px] "
              />
            </figure>
            <div className="flex flex-col justify-between px-5 pt-2.5 pb-0 h-[124px]">
              <h3 className="pt-1 text-base font-bold tracking-wider leading-6 text-stone-700">
                如何建立數位無障礙的三大思維觀念?
              </h3>
              <div className="pt-5 pb-7">
                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>
          <article onClick={()=>window.location.href="/informative_article_3"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src={article_3}
                alt=""
                className="w-full h-full object-cover rounded-t-[15px] "
              />
            </figure>
            <div className="flex flex-col justify-between px-5 pt-2.5 pb-0 h-[124px]">
              <h3 className="pt-1 text-base font-bold tracking-wider leading-6 text-stone-700">
                無障礙案例分享：電動遊戲如何無障礙?
              </h3>
              <div className="pt-5 pb-7">
                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>

        </section>
      </section>

      {/* workshop */}
      <section id="workshop" className="workshop flex flex-col pb-16 items-center w-full bg-[#F4F4F4]">
        {/* workshop_top */}
        <header className="flex flex-col gap-0.5 items-start pt-24 max-w-[732px] w-[732px] max-md:px-6 max-md:w-full max-sm:pt-11">
          <h2 className="w-full text-base font-bold leading-6 text-red-500 tracking-[2px]">
            Solutions and Services
          </h2>
          <h1 className="pb-10 w-full text-3xl leading-10 text-black font-[350]">
            共創實績
          </h1>

          <figure className="workshop_main_img">
            <img
              src={workshop_pics}
              alt=""
              className="w-[732px] h-[396px] max-w-[732px] rounded-[15px] max-lg:w-full max-lg:h-auto"
            />
          </figure>

          <p className="pt-7 w-full text-lg tracking-widest leading-7 font-[350] text-stone-700">
            遊石設計深耕數位無障礙領域，致力知識傳播與分享。我們為企業量身打造無障礙培訓計畫，包含無障礙課程與工作坊，協助團隊深入理解無障礙原則，掌握最新工具，並在實際專案中靈活運用。
          </p>
        </header>

        {/* workshop_titleRow */}
        <section className="flex justify-between items-center pt-16 w-[732px]  max-sm:w-[390px] max-sm:px-[32px] ">
          <h2 className="text-xl leading-8 font-[350] text-stone-700 tracking-[3px]">
            精選文章
          </h2>
          <a href="/collection_workshop" className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
            <span className="pr-2.5 text-lg leading-7 text-stone-600 tracking-[2.4px]">
              more
            </span>
            <ArrowRightWithStroke />
          </a>
        </section>

        {/* workshop_cardsRow */}
        <section className=" flex flex-row gap-4 py-4 w-[732px] max-sm:flex-col max-sm:px-9 max-sm:justify-center max-sm:w-[390px] ">
          <article onClick={()=>window.location.href="/workshop_article_1"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px]  transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src={article_4}
                alt=""
                className="w-full h-full object-cover rounded-t-[15px] "
              />
            </figure>
            <div className="flex flex-col justify-between px-5 pt-2.5 pb-0 h-[124px]">
              <h3 className="pt-1 text-base font-bold tracking-wider leading-6 text-stone-700">
                數位無障礙設計：遊石設計企業內訓
              </h3>
              <div className="pt-5 pb-7">
                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>
          <article onClick={()=>window.location.href="/workshop_article_2"} className=" card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src={article_5}
                alt=""
                className="w-full h-full object-cover rounded-t-[15px] "
              />
            </figure>
            <div className="flex flex-col justify-between px-5 pt-2.5 pb-0 h-[124px]">
              <h3 className="pt-1 text-base font-bold tracking-wider leading-6 text-stone-700">
                體驗工作坊分享文：包容不卡卡桌遊
              </h3>
              <div className="pt-5 pb-7">
                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>
        </section>
      </section>


      {/* toolkits */}
      <section id="toolkits" className="toolkits flex flex-row gap-12 justify-center items-center w-full py-16 px-6 max-lg:gap-7  max-sm:flex-col max-sm:px-9 ">
        {/* toolkits_leftpart */}
        <div className=" flex flex-col gap-6 justify-center items-start w-[434px] max-md:w-full">
          <article className="flex flex-col gap-px justify-center items-start w-[434px] max-md:w-full">
            <header>
              <h1 className="w-full text-base font-bold leading-6 text-red-500 tracking-[3px]">
                Inclusive Design Toolkits
              </h1>
              <h2 className="mt-6 w-full text-3xl leading-10 text-black font-[350]">
                數位無障礙工具包
              </h2>
            </header>

            <p className="mt-10 w-full text-base tracking-wider leading-6 font-[350] text-stone-700">
              以WCAG為基礎，專為企業開發的「數位無障礙設計工包」，
              包含全面的無障礙設計指南、檢核表、學習卡牌及關鍵資源
              集等。立即採用「數位無障礙設計工具包」，讓您的產品團
              隊走在無障礙設計的最前端，創造更包容與友善的數位產 品！
            </p>

            <h3 className="mt-5 w-full text-base font-bold tracking-wider leading-6 text-stone-700">
              為什麼選擇遊石設計的數位無障礙工具包？
            </h3>

            <ul className="flex flex-col gap-2 items-start mt-5 w-full">
              <li className="flex gap-2 items-start">
                <span className="text-2xl tracking-wider leading-6 font-[350] text-stone-700">·</span>
                <div className="flex flex-col items-start">
                  <p className="text-base tracking-wider leading-6 text-stone-700">
                    <strong className="font-bold">快速掌握無障礙設計精髓：</strong>
                    無需冗長的培訓，您的產品團
                    隊能迅速上手，將無障礙設計理念融入日常的工作中。
                  </p>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-2xl tracking-wider leading-6 font-[350] text-stone-700">·</span>
                <div className="flex flex-col items-start">
                  <p className="text-base tracking-wider leading-6 text-stone-700">
                    <strong className="font-bold">無痛打造無障礙產品：</strong>
                    輕鬆應用工具包中的資源和指南， 打造出符合數位無障礙規範的卓越產品。
                  </p>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-2xl tracking-wider leading-6 font-[350] text-stone-700">·</span>
                <div className="flex flex-col items-start">
                  <p className="text-base tracking-wider leading-6 text-stone-700">
                    <strong className="font-bold">提高產品競爭力：</strong>
                    提升產品的無障礙性，不僅符合法律規
                    範，還能拓展更廣泛的用戶群體，增強市場競爭力。
                  </p>
                </div>
              </li>
            </ul>
          </article>

          <Button onClick={() => window.open("https://www.uxi-design.com/connect", "_blank")} className="rounded-full p-5 bg-[#DC3545]  font-[600] text-xl max-lg:text-md max-md:text-sm  max-md:p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#D63C3D] hover:to-[#7A31C1]  " aria-label="聯繫我們按鈕">
            <span className="text-white font-semibold">聯繫我們</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5 stroke-white max-md:size-4">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>

          </Button>
        </div>
        {/* toolkits_rightpart */}
        <div className="flex flex-col gap-4 justify-center items-start w-[288px]">
          <img src={toolkits} alt="toolkits" className="w-full h-full object-cover rounded-t-[15px] " />
        </div>
      </section>


    </>
  );
};

export default Home;