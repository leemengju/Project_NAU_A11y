
import ArrowRight from '../components/icons'
import article_4 from '../assets/home/article_4.svg'
import article_5 from '../assets/home/article_5.svg'


const Collection_workshop = () => {
  return (
    <>
      <main className="flex flex-col items-center w-full bg-[#F4F4F4] py-24">
        {/* knowledge_top */}
        <header className="flex flex-col gap-0.5 items-start w-[1240px] max-lg:w-[600px] pb-10  max-sm:w-[320px] ">
          <h2 className="w-full text-base font-bold leading-6 text-red-500 tracking-[2px]">
          Solutions and Services
          </h2>
          <h1 className=" w-full text-3xl leading-10 text-black font-[350]">
          共創實績
          </h1>
        </header>

        {/* knowledge_cardsRow */}
        <section className=" flex flex-row flex-wrap justify-between gap-4 w-[1240px]  max-lg:flex-col max-lg:items-center  max-lg:w-full  ">
          

          <article onClick={()=>window.location.href="/workshop_article_1"} className=" card flex flex-col  rounded-2xl  w-[600px] max-sm:w-[320px] max-sm:shadow-lg transform transition-transform duration-300 hover:scale-105">
            {/* 卡片圖片 */}
            <figure className="w-full h-[340px] rounded-3xl shadow-lg max-sm:h-60 max-sm:shadow-none">
              <img
                src={article_4}
                alt=""
                className="w-full h-full object-cover rounded-[15px]  max-sm:rounded-t-[15px] "
              />
            </figure>
            {/* 卡片文字內容 */}
            <div className="flex flex-col gap-4 px-5 pt-2.5 pb-0 h-[124px] max-sm:gap-0">
              <h3 className="pt-1 text-[20px]  font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
              數位無障礙設計：遊石設計企業內訓
              </h3>
              <div className="max-sm:pt-5 pb-3">
                <a href="#" className="flex items-center justify-end">
                  <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                    繼續閱讀
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          </article>
          <article onClick={()=>window.location.href="/workshop_article_2"} className=" card flex flex-col  rounded-2xl  w-[600px] max-sm:w-[320px] max-sm:shadow-lg transform transition-transform duration-300 hover:scale-105">
            {/* 卡片圖片 */}
            <figure className="w-full h-[340px] rounded-3xl shadow-lg max-sm:h-60 max-sm:shadow-none">
              <img
                src={article_5}
                alt=""
                className="w-full h-full object-cover rounded-[15px]  max-sm:rounded-t-[15px] "
              />
            </figure>
            {/* 卡片文字內容 */}
            <div className="flex flex-col gap-4 px-5 pt-2.5 pb-0 h-[124px] max-sm:gap-0">
              <h3 className="pt-1 text-[20px]  font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
              體驗工作坊分享文：包容不卡卡桌遊
              </h3>
              <div className="max-sm:pt-5 pb-3">
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

export default Collection_workshop;