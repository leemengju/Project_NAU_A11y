
import ArrowRight from '../components/icons'
import article_1 from '../assets/home/article_1.svg'
import article_2 from '../assets/home/article_2.svg'
import article_3 from '../assets/home/article_3.svg'
import AveryLin from "../assets/avatar/Avery_lin.jpg"
import Laurence from "../assets/avatar/Laurence.png"

const Collection_knowledge = () => {
  return (
    <>
      <main className="flex flex-col items-center w-full bg-[#F4F4F4] py-24">
        
        {/* knowledge_top */}
        <header className="flex flex-col gap-0.5 items-start w-[1240px] max-lg:w-[600px] pb-10  max-sm:w-[320px] ">
          <h2 className="w-full text-base font-bold leading-6 text-red-500 tracking-[2px]">
            Digital Accessibility Resources
          </h2>
          <h1 className=" w-full text-3xl leading-10 text-black font-[350]">
            知識補給
          </h1>
        </header>

        {/* knowledge_cardsRow */}
        <section className=" flex flex-row flex-wrap justify-between gap-6 w-[1240px]  max-lg:flex-col max-lg:items-center  max-lg:w-full  ">


          <article onClick={() => window.location.href = "/informative_article_1"} className=" card flex flex-col  rounded-2xl  w-[600px] max-sm:w-[320px] max-sm:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            {/* 卡片圖片 */}
            <figure className="w-full h-[340px] rounded-3xl shadow-lg max-sm:h-60 max-sm:shadow-none">
              <img
                src={article_1}
                alt="文章畫面"
                className="w-full h-full object-cover rounded-[15px]  max-sm:rounded-t-[15px] "
              />
            </figure>
            {/* 卡片文字內容 */}
            <div className="flex flex-col gap-3 px-5 pt-2.5 pb-1 h-fill max-sm:gap-1">
              <h3 className="pt-1 text-[20px]  font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
                推開數位無障礙大門，輕鬆淺談數位無障礙規範
              </h3>
               {/* 作者與日期*/}
              <div className="flex flex-row items-center gap-2 max-sm:mt-2">
                <img src={AveryLin} alt="Avery Lin" className="w-10 h-10 border-2 border-red-700 rounded-full" />
                <div className="flex flex-row items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                  <p className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm">
                    Avery Lin
                  </p>
    
                <span className="text-base leading-5 font-[350] text-stone-700 max-sm:hidden">
                  •
                </span>
                <time dateTime="2024-10-28" className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm max-sm:text-stone-500">
                  2024-10-28
                </time>
                </div>
              </div>
              {/* 卡片文字_bottom */}
              <div className="pb-3">

                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>
          <article onClick={() => window.location.href = "/informative_article_2"} className=" card flex flex-col  rounded-2xl  w-[600px] max-sm:w-[320px] max-sm:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            {/* 卡片圖片 */}
            <figure className="w-full h-[340px] rounded-3xl shadow-lg max-sm:h-60 max-sm:shadow-none">
              <img
                src={article_2}
                alt=""
                className="w-full h-full object-cover rounded-[15px]  max-sm:rounded-t-[15px] "
              />
            </figure>
            {/* 卡片文字內容 */}
            <div className="flex flex-col gap-3 px-5 pt-2.5 pb-1 h-fill max-sm:gap-1">
              <h3 className="pt-1 text-[20px]  font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
                如何建立數位無障礙的三大思維觀念?
              </h3>
                 {/* 作者與日期*/}
                 <div className="flex flex-row items-center gap-2 max-sm:mt-2">
                <img src={AveryLin} alt="Avery Lin" className="w-10 h-10 border-2 border-red-700 rounded-full" />
                <div className="flex flex-row items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                  <p className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm">
                    Avery Lin
                  </p>
    
                <span className="text-base leading-5 font-[350] text-stone-700 max-sm:hidden">
                  •
                </span>
                <time dateTime="2024-10-28" className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm max-sm:text-stone-500">
                  2024-10-28
                </time>
                </div>
              </div>
              {/* 卡片文字_bottom */}
              <div className=" pb-3">

                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>

          </article>
          <article onClick={() => window.location.href = "/informative_article_3"} className=" card flex flex-col  rounded-2xl  w-[600px] max-sm:w-[320px] max-sm:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            {/* 卡片圖片 */}
            <figure className="w-full h-[340px] rounded-3xl shadow-lg max-sm:h-60 max-sm:shadow-none">
              <img
                src={article_3}
                alt=""
                className="w-full h-full object-cover rounded-[15px]  max-sm:rounded-t-[15px] "
              />
            </figure>
            {/* 卡片文字內容 */}
            <div className="flex flex-col gap-3 px-5 pt-2.5 pb-1 h-fill max-sm:gap-1">
              <h3 className="pt-1 text-[20px]  font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
                無障礙案例分享：電動遊戲如何無障礙?
              </h3>
               {/* 作者與日期*/}
               <div className="flex flex-row items-center gap-2 max-sm:mt-2">
                <img src={Laurence} alt="Laurence" className="w-10 h-10 border-2 border-red-700 rounded-full" />
                <div className="flex flex-row items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                  <p className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm">
                  Laurence
                  </p>
    
                <span className="text-base leading-5 font-[350] text-stone-700 max-sm:hidden">
                  •
                </span>
                <time dateTime="2024-10-28" className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm max-sm:text-stone-500 ">
                  2024-10-28
                </time>
                </div>
              </div>
              {/* 卡片文字_bottom */}
              <div className="pb-3">

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
      </main>

    </>
  );
};

export default Collection_knowledge;