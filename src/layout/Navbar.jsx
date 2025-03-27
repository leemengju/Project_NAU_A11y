import "../index.css";
import logo from "../assets/layout/LoGO_L.svg";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
      <>
        <nav className="bg-[#1A1313] flex justify-between items-center px-4 py-2 top-0 left-0 right-0 z-10 h-[80px] w-full lg:px-8 lg:py-4 md:px-6 md:py-3 sm:px-4 sm:py-2" aria-label="主導航">
          <div className="flex items-center">
            <img src={logo} alt="公司網站標誌logo" className="" />
          </div>
          <Button className="rounded-full p-5 bg-[#DC3545]  font-[600] text-xl max-lg:text-md max-md:text-sm  max-md:p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#D63C3D] hover:to-[#7A31C1]  " aria-label="聯繫我們按鈕" >
            <span className="text-white font-semibold">聯繫我們</span>
          </Button>
        </nav>
      </>
    )
  };
  
  export default Navbar;