import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar_inline";
import Footer from "./footer";
import { useState, useEffect } from "react";

const Layout_inline = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 獲取文檔高度和窗口高度
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const footerHeight = document.querySelector("#footer")?.offsetHeight || 0;
      const scrollLimit = documentHeight - windowHeight - footerHeight + 60;
      
      // 顯示回到頂部按鈕的條件
      if (window.scrollY > window.innerHeight) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      // 限制滾動到footer上方60px
      if (window.scrollY >= scrollLimit) {
        window.scrollTo(0, scrollLimit);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div className="flex flex-col">
      <Navbar/>
      <Outlet/>
      <Footer id="footer"/>
      
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed border-1 border-white bottom-[60px] right-[60px] bg-[#5F5858] hover:bg-[#5F5858] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 z-50"
          aria-label="回到頂部"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round"  d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
    </>
  )
};

export default Layout_inline;