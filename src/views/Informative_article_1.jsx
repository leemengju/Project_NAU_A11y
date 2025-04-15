import React from "react";
import { ChevronLeft } from "lucide-react";
import { Ellipsis } from "lucide-react";
import AveryLin from "../assets/avatar/Avery_lin.jpg"
import p1 from "../assets/informative_article_1/p1.svg";
import p2 from "../assets/informative_article_1/p2.svg";
import p3 from "../assets/informative_article_1/p3.svg";
import p4 from "../assets/informative_article_1/p4.svg";
import p5 from "../assets/informative_article_1/p5.svg";
import ArrowRight, { ArrowRightWithStroke } from '../components/icons';
import article_1 from '../assets/home/article_1.svg';
import article_2 from '../assets/home/article_2.svg';
import article_3 from '../assets/home/article_3.svg';




const informative_article_1 = () => {
  const articleContent = [
    {
      type: "header",
      content: (
        <header className="mb-16">
          <h4 onClick={() => window.location.href = '/collection_knowledge'} className=" flex flex-row items-center gap-1 mb-1.5 text-xl font-medium tracking-wide text-stone-700 max-sm:text-md max-sm:leading-9 underline">

            <ChevronLeft />
            回到文章彙總
          </h4>
          <h1 className="mb-1.5 text-3xl font-bold tracking-wide leading-10 text-stone-700 max-sm:text-2xl max-sm:leading-9">
            推開數位無障礙大門，輕鬆淺談數位無障礙規範
          </h1>
          <p className="mb-6 text-base tracking-wider leading-6 font-[350] text-stone-600 max-sm:text-sm max-sm:leading-5">
            數位無障礙是什麼？身為產品設計與開發者的我們，可以遵循哪些全球與在地規範呢？
          </p>

          <div className="flex flex-row items-center gap-2">
            <img src={AveryLin} alt="Avery Lin" className="w-10 h-10 border-2 border-red-700 rounded-full" />
            <p className="text-base leading-5 font-[350] text-stone-700">
              Avery Lin
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
          <div className="mb-3.5">
            <p className="text-xs leading-5">
              <span>原文連結｜</span>
              <a href="https://medium.com/uxi-design/%E6%8E%A8%E9%96%8B%E6%95%B8%E4%BD%8D%E7%84%A1%E9%9A%9C%E7%A4%99%E5%A4%A7%E9%96%80-%E8%BC%95%E9%AC%86%E6%B7%BA%E8%AB%87%E6%95%B8%E4%BD%8D%E7%84%A1%E9%9A%9C%E7%A4%99%E8%A6%8F%E7%AF%84-a6b736c6a0f9" className="text-gray-900 " style={{ textDecoration: 'underline' }}>Medium 文章</a>
            </p>
          </div>
          {/* 目錄導航 */}
          <div className="mb-3.5">
            <p className="text-xs leading-5">
              <span>目錄導航｜</span>
              <a href="#WCAG" className="text-gray-900 " style={{ textDecoration: 'underline' }}>面向世界的《WCAG》網頁內容無障礙指南</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{ color: "#FFFFFF" }}>目錄導航｜</span>
              <a href="#VAPT" className="text-gray-900 " style={{ textDecoration: 'underline' }}>    數位產品的「無障礙程度說明書」：VAPT</a>
            </p>
            <p className="text-xs leading-5">
              <span style={{ color: "#FFFFFF" }}>目錄導航｜</span>
              <a href="#conclusion" className="text-gray-900 " style={{ textDecoration: 'underline' }}>結語</a>
            </p>
          </div>

          <figure className="mx-0 my-5 w-full">
            <img
              src={p1}
              className="w-full h-auto"
              alt="在當今高度知識化的時代，人們無不仰賴科技與數位產品，它成為我們日常溝通、創造知識與共享一切的媒介。"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            Photo by NASA on Unsplash。圖 / 重繪
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            在當今高度知識化的時代，人們無不仰賴科技與數位產品，它成為我們日常溝通、創造知識與共享一切的媒介。在乘著全球高齡化、多元共融（DEI）等趨勢下，無障礙概念從實體世界延伸至數位環境。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            在數位環境中，包含網站、應用程式、以及其他數位載體，都要能夠被「所有人」無障礙地訪問、獲得資訊及使用服務，這就是數位無障礙（digital accessibility）。
          </p>
          <br />
          <h2 id="WCAG" className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            面向世界的《WCAG》網頁內容無障礙指南
          </h2>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            World Wide Web Consortium（W3C）國際組織長期致力於制定網站的數位無障礙設計規範，其中網頁內容無障礙指南（Web Content Accessibility Guidelines, 簡稱 WCAG ）2.0 與 2.1 版本是現行全球廣泛採用的規範。而於 2023 年 10 月，WCAG 已更新至 2.2 版本。（以下內容將以 WCAG 指南作爲稱呼）。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            《WCAG》指南看似是一份龐大的指南文件，但我們可以將其想像成一顆大樹。樹幹由四大「原則」（principle）組成，分別是可感知
            （Perceivable）、可操作性（Operable）、理解性（Understandable）和穩健性（Robust）等數位無障礙的基礎方針；樹幹持續延伸的樹枝就是所謂的「指引」 (guideline) ，每個原則下有數組的指引；樹枝再細分的嫩枝稱為「成功準則」（success criteria），也是整份指南中最小的結構單位，提供開發與設計人員具體執行的作法與技術。此外，成功準則下依無障礙符合程度分
            為 A 為最低要求（must have）、AA 為應該達成（should have）及 AAA 為理想目標（good to have）。
          </p>
          <figure className="mx-0  w-full">
            <img
              src={p2}
              className="w-full h-auto"
              alt="《WCAG》指南架構概念。圖 / 自製"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            《WCAG》指南架構概念。圖 / 自製
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            《WCAG》指南作為眾多國家無障礙法案引用的規範，像是美國聯邦政府《Section 508》法案、加拿大《安大略省殘疾人士無障礙法（Accessibilityfor Ontarians with Disabilities Act, 簡稱 AODA）及歐洲技術標準《EN 301549》、台灣的《網站無障礙規範》及《APP 檢測指引》等。接著就帶大家了解吧！
          </p>
          <br />
          <Ellipsis className="w-full flex justify-center" color="#D9D9D9" />
          <br />
          <p id="VAPT" className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            數位產品的「無障礙程度說明書」：VAPT
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            VAPT，全名為「自願性產品輔助功能模板（Voluntary Product Accessibility Template）」。國際間倡議的作法是當企業組織釋出自家的數位產品時，通常會準備一份說明產品無障礙概況的標準化文件，也就是 VAPT。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            VPAT 通常會由數位無障礙專家（digital accessibility specialist）或顧問機構協助評估產品後編寫，其中描述產品功能對應 WCAG 指南的符合程度，就像是一本說明書，讓使用者了解數位產品無障礙能力及輔助技術（assistive technology）支援情況。
          </p>

          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            VPAT 不僅提升產品競爭力，更顯示企業重視人權，致力提供更友善、包容的產品體驗服務，而對使用者而言，能透明地了解產品數位無障礙能力狀況，從而更輕鬆地享有數位科技的權力。
          </p>
          <figure className="mx-0  w-full">
            <img
              src={p3}
              className="w-full h-auto"
              alt="VPAT 報告範例。圖 / Google"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            VPAT 報告範例。圖 / Google
          </p>
          <br />
          <Ellipsis className="w-full flex justify-center" color="#D9D9D9" />

          <br />
          <p id="conclusion" className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            結語
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            要實現對所有人包容的無障礙數位環境，需要持續的努力，從上述分享中，我們可以看到各機構努力實踐的階段性成果。對於台灣的產品團隊而言，建議將WCAG 指南作為設計與開發的葵花寶典，而在取得國內無障礙認證時，應遵循國內相關法規。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            最後，W3C 作為引領全球數位無障礙發展的國際組織，目前正如火如荼地編撰 WCAG 指南 3.0 版本，其中內容將涵蓋更多元的數位科技裝置，並針對 2.0版本的框架及評級制度進行優化。從這些層面的推進，就能感受到數位無障礙旨在讓所有人更能平等地參與、受惠、共享網際網路中浩瀚的資訊與知識。未來 W3C 將持續發佈無障礙相關消息，敬請關注。
          </p>
          <br />
          <Ellipsis className="w-full flex justify-center" color="#D9D9D9" />
          <br />
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            五月不僅有我們熟悉的母親節，在每年五月的第三個星期四，也就是今天，是全球無障礙體認日（Global Accessibility Awareness Day, 簡稱 GAAD），邀請你加入響應的行列，UXI Insight 將持續與你分享數位無障礙各式乾貨，與我們一同共游數位無障礙海吧！
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            如喜歡本篇分享，請盡情點擊文章下方的拍手按鈕 👏。如有其他回饋或討論，
            歡迎留言，與我們一起學習及互動。我是 UXI 的研究員 — Avery，我們下次
            見！
          </p>
          <figure className="mx-0 w-full">
            <img
              src={p4}
              className="w-full h-auto"
              alt="全球無障礙體認日。圖 / GAAD"
            />
          </figure>
          <p className="flex justify-center mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            全球無障礙體認日。圖 / GAAD
          </p>
          <figure className="mx-0 my-5 w-full">
            <img
              src={p5}
              className="w-full h-auto"
              alt="遊石logo"
            />
          </figure>
          <p className=" text-lg leading-8 max-sm:text-base max-sm:leading-7">
            ➤ 探索滿滿的 UXI Insight：https://medium.com/uxi-design

          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">

            ➤ UXI BAR 與你暢聊《設計之外》：https://reurl.cc/z1lmbN
          </p>

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
                <a href="/collection_knowledge" className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-110" style={{display: "none"}}>
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

export default informative_article_1;
