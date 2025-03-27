
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import Blogs from "../views/Blogs";
import Home from "../views/Home";

// Code Splitting，減少JS初次載入大小
// const Layout = lazy(() => import("../layout/Layout"));
// const Blogs = lazy(() => import("../views/Blogs"));
// const Home = lazy(() => import("../views/Home"));

 function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;

