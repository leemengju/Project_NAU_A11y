import ArrowRight from '../components/icons'
import informative_article_1_img from '../assets/home/informative_article_1.svg'
import informative_article_2_img from '../assets/home/informative_article_2.svg'
import informative_article_3_img from '../assets/home/informative_article_3.svg'
import informative_article_4_img from '../assets/home/informative_article_4.svg'
import AveryLin from "../assets/avatar/Avery_lin.jpg"
import Laurence from "../assets/avatar/Laurence.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';
import HighlightText from '../components/HighlightText';

const Collection_knowledge = () => {
  const navigate = useNavigate();
  const [searchKeywords, setSearchKeywords] = useState('');
  
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

  // 过滤文章
  const filteredArticles = articles.filter(article => 
    // 大小寫都能用
    article.title.toLowerCase().includes(searchKeywords.toLowerCase())
  );

  return (
    <>
      <main className="flex flex-col items-center w-full bg-[#F4F4F4] py-24">
        
        {/* knowledge_top */}
        <header className="flex flex-row justify-between items-center w-[1240px] max-lg:w-[600px] pb-10  max-sm:w-[320px] max-sm:flex-col max-sm:items-start max-sm:gap-2">
          {/* header_left */}
          <div className="flex flex-col gap-0.5 items-start ">
            <h2 className="w-full text-base font-bold leading-6 text-red-500 tracking-[2px]">
              Digital Accessibility Resources
            </h2>
            <h1 className=" w-full text-3xl leading-10 text-black font-[350]">
              知識補給
            </h1>
          </div>
          {/* header_right */}
          {/* <!-- 搜尋框 --> */}
          <form onSubmit={(e) => {
            e.preventDefault();
            // 这里可以添加搜索逻辑
            navigate(`/search?keywords=${searchKeywords}`);
          }}>
            <div className="flex flex-row w-[254px] px-4 py-1 justify-between items-center gap-2 rounded-[20px] border border-[#484848] bg-white max-sm:w-[300px]">
              <input 
                type="text" 
                name="keywords" 
                placeholder="搜尋文章" 
                value={searchKeywords}
                onChange={(e) => setSearchKeywords(e.target.value)}
                className="w-full outline-none"
              />
              <Search />
            </div>
          </form>
        </header>

        {/* knowledge_cardsRow */}
        <section className="flex flex-row flex-wrap justify-between gap-6 w-[1240px] max-lg:flex-col max-lg:items-center max-lg:w-full">
          {filteredArticles.map(article => (
            <article 
            onClick={() => window.location.href = article.link} 
            key={article.id}
              className="card flex flex-col rounded-2xl w-[600px] max-sm:w-[320px] max-sm:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* 卡片圖片 */}
              <figure className="w-full h-[340px] rounded-3xl shadow-lg max-sm:h-60 max-sm:shadow-none">
                <img
                  src={article.image}
                  alt="文章畫面"
                  className="w-full h-full object-cover rounded-[15px] max-sm:rounded-t-[15px]"
                />
              </figure>
              {/* 卡片文字內容 */}
              <div className="flex flex-col gap-3 px-5 pt-2.5 pb-1 h-fill max-sm:gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="pt-1 text-[20px] font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
                    <HighlightText text={article.title} highlight={searchKeywords} />
                  </h3>
                
                </div>
                {/* 作者與日期*/}
                <div className="flex flex-row items-center gap-2 max-sm:mt-2">
                  <img src={article.authorImg} alt={article.author} className="w-10 h-10 border-2 border-red-700 rounded-full" />
                  <div className="flex flex-row items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                    <p className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm">
                      {article.author}
                    </p>
                    <span className="text-base leading-5 font-[350] text-stone-700 max-sm:hidden">
                      •
                    </span>
                    <time dateTime={article.date} className="text-base leading-5 font-[350] text-stone-700 max-sm:text-sm max-sm:text-stone-500">
                      {article.date}
                    </time>
                  </div>
                </div>
                {/* 卡片文字_bottom */}
                <div className="pb-3">
                  <a href={article.link} className="flex items-center justify-end">
                    <span className="mr-1.5 text-base tracking-wider leading-5 font-[350] text-neutral-500">
                      繼續閱讀
                    </span>
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Collection_knowledge;