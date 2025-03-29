import React from "react";
import { ChevronLeft } from "lucide-react";
import p1 from "../assets/informative_article_1/p1.svg";
import p2 from "../assets/informative_article_1/p2.svg";
import p3 from "../assets/informative_article_1/p3.svg";
import p4 from "../assets/informative_article_1/p4.svg";
import p5 from "../assets/informative_article_1/p5.svg";




const informative_article_1 = () => {
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
          推開數位無障礙大門，輕鬆淺談數位無障礙規範
          </h1>
          <p className="mb-6 text-base tracking-wider leading-6 font-[350] text-stone-600 max-sm:text-sm max-sm:leading-5">
          數位無障礙是什麼？身為產品設計與開發者的我們，可以遵循哪些全球與在地規範呢？
          </p>
          <time dateTime="2024-10-28" className="text-base leading-5 font-[350] text-stone-700">
            2024-10-28
          </time>
        </header>
      ),
    },
    {
      type: "section",
      content: (
        <section className="px-0 py-5 bg-white rounded max-sm:p-4">
          <div className="mb-3.5">
            <p className="text-xs leading-5">
              <span>原文連結｜</span>
              <a href="https://medium.com/uxi-design/%E6%8E%A8%E9%96%8B%E6%95%B8%E4%BD%8D%E7%84%A1%E9%9A%9C%E7%A4%99%E5%A4%A7%E9%96%80-%E8%BC%95%E9%AC%86%E6%B7%BA%E8%AB%87%E6%95%B8%E4%BD%8D%E7%84%A1%E9%9A%9C%E7%A4%99%E8%A6%8F%E7%AF%84-a6b736c6a0f9" className="text-gray-900 " style={{ textDecoration: 'underline' }}>Medium 文章</a>
            </p>
          </div>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          在當今高度知識化的時代，人們無不仰賴科技與數位產品，它成為我們日常溝通、創造知識與共享一切的媒介。在乘著全球高齡化、多元共融（DEI）等趨勢下，無障礙概念從實體世界延伸至數位環境。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          在數位環境中，包含網站、應用程式、以及其他數位載體，都要能夠被「所有人」無障礙地訪問、獲得資訊及使用服務，這就是數位無障礙（digital accessibility）。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          面向世界的《WCAG》網頁內容無障礙指南
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          World Wide Web Consortium（W3C）國際組織長期致力於制定網站的數位無障礙設計規範，其中網頁內容無障礙指南（Web Content Accessibility Guidelines, 簡稱 WCAG ）2.0 與 2.1 版本是現行全球廣泛採用的規範。而於 2023 年 10 月，WCAG 已更新至 2.2 版本。（以下內容將以 WCAG 指南作爲稱呼）。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          《WCAG》指南看似是一份龐大的指南文件，但我們可以將其想像成一顆大樹。樹幹由四大「原則」（principle）組成，分別是可感知
（Perceivable）、可操作性（Operable）、理解性（Understandable）和穩健性（Robust）等數位無障礙的基礎方針；樹幹持續延伸的樹枝就是所謂的「指引」 (guideline) ，每個原則下有數組的指引；樹枝再細分的嫩枝稱為「成功準則」（success criteria），也是整份指南中最小的結構單位，提供開發與設計人員具體執行的作法與技術。此外，成功準則下依無障礙符合程度分
為 A 為最低要求（must have）、AA 為應該達成（should have）及 AAA 為理想目標（good to have）。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          《WCAG》指南作為眾多國家無障礙法案引用的規範，像是美國聯邦政府《Section 508》法案、加拿大《安大略省殘疾人士無障礙法（Accessibilityfor Ontarians with Disabilities Act, 簡稱 AODA）及歐洲技術標準《EN 301549》、台灣的《網站無障礙規範》及《APP 檢測指引》等。接著就帶大家了解吧！
          </p>
          <br />
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
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
          <br />
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          結語
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          要實現對所有人包容的無障礙數位環境，需要持續的努力，從上述分享中，我們可以看到各機構努力實踐的階段性成果。對於台灣的產品團隊而言，建議將WCAG 指南作為設計與開發的葵花寶典，而在取得國內無障礙認證時，應遵循國內相關法規。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          最後，W3C 作為引領全球數位無障礙發展的國際組織，目前正如火如荼地編撰 WCAG 指南 3.0 版本，其中內容將涵蓋更多元的數位科技裝置，並針對 2.0版本的框架及評級制度進行優化。從這些層面的推進，就能感受到數位無障礙旨在讓所有人更能平等地參與、受惠、共享網際網路中浩瀚的資訊與知識。未來 W3C 將持續發佈無障礙相關消息，敬請關注。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          五月不僅有我們熟悉的母親節，在每年五月的第三個星期四，也就是今天，是全球無障礙體認日（Global Accessibility Awareness Day, 簡稱 GAAD），邀請你加入響應的行列，UXI Insight 將持續與你分享數位無障礙各式乾貨，與我們一同共游數位無障礙海吧！
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          如喜歡本篇分享，請盡情點擊文章下方的拍手按鈕 👏。如有其他回饋或討論，
歡迎留言，與我們一起學習及互動。我是 UXI 的研究員 — Avery，我們下次
見！
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          ➤ 探索滿滿的 UXI Insight：https://medium.com/uxi-design
          ➤ UXI BAR 與你暢聊《設計之外》：https://reurl.cc/z1lmbN
          </p>
          
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            儘管存在細微的差異，無障礙設計、包容性設計、通用設計的初衷與本質是一致的。這三種設計都是希望幫助所有使用者，設計出好用、友善的數位產品。為了建立一個更加包容和多元化的社會，透過確保產品和服務對所有人都可用和可理解，我們能夠消除對於身體能力、年齡、技能或其他特殊需求的歧視和排斥。這不僅在個人層面上的尊重，也為社會創造了一個更加平等的環境。
          </p>
          <figure className="mx-0 my-5 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a388b96425c609a6710528344cde7ad4398e2195"
              className="w-full h-auto"
              alt="淺談包容性設計、通用設計與無障礙設計文章縮圖。「無障礙設計」聚焦於輔助身障與高齡使用者的使用情境；「通用設計」希望符合所有群體，盡可能讓特殊族群跟一般使用者可使用同樣行為達成目的；而「包容性設計」為有意識的考量使用群體的多樣性，不僅考量行動上的限制，也需考量使用上的心理情境。"
            />
          </figure>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            上圖中，在內圈的無障礙設計已經成為開發產品和實體服務的重要原則之一。無論身體上的限制、視覺或聽覺上的困難，或是技術能力的差異，每個人都應該能夠輕鬆地瀏覽網站、使用應用程式和參與數位互動。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            在開始建立無障礙之前，如果你在心中保有三個關鍵思維，往後在實踐無障礙的路上會更順利。
          </p>
          <h2 className="mx-0 mt-6 mb-2.5 text-lg font-bold leading-6 text-gray-900">
            建構無障礙產品是「整個團隊」的事
          </h2>
          <figure className="mx-0 my-5 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d374c7faf16bcc8f73b5f538a53f91809260e023"
              className="w-full h-auto"
              alt="產品開發流程簡圖：共六階段。第一階段、產品發想，集思廣益來構想產品概念。第二階段、產品定義，界定產品範疇與概念，完善產品策略。第三階段、原型設計，以原型來進行深入的評估、確認關鍵功能等。第四階段、驗證與測試，確認正式發佈前，每個面向的可行性。第五階段、產品開發，實際開發與逐步迭代。第六階段、測試與上線，品質測試與確認最終產品上線。"
            />
          </figure>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            有些團隊在不熟悉無障礙設計的情況下，會安排在產品後期導入無障礙，期待能一次性解決所有無障礙問題來取得標章。實際上，在產品上線前才投入無障礙，會花費許多資源與成本，加重團隊成員的負擔。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            理想中的情況是，在每個產品開發環節都導入與無障礙相關的步驟，這是無障礙成熟的團隊作法。在無障礙成熟之前，團隊成員需要嘗試不同方法將無障礙體驗融入產品開發流程，在達到目標的過程中形塑適應團隊協作的互動模式。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            <span>所謂的</span>
            <strong className="font-bold text-gray-900">無障礙「成熟」</strong>
            <span>
              是什麼呢？以當時 2010 年的 Responsive Web Design（響應式網站設計）為例。在響應式網站概念與應用的初期，Mobile First Approach
              （行動優先設計）對整個開發團隊帶來新改變、挫折與適應期，最終融入開發團隊的日常。十年多後的今天，網站響應使用者的螢幕設備已經成為基本要求。無障礙最終的「成熟」目標也是如此，將其融入日常程序，各個產品開發環節都考量到無障礙，最終無障礙會成為產品的其中一個面向。
            </span>
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            建構無障礙產品是各個職能一同協作、合作的過程，不單是前後端工程師，或是品質管理專家的職責。
          </p>
          <h2 className="mx-0 mt-6 mb-2.5 text-lg font-bold leading-6 text-gray-900">
            結語
          </h2>
          <blockquote className="pt-1 pr-0 pb-0 pl-4 mx-0 my-5 border-l border-solid border-l-[3px]">
            <p className="mb-1 text-lg leading-8 text-gray-900">
              無障礙是建立更平等的世界的關鍵。幾十年來，我們致力在開發和設計新技術時，參考身心障礙者的意見、專業知識和創意，設計出所有人都能使用的技術。
            </p>
            <cite className="text-lg leading-8 text-gray-700">蘋果執行長 Tim Cook</cite>
          </blockquote>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            <span>這些新技術幫助了許多人，一週前，蘋果再次推出新的</span>
            <a href="#" className="text-gray-900 underline">輔助技術</a>
            <span>
              。現在除了以語音輸入來打字，還能將輸入內容轉為語音。我們可以一邊使用放大鏡功能，一邊用手機辨識人事物、文字、符號和場景，甚至，在視訊的時候會有即時字幕支援。
            </span>
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            <strong className="font-bold text-gray-900">從同理心出發</strong>
            <span>，懷著無障礙的初衷，了解到數位無障礙是</span>
            <strong className="font-bold text-gray-900">全體開發團隊都需要一同參與</strong>
            <span>的面向，並且</span>
            <strong className="font-bold text-gray-900">擁抱成長心態來實踐</strong>
            <span>，這是在打造無障礙產品前，我們需要保有的思維。</span>
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            掌握以上三大關鍵後，希望讓你與無障礙的距離更近了一步。接下來，我們會從設計與研究的角度出發，讓你了解身為產品設計師或設計研究員，能夠做什麼事情來幫助實踐數位無障礙。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            Let's do it!
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
    </>
  );
};

export default informative_article_1;
