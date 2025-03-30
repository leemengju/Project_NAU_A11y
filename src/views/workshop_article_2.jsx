import React from "react";
import { ChevronLeft } from "lucide-react";
import p1 from "../assets/workshop_article_2/p1.svg";
import p2 from "../assets/workshop_article_2/p2.svg";

const Workshop_article_2 = () => {
  const articleContent = [
    {
      type: "header",
      content: (
        <header className="mb-16">
          <h4 onClick={() => window.location.href = '/collection_workshop'} className=" flex flex-row items-center gap-1 mb-1.5 text-xl font-medium tracking-wide text-stone-700 max-sm:text-md max-sm:leading-9 underline">

            <ChevronLeft />
            回到文章彙總
          </h4>
          <h1 className="mb-1.5 text-3xl font-bold tracking-wide leading-10 text-stone-700 max-sm:text-2xl max-sm:leading-9">
            體驗工作坊分享文：包容不卡卡
          </h1>

          <time dateTime="2024-11-20" className="text-base leading-5 font-[350] text-stone-700">
            2024-11-20
          </time>
        </header>
      ),
    },
    {
      type: "section",
      content: (
        <section className="px-0 py-5 bg-white rounded max-sm:p-4">

          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            數位無障礙常被認為遙不可及，或者與日常生活無關。但事實
            上，它早已融入我們的數位日常，只是我們未曾特別留意而已！
            因此，在「包容不卡卡」體驗工作坊中，我們透過輕鬆有趣的卡
            牌互動，採取最平易近人的方式，帶領大家探索數位無障礙的核
            心思維與基礎知識。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            整場工作坊的設計圍繞著兩大核心提問展開。我們以實際行動和
            創新的設計，逐步回應這些問題。現在，讓我們一起來看看，我
            們是如何做到的吧！
          </p>
          <p className="text-red-500 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            Q: 如何設身處地同理不同於自身狀態的使用者？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            為了讓同理心不僅停留於「想像」，而是能真正實現感受與理
            解，我們設計了一個模擬體驗環節，帶領學員切身體驗他人面臨
            的挑戰。透過虛擬角色視覺化、體驗道具、狀態卡等多樣化的工
            具，學員能更直觀地感受到他人的困難，從而深化對他人需求的
            理解。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            藉由沉浸式的體驗，學員能夠超越主觀感知的侷限，從具象的體
            驗感受開始，逐漸放下對障礙群體的預設與偏見，進一步建立起
            尊重與包容的態度。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            我們觀察到學員以多樣的方式投入體驗，展現對過程的深入思
            考。不論是以繪畫的形式表達他們的感受，還是嘗試飾演障礙群
            體的虛擬角色，學員們都積極地與工具互動，努力從他人的視角
            重新審視日常事物的設計與使用。在分享環節中，我們也看見學
            員充分展現了體驗帶來的啟發，展現了由同理心驅動的行動力與
            支持意識。
          </p>
          <p className="text-red-500 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            Q: 如何向學員傳遞：「我們以解決特定群體的需求為出發點，但
            設計的成果能讓更廣泛的使用者受益」的核心思維？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            Q: 如何向學員傳遞：「我們以解決特定群體的需求為出發點，但
            設計的成果能讓更廣泛的使用者受益」的核心思維？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            在案例分享階段，我們引入了多個真實且具啟發性的成功設計案
            例。除了廣為人知的「坡道效應」，我們還分享了在日常中常見
            卻容易忽略的案例，展示專注於特定需求的設計如何意外地拓展
            其受益範圍。這些案例讓學員直觀地體會到：解決一小群人的挑
            戰，可能成為改善更多人生活的契機。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            在實作環節，我們結合靈感發想活動與探索數位輔助技術的「靈
            感倉庫」。學員在活動中發現，同一種數位輔助技術往往能靈活
            應用於不同類型或程度的障礙群體，並有效解決他們的需求。在
            回顧分享中，學員透過實作環節，體會到數位無障礙設計帶來的
            雙重效益：解決特定問題並同時創造更大的包容性價值。最終，
            我們希望透過這次體驗，讓學員帶著這份同理心與設計思維，將
            其融入他們未來的工作中。
          </p>
          <figure className="mx-0 my-5 w-full">
            <img
              src={p1}
              className="w-full h-auto"
              alt=" 在實作環節，我們結合靈感發想活動與探索數位輔助技術的「靈
感倉庫」。"
            />
          </figure>

          <p className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            結語
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            透過「包容不卡卡」體驗工作坊，我們不僅讓學員深入體會到數
            位無障礙的重要性，也啟發他們在實際設計中如何以同理心為基
            礎，創造既能解決特定需求、又能讓更多人受益的解決方案。我
            們相信，數位無障礙不僅僅是一種技術或標準，更是一種促進包
            容與平等的核心價值。
          </p>

          <figure className="mx-0 my-5 w-full">
            <img
              src={p2}
              className="w-full h-auto"
              alt=" 我們相信，數位無障礙不僅僅是一種技術或標準，更是一種促進包
容與平等的核心價值。"
            />
          </figure>

          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
            遊石設計專注於數位無障礙服務，從設計系統無障礙審核、障礙
            族群用戶研究、數位無障礙設計知識培育到專業的顧問輔導，提
            供全方位的支持，幫助您將無障礙設計融入產品與服務的每一個
            環節。如果您對數位無障礙設計有興趣或需要專業協助，歡迎聯
            繫我們，一起為包容的未來努力！
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
    </>
  );
};

export default Workshop_article_2;
