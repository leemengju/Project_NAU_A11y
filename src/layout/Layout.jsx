import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
    <div className="flex flex-col">

      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
};

export default Layout;