import React from "react";
import { ChevronLeft } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { Helmet } from "react-helmet";

import p1 from "../assets/informative_article_4/p1.svg";
import p2 from "../assets/informative_article_4/p2.svg";
import p3 from "../assets/informative_article_4/p3.svg";
import p4 from "../assets/informative_article_4/p4.svg";
import p5 from "../assets/informative_article_4/p5.svg";
import p6 from "../assets/informative_article_4/p6.svg";
import ArrowRight, { ArrowRightWithStroke } from '../components/icons';

import ShareButton from '../components/ShareButton';
import informative_article_1_img from '../assets/home/informative_article_1.svg'
import informative_article_2_img from '../assets/home/informative_article_2.svg'
import informative_article_3_img from '../assets/home/informative_article_3.svg'
import informative_article_4_img from '../assets/home/informative_article_4.svg'
import AveryLin from "../assets/avatar/Avery_lin.jpg"
import Laurence from "../assets/avatar/Laurence.png"

  
  // 文章数据
  const articles = [
    {
      id: 1,
      title: "推開數位無障礙大門，輕鬆淺談數位無障礙規範",
      author: "Avery Lin",
      authorImg: AveryLin,
      date: "2024-10-28",
      image: informative_article_1_img,
      link: "/informative_article_1"
    },
    {
      id: 2,
      title: "如何建立數位無障礙的三大思維觀念?",
      author: "Avery Lin",
      authorImg: AveryLin,
      date: "2024-10-28",
      image: informative_article_2_img,
      link: "/informative_article_2"
    },
    {
      id: 3,
      title: "無障礙案例分享：電動遊戲如何無障礙?",
      author: "Laurence",
      authorImg: Laurence,
      date: "2024-10-28",
      image: informative_article_3_img,
      link: "/informative_article_3"
    },
    {
      id: 4,
      title: "包容性設計工具箱：助你一臂之力！",
      author: "Avery Lin",
      authorImg: AveryLin,
      date: "2025-02-21",
      image: informative_article_4_img,
      link: "/informative_article_4"
    }
  ];


const Informative_article_4 = () => {
  const articleContent = [
    {
      type: "header",
      content: (
        <header className="mb-16">
           {/* title_row */}
           <div className="flex flex-row justify-between items-center mb-1.5">
            <h4 onClick={() => window.location.href = '/collection_knowledge'} className=" flex flex-row items-center gap-1  text-xl font-medium tracking-wide text-stone-700 max-sm:text-md max-sm:leading-9 underline">

              <ChevronLeft />
              回到文章彙總
            </h4>
            {/* 分享按鈕 */}
            <ShareButton article={articles[3]} />
           
          </div>
          <h1 className="mb-1.5 text-3xl font-bold tracking-wide leading-10 text-stone-700 max-sm:text-2xl max-sm:leading-9">
          包容性設計工具箱：助你一臂之力！
          </h1>
          <p className="mb-6 text-base tracking-wider leading-6 font-[350] text-stone-600 max-sm:text-sm max-sm:leading-5">
          大家好，我是遊石設計的資深研究員 Avery！今天要帶你一探遊石人包容性設
計（inclusive design）工具箱，不藏私分享我們覺得「好用」與「值得依
賴」的小工具，幫助你更專注於創新設計，在設計之路上飛速前進！
          </p>
          <div className="flex flex-row items-center gap-2">
          <img src={AveryLin} alt="AveryLin" className="w-10 h-10 border-2 border-red-700 rounded-full" />
          <p  className="text-base leading-5 font-[350] text-stone-700">
            Avery Lin
          </p>
          <span className="text-base leading-5 font-[350] text-stone-700">
            •
          </span>
          <time dateTime="2025-02-21" className="text-base leading-5 font-[350] text-stone-700">
            2025-02-21
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
              <a href="https://medium.com/uxi-design/%E5%8C%85%E5%AE%B9%E6%80%A7%E8%A8%AD%E8%A8%88%E5%B7%A5%E5%85%B7%E7%AE%B1-%E5%8A%A9%E4%BD%A0%E4%B8%80%E8%87%82%E4%B9%8B%E5%8A%9B-69075444ffaf" className="text-gray-900 " style={{ textDecoration: 'underline' }}>Medium 文章</a>
            </p>
          </div>
          {/* 目錄導航 */}
          <div className="mb-3.5">
            <p className="text-xs leading-5">
              <span>目錄導航｜</span>
              <a href="#contrast-checker" className="text-gray-900 " style={{ textDecoration: 'underline' }}>1 / 提升辨識度：顏色對比度檢測工具</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{color: "#FFFFFF"}}>目錄導航｜</span>
              <a href="#color-simulator" className="text-gray-900 " style={{ textDecoration: 'underline' }}>2 / 理解色盲的世界：色彩模擬器</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{color: "#FFFFFF"}}>目錄導航｜</span>
              <a href="#mark-tool" className="text-gray-900 " style={{ textDecoration: 'underline' }}>3 / 無障礙實踐不掉棒：無障礙標註工具</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{color: "#FFFFFF"}}>目錄導航｜</span>
              <a href="#checklist" className="text-gray-900 " style={{ textDecoration: 'underline' }}>4 / 審查無障礙設計快速又準確：設計檢核清單</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{color: "#FFFFFF"}}>目錄導航｜</span>
              <a href="#conclusion" className="text-gray-900 " style={{ textDecoration: 'underline' }}>結語</a>
            </p>
          </div>


          <figure className="mx-0 w-full">
            <img
              src={p1}
              className="w-full h-auto"
              alt="cover"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Photo by Milad Fakurian on Unsplash
          </p>
          <h2 id="contrast-checker" className=" font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          1 / 提升辨識度：顏色對比度檢測工具
          </h2>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          許多人常問：「該如何在開始在設計中落實無障礙？」其實，最簡單的第一步，就是開啟你負責的產品畫面或設計系統，進行顏色對比度檢測！當你踏出這一步，你就成功實踐無障礙的一小步了。透過檢測，你可以快速了解產品在色彩無障礙方面的符合程度，進而有依據地進行下一步的優化與調整。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          市面上的顏色對比度檢測工具多不勝數，但依我的經驗，簡單直覺、操作不複雜的工具往往是最實用的（打遍天下唯用這招！）。其中，Figma 外掛「Contrast」就是如此。
          </p>
          <p className=" mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          檢測方式非常簡單，點擊你想檢測的文字或色塊，檢測結果就會顯示在面板上。面板上的資訊可以快速得到你所測試的顏色是否符合國際標準 WCAG 指南在「文字對比」與「非文字對比」成功準則的規定。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          另外，還有一個工具值得推薦，那就是「 Stark」，它除了基本的檢測功能，還增加了顏色建議（suggestions）功能，方便我們快速得到最接近合規的顏色，不過要注意的是顏色的調整，要以整體色盤、色階視角去調整，如採取單一修正各個顏色，很容易導致色盤變得凌亂且無邏輯規則。
          </p>
          <figure className="mx-0 w-full">
            <img
              src={p2}
              className="w-full h-auto"
              alt="色彩檢測工具"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          色彩檢測工具，以 Figma Product Education — Tripma 開源檔案做演示。圖 / 自製
          </p>


          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          在產品設計中，通常會使用多種顏色組合，那要如何確保多種顏色組合搭配時
符合無障礙標準呢？這時就要使用「Contrast Grid」工具，這個工具能夠幫助
我們快速檢視多種顏色之間的對比度，方便篩選適合的配色方案。最後一步就
是將符合對比度的配色方案，整理進設計系統中，方便團隊設計協作。
          </p>
          

          <figure className="mx-0 w-full">
            <img
              src={p3}
              className="w-full h-auto"
              alt="顏色對比度網格工具"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          顏色對比度網格工具，以 Figma Product Education — Tripma 開源檔案做演示。圖 / 自製

          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          值得一提的是，WCAG 2 的對比度計算主要基於亮度（luminance），但這種
方式未能準確反映人眼對比的實際感知。因此，研究者 Andrew Somers 開發
了「進階感知對比演算法」（Advanced Perceptual Contrast Algorithm,
APCA），試圖改善這一問題。值得關注的是，WCAG 3.0 草案也正考慮採用
這個更先進的色彩模型，以提升可讀性與易辨識度。
          </p>
          <h4 className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          其他資源
          </h4>
          <ul style={{listStyleType:"disc"}}>
            <li>
              <a href="http://www.myndex.com/APCA/" className="text-gray-900 " style={{ textDecoration: 'underline' }}>APCA Contrast Calculator</a>
            </li>
            <li>
              <a href="https://khan-tw.medium.com/%E5%B0%8D%E6%AF%94%E5%BA%A6%E5%8F%AF%E8%A6%96%E6%80%A7-readability-contrast-fce8cf3ddca6" className="text-gray-900 " style={{ textDecoration: 'underline' }}>WCAG2 你還在用嗎？UI對比度可視性標準｜WCAG2 Are You Still Using
              It? UI Contrast Visibility Standard (Readability Contrast)</a>
            </li>
          </ul>
          

         
          <br />
          <Ellipsis  className="w-full flex justify-center"  color="#D9D9D9" />
          <br />

          
          <h2 id="color-simulator" className=" font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          2 / 理解色盲的世界：色彩模擬器
          </h2>
          
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          不知道你是否有過這樣的情境：我們能理解色盲色弱在哪些顏色上會出現不同
的色彩感知的基礎概念，但對於介面中由眾多顏色所構成的插圖或元件，我們
很難光靠頭腦想像。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          「Color Blind 」這款 Figma 工具有助於讓我們快速同理，不同面向的視覺色
盲與色弱，如紅綠色盲（色弱）、黃綠色盲（色弱）及全色盲（色弱）的視野
中，對於介面上物件色彩感知的樣貌。此工具能針對元件（component）、圖
片及畫布（frame）進行模擬，但如果畫布中涵蓋較多元件時，它在某些元件
上會無法模擬出來，就要手動分別將各個元件套用此工具。
          </p>

          <figure className="mx-0 w-full">
            <img
              src={p4}
              className="w-full h-auto"
              alt="色盲弱模擬器示意"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          色盲弱模擬器示意，以 Figma Product Education — Tripma 開源檔案做演示。圖 / 自製
          </p>

          <br />
          <Ellipsis  className="w-full flex justify-center"  color="#D9D9D9" />
          <br />

          <h2 id="mark-tool" className=" font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          3 / 無障礙實踐不掉棒：無障礙標註工具
          </h2>

          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          無障礙標註是實踐產品無障礙設計的關鍵環節，除了作為設計端交接給開發端
的重要文件外，無障礙標註還直接影響產品在使用輔助技術（如鍵盤、螢幕閱
讀器等）時的響應效果。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          例如，若在設計稿中將某個圖標按鈕命名為「Icon / Favorite」，開發端照此
實作，當使用者啟動螢幕閱讀器並聚焦於此按鈕時，螢幕閱讀器可能會朗讀出
「I c o n 斜線 F a v o r i t e 按鈕」，這樣的語音報讀對使用者而言，不僅讓人
困惑，也極難理解。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          為了讓產品能如期在使用端擁有良好的使用體驗，在產品設計與開發過程就需
要下點功夫，因此許多大型企業提供了 Figma 無障礙標記模板或外掛工具，
像是 Twitter 、Indeed、CVSHealth 和 Microsoft 等，這些資源對初次建立無
障礙標註文件的產品團隊非常有幫助，可以加速標註和提升團隊之間的溝通效
率。
          </p>
         

          <figure className="mx-0 w-full">
            <img
              src={p5}
              className="w-full h-auto"
              alt="無障礙標記工具示意"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          無障礙標記工具示意。圖 / 自製
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          這時就會有人想提問：「標註的內容及形式到底哪種才是對的？」這沒有絕對
的答案。建議可參考「多份」大型企業公布的標註資源，並帶回產品團隊，與
開發團隊充分溝通後，從中提取團隊需求的部分，對不適用的內容進行調整，
最終形成符合團隊協作流程的無障礙標記文件，這才是這份文件最重要的！
          </p>


          <br />
          <Ellipsis  className="w-full flex justify-center"  color="#D9D9D9" />
          <br />


          <h2 id="checklist" className=" font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          4 / 審查無障礙設計快速又準確：設計檢核清單
          </h2>

          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          無障礙設計檢核清單的目的是幫助我們應對繁多的 WCAG 無障礙指南成功準
則，避免感到迷茫，並提供一個可依循的檢核指引。接下來要介紹的三份檢核
資源，從不同角度探索無障礙設計，都對我們在執行設計時具有啟發作用。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          WebAIM 提供的檢核清單以 WCAG 為基礎，逐條對應執行的無障礙事項，並
附有解釋性資源；澳洲的 Intopia Digital 檢核表則突出其篩選器，讓不同職能
角色（如視覺設計、內容設計、開發執行、UX 設計）可以選擇適合的項目進
行檢查，並提供 WCAG 版本及測評等級篩選。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Indeed 的包容性設計實踐文件（Designing Inclusive Experiences）則從人類
能力與障礙的角度切入，將檢核條目分為視覺、聽覺、肢體、溝通、認知等範
疇，並以「疑問句」形式作為檢測內容的開頭，例如 Is the page meaningful
without color？這樣的句型幫助我們進入一個情境，開始試著同理，再去設想
無障礙執行作法。這是幫助我們汲汲營營想要找到執行方法前，引發想法、貼
近用戶很棒的思考方式。
          </p>
         

          <figure className="mx-0 w-full">
            <img
              src={p6}
              className="w-full h-auto"
              alt=" Indeed 包容性設計實踐文件。"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Indeed 包容性設計實踐文件。圖 / 自製
          </p>



        
          <h4 className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          其他資源
          </h4>
          <ul style={{listStyleType:"disc"}}>
            <li>
              <a href="https://accessibility.voxmedia.com/" className="text-gray-900 " style={{ textDecoration: 'underline' }}>Voxmedia — Accessibility Guidelines</a>
            </li>
            <li>
              <a href="https://www.a11yproject.com/checklist/" className="text-gray-900 " style={{ textDecoration: 'underline' }}>The A11y Project — Checklist</a>
            </li>
            <li>
              <a href="https://www.figma.com/community/file/1018473427527354199" className="text-gray-900 " style={{ textDecoration: 'underline' }}>WCAG 2.1 Posters v1.1
               </a>
            </li>
          </ul>
         

          <br />
          <Ellipsis  className="w-full flex justify-center"  color="#D9D9D9" />
          <br />


          <h2 id="conclusion" className="font-bold mb-5 text-xl leading-8 max-sm:text-base max-sm:leading-7">
          結語
          </h2>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          數位無障礙日趨普及之際，小工具正爭先恐後、眼花撩亂地出現在你我的眼前，不要給它們迷惑了！選擇適合的工具從來不在於數量，而是能否真正提升效率與協作。關鍵在於選擇直覺易用、能與團隊無縫對接的工具。期待你與產品團隊共同打造出適合你們的包容性設計工具箱吧！
          </p>
        </section>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{articles[3].title}</title>
        <meta property="og:title" content={articles[3].title} />
        <meta property="og:description" content="包容性設計工具箱：助你一臂之力！" />
        <meta property="og:url" content={window.location.origin + articles[3].link} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={articles[3].image} />
      </Helmet>
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
                src={informative_article_1_img}
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
                src={informative_article_2_img}
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
                src={informative_article_3_img}
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

export default Informative_article_4;
