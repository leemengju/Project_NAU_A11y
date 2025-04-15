import React from "react";
import { ChevronLeft } from "lucide-react";
import { Ellipsis } from "lucide-react";
import Laurence from "../assets/avatar/Laurence.png"
import p1 from "../assets/informative_article_3/p1.svg";
import p2 from "../assets/informative_article_3/p2.svg";
import p3 from "../assets/informative_article_3/p3.svg";
import p4 from "../assets/informative_article_3/p4.svg";
import p5 from "../assets/informative_article_3/p5.svg";
import p6 from "../assets/informative_article_3/p6.svg";
import p7 from "../assets/informative_article_3/p7.svg";
import p8 from "../assets/informative_article_3/p8.svg";
import p9 from "../assets/informative_article_3/p9.svg";
import ArrowRight, { ArrowRightWithStroke } from '../components/icons';
import article_1 from '../assets/home/article_1.svg';
import article_2 from '../assets/home/article_2.svg';
import article_3 from '../assets/home/article_3.svg';

const Informative_article_3 = () => {
  const articleContent = [
    {
      type: "header",
      content: (
        <header className="mb-16">
            <h4 onClick={() => window.location.href='/collection_knowledge'} className=" flex flex-row items-center gap-1 mb-1.5 text-xl font-medium tracking-wide text-stone-700 max-sm:text-md max-sm:leading-9 underline">
           
                <ChevronLeft />
                回到文章彙總
            </h4>
          <h1 className="mb-1.5 text-3xl font-bold tracking-wide leading-10 text-stone-700 max-sm:text-2xl max-sm:leading-9">
          無障礙案例分享：電動遊戲
          </h1>
          <p className="mb-6 text-base tracking-wider leading-6 font-[350] text-stone-600 max-sm:text-sm max-sm:leading-5">
          身心障礙玩家如何一起加入遊戲世界？
          </p>
          <div className="flex flex-row items-center gap-2">
          <img src={Laurence} alt="Laurence" className="w-10 h-10 border-2 border-red-700 rounded-full" />
          <p  className="text-base leading-5 font-[350] text-stone-700">
            Laurence
          </p>
          <span className="text-base leading-5 font-[350] text-stone-700">
            •
          </span>
          <time dateTime="2024-10-28" className="text-base leading-5 font-[350] text-stone-700">
            2024-10-28
          </time>
          </div>
        </header>
      ),
    },
    {
      type: "section",
      content: (
        <section className="px-0 py-5 bg-white rounded max-sm:p-4">
          {/* 原文連結 */}
          <div className="mb-2">
            <p className="text-xs leading-5">
              <span>原文連結｜</span>
              <a href="https://medium.com/uxi-design/%E9%9B%BB%E7%8E%A9%E9%81%8A%E6%88%B2%E7%84%A1%E9%9A%9C%E7%A4%99-%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E7%8E%A9%E5%AE%B6%E5%A6%82%E4%BD%95%E4%B8%80%E8%B5%B7%E5%8A%A0%E5%85%A5%E9%81%8A%E6%88%B2%E4%B8%96%E7%95%8C-faba7e228c96" className="text-gray-900 " style={{ textDecoration: 'underline' }}>Medium 文章</a>
            </p>
          </div>
          {/* 目錄導航 */}
          <div className="mb-3.5">
            <p className="text-xs leading-5">
              <span>目錄導航｜</span>
              <a href="#accessibility-controller" className="text-gray-900 " style={{ textDecoration: 'underline' }}>無障礙控制器</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{color: "#FFFFFF"}}>目錄導航｜</span>
              <a href="#accessibility-software" className="text-gray-900 " style={{ textDecoration: 'underline' }}>無障礙軟體功能</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{color: "#FFFFFF"}}>目錄導航｜</span>
              <a href="#conclusion" className="text-gray-900 " style={{ textDecoration: 'underline' }}>結語</a>
            </p>
          </div>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          你喜歡玩電動遊戲嗎？你可以想像有行動障礙的人要如何玩遊戲嗎？為了讓每個人都可以享受遊戲，遊戲平台和開發商也正在積極推動無障礙設計。這篇文章會介紹現在市面上的遊戲廠商如何透過設計來幫助身心障礙人士更好享受遊戲！
          </p>
          <h2 id="accessibility-controller" className=" font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          無障礙控制器
          </h2>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          遊戲的無障礙硬體設計，通常是為了讓人能更容易或用更多元的方式操控遊戲。一般的遊戲控制器的使用方式通常需要雙手都可以穩定地維持一個抓握的姿勢，而且搖桿也需要精細的手指操作，這對手部控制能力比較不好的人來說，是很難達成的條件。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          近年來，主要遊戲廠商紛紛推出了專門的無障礙控制器，為不同需求的玩家提供更好的遊戲體驗，例如微軟的 Xbox Adaptive Controller、Sony 的 PlayStation Access Controller，以及非營利組織 Our Odyssey 設計的 Overjoyed。
          </p>
          <p className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox Adaptive ControllerXbox Adaptive Controller
          </p>
          <figure className="mx-0 w-full">
            <img
              src={p1}
              className="w-full h-auto"
              alt="Xbox Adaptive Controller"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox Adaptive Controller /
圖片來源：Xbox
          </p>


          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox Adaptive Controller 提供了 19 個外部接口以及豐富的輔助設備生態系統，可以同時連接各種專業的設備，像是讓人們可以單手操作的特製搖桿（PDP）、腳部操作的踏板控制器（3DRudder），甚至是吹吸控制器（QuadStick）。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          這種開放性設計大大擴展了控制器的應用範圍，使其能夠滿足更多特殊需求。無法透過肢體來進行精細操作的使用者可以利用按鈕、單手搖桿或踏板來操作，障礙程度更高者也可以使用吹吸控制器來遊玩遊戲。這些設備讓遊戲對於身體動作的要求更低，更可及。
          </p>

          <figure className="mx-0 w-full">
            <img
              src={p2}
              className="w-full h-auto"
              alt="Xbox Adaptive Controller"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          可外接多個按鈕協助操作 /
圖片來源：Xbox Canada

          </p>


          <figure className="mx-0 w-full">
            <img
              src={p3}
              className="w-full h-auto"
              alt=" 與 3DRudder 踏板相接，可無手操作"
            />
          </figure>
          <p className="flex justify-center  text-lg leading-8 max-sm:text-base max-sm:leading-7">
          與 3DRudder 踏板相接，可無手操作 
          </p>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          /
          圖片來源：The Fox Magzine
          </p>

          

          
          <p className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          PlayStation Access Controller 
          </p>

          <figure className="mx-0 w-full">
            <img
              src={p4}
              className="w-full h-auto"
              alt="PlayStation Access Controller"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          PlayStation Access Controller /
          圖片來源：SONY
          </p>


          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          PlayStation Access Controller 的特點則是可調整度非常高，每個整個控制器的按鍵位置都可以自己搭配，也提供不同形狀的按鈕，搖桿的距離可以調整，形狀也有多種選擇。為多種身心障礙玩家提供了極大的便利。對於行動不便的玩家，能夠根據自身的活動範圍設置最舒適的操作方式；對於手部肌肉控制能力較弱的玩家，可以選擇較大的按鍵或特殊形狀的控制桿。模組化設計也便於照護者根據玩家的需求快速調整設置，使得更多不同類型的身心障礙玩家能夠享受遊戲樂趣。
          </p>

          <figure className="mx-0 w-full">
            <img
              src={p5}
              className="w-full h-auto"
              alt="可調整按鈕配置、替換操作桿帽"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          可調整按鈕配置、替換操作桿帽 /
          圖片來源：SONY
          </p>


          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
           此外，每個按鍵都可以設置多個功能，可將複雜的按鍵組合簡化為單個按鍵。
          </p>
          <figure className="mx-0 w-full">
            <img
              src={p6}
              className="w-full h-auto"
              alt="高度可客製，可調整按鈕配置、替換操作桿帽"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          一個按鍵被設定成「L3+R3」 /
          圖片來源：PlayStaion
          </p>


          <p className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
           Our Odyssey Overjoyed
          </p>


          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
           除了遊戲公司以外，也有非營利組織在設計無障礙控制器，例如 Our Odyssey。他們發現任天堂的無障礙需要經過一些對身心障礙人士很困難的操作才能設定，也有一些遊戲需要比較精細或困難的手部動作才能遊玩。於是他們製造了一款叫做 Overjoyed 的控制器，這款控制器是顯示在螢幕上的，再利用其他外接的設備進行操作。他們除了支援傳統的按鍵和搖桿操作，還整合了眼動追蹤和語音控制等先進技術。Our Odyssey 的產品支援了硬體設計相較不足的 Switch，提供想遊玩 Swtich 的玩家新的選擇。
          </p>
          <figure className="mx-0 w-full">
            <img
              src={p7}
              className="w-full h-auto"
              alt="Overjoyed 使用畫面"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Overjoyed 使用畫面 /
          圖片來源：Assistive Technology Blog
          </p>


          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          後來，Our Odyssey 也與 8BitDo 公司合作，推出實體控制器，也與其他公司的軟體相容，也可以當作電子閱讀器的翻頁器。
          </p>
          <figure className="mx-0 w-full">
            <img
              src={p8}
              className="w-full h-auto"
              alt="Overjoyed 與 8BitDo 合作的實體控制器"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          實體控制器 /
          圖片來源：GoNintendo
          </p>

          <br />
          <Ellipsis  className="w-full flex justify-center"  color="#D9D9D9" />
          <br />



          <h2 id="accessibility-software" className="font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          無障礙軟體功能
          </h2>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          硬體的創新需要軟體的配合才能發揮最大效用。這個章節我們會介紹遊戲平台提供了哪些軟體上的無障礙設定，以及他們分別協助了哪些面向。
          </p>
          <p className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          視覺輔助
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox、PlayStation 和 任天堂 Switch 都提供了螢幕朗讀功能，幫助視障玩家導航 menu 和理解遊戲內容。色彩校正和高對比度模式也是三大平台的共同功能，為色盲玩家和視力不佳的玩家提供了更好的視覺體驗。特別是任天堂 Switch 的反向顏色功能，在某些情況下可以大幅提升畫面的可讀性，雖然任天堂沒有提供常見的螢幕閱讀器支援和字體大小設定，但提供的 zoom 功能也可以放大畫面。
          </p>
          <p className="font-bold  mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          控制輔助
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox 和 Playstation 都允許同時使用兩個控制器操作，為需要協助的玩家提供了便利。而三大平台都支援按鍵重新配置，允許玩家自訂操控鍵。
          </p>

          <figure className="mx-0 w-full">
            <img
              src={p9}
              className="w-full h-auto"
              alt="Overjoyed 與 8BitDo 合作的實體控制器"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox 提供的無障礙設定 /
圖片來源：Xbox
          </p>


          <h2 id="conclusion" className="font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          結語
          </h2>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Xbox、PlayStation 和 任天堂 Switch 都在推動遊戲無障礙，通過硬體創新、軟體改良和遊戲設計的改進，每個平台都有其獨特的方法和優勢。任天堂 Switch 雖然沒有專門的硬體，但其軟體設定還是有提供一定的靈活度，也鼓勵遊戲製作方提供遊戲內的無障礙設計。這些平台正在逐步消除障礙，讓更多玩家能夠享受遊戲的樂趣。大家可以期待看到更多創新的無障礙解決方案，以及一個更加開放和包容的遊戲文化！
          </p>
          <footer className="mt-9 text-sm leading-6">
            <p>
              <span>封面圖片：</span>
              <a  className="text-gray-900">Unsplash</a>
            </p>
          </footer>
        </section>
      ),
    },
  ];

  return (
    <>
      <article className="mx-auto mt-30 mb-20 text-gray-700 max-w-[510px] max-md:px-5 max-md:py-0">
        {articleContent.map((section, index) => (
          <React.Fragment key={index}>
            {section.content}
            </React.Fragment>
        ))}
      </article>
       {/* 推薦文章 */}
       <div className="bg-[#F4F4F4] w-full flex flex-col justify-center items-center py-8 px-4 max-sm:px-0 max-sm:gap-8">
        {/* knowledge_titleRow */}
        <section className="flex justify-between items-center  w-[732px]  max-sm:w-[390px] max-sm:px-[32px] ">
          <h2 className="text-xl leading-8 font-[350] text-stone-700 tracking-[3px]">
            你可能會感興趣的文章
          </h2>
          <a href="/collection_knowledge" className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-110" style={{ display: "none" }}>
            <span className="pr-2.5 text-lg leading-7 text-stone-600 tracking-[2.4px]">
              more
            </span>
            <ArrowRightWithStroke />
          </a>
        </section>

        {/* knowledge_cardsRow */}
        <section className=" flex flex-row gap-4 py-4 w-[732px] max-sm:flex-col max-sm:px-9 max-sm:justify-center max-sm:w-[390px] ">
          <article onClick={() => window.location.href = "/informative_article_1"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
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
          <article onClick={() => window.location.href = "/informative_article_2"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
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
          <article onClick={() => window.location.href = "/informative_article_3"} className="card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
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
      </div>
    </>
  );
};

export default Informative_article_3;
