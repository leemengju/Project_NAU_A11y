
import ArrowRight from '../components/icons'
import workshop_article_1_img from '../assets/home/workshop_article_1.svg'
import workshop_article_2_img from '../assets/home/workshop_article_2.svg'
import AveryLin from "../assets/avatar/Avery_lin.jpg"
import { useState } from 'react';
import { Search } from 'lucide-react';
import HighlightText from '../components/HighlightText';
import {useNavigate} from 'react-router-dom';

const Collection_workshop = () => {
 const navigate = useNavigate();
 const [searchKeywords,setSearchKeywords] = useState('');
  

//  文章數據
const articles = [
  {
    id: 1,
    title: "數位無障礙設計：遊石設計企業內訓",
    author: "Avery Lin",
    authorImg: AveryLin,
    date: "2024-11-20",
    image: workshop_article_1_img,
    link: "/workshop_article_1"
  },
  {
    id: 2,
    title: "無障礙設計工作坊：台灣設計研究院",
    author: "Avery Lin",
    authorImg: AveryLin,
    date: "2024-11-15",
    image: workshop_article_2_img,
    link: "/workshop_article_2"
  },
]


// 過濾文章
const  filteredArticles= articles.filter(article=>
  article.title.toLowerCase().includes(searchKeywords.toLowerCase())
)

  return (
    <>
      <main className="flex flex-col items-center w-full bg-[#F4F4F4] py-24">
        {/* knowledge_top */}
        <header className="flex flex-row justify-between items-center w-[1240px] max-lg:w-[600px] pb-10  max-sm:w-[320px] max-sm:flex-col max-sm:items-start max-sm:gap-2">
          {/* header_left */}
          <div className="flex flex-col gap-0.5 items-start ">
            <h2 className="w-full text-base font-bold leading-6 text-red-500 tracking-[2px]">
            Solutions and Services
            </h2>
            <h1 className=" w-full text-3xl leading-10 text-black font-[350]">
            共創實績
            </h1>
          </div>
          {/* header_right */}
          {/* <!-- 搜尋框 --> */}
          <form onSubmit={(e)=>{
           e.preventDefault();
           navigate(`/search?keywords=${searchKeywords}`);
          }}>
        
          <div className="flex flex-row w-[254px] px-4 py-1 justify-between items-center gap-2 rounded-[20px] border border-[#484848]  bg-white max-sm:w-[300px]">
            <input type="text" 
            name="keywords" 
            placeholder="搜尋文章"
            value={searchKeywords}
          onChange={(e)=>setSearchKeywords(e.target.value)}
            className="w-full outline-none " />
            <Search />
          </div>
         

          </form>
        </header>

        {/* knowledge_cardsRow */}
        <section className=" flex flex-row flex-wrap justify-between gap-4 w-[1240px]  max-lg:flex-col max-lg:items-center  max-lg:w-full  ">
        {filteredArticles.map(article => (
            <article 
              key={article.id}
              onClick={() => window.location.href = article.link} 
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
                <h3 className="pt-1 text-[20px] font-bold tracking-wider leading-6 text-stone-700 max-sm:text-[16px]">
                  <HighlightText text={article.title} highlight={searchKeywords} />
                </h3>
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
                  <a href="#" className="flex items-center justify-end">
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

export default Collection_workshop;