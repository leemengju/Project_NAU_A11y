import mission_pics from '../assets/home/mission.svg'
import banner from '../assets/home/banner.svg'
import toolkits from '../assets/home/toolkits.svg'
import ArrowRight, { ArrowRightWithStroke } from '../components/icons'

const Home = () => {
  return (
    <>

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
      {/* knowledge_top */}
      <section className="flex flex-col items-center w-full bg-zinc-100">
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
          <a href="#" className="flex items-center cursor-pointer">
            <span className="pr-2.5 text-lg leading-7 text-stone-600 tracking-[2.4px]">
              more
            </span>
            <ArrowRightWithStroke />
          </a>
        </section>

        {/* knowledge_cardsRow */}

        <section className="border border-red-500 flex flex-row gap-4 py-4 w-[732px] max-sm:flex-col max-sm:px-9 max-sm:justify-center max-sm:w-[390px] ">
          <article className="border border-red-500 card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] ">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcff2beea473cf67d8f43a14fa15b4f7ffd1267b"
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
          <article className="border border-red-500 card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] ">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcff2beea473cf67d8f43a14fa15b4f7ffd1267b"
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
          <article className="border border-red-500 card flex flex-col justify-center items-start bg-white rounded-2xl shadow-lg w-[234px] max-sm:w-[320px] ">
            <figure className="w-full h-36 rounded-3xl max-sm:h-60">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcff2beea473cf67d8f43a14fa15b4f7ffd1267b"
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
        
        </section>
      </section>
      {/* toolkits */}
    </>
  );
};

export default Home;