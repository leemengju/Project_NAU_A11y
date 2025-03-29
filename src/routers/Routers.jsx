
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout_inline from "../layout/Layout_inline";
import Layout_home from "../layout/Layout_home";
import Collection_knowledge from "../views/Collection_knowledge";
import Collection_workshop from "../views/Collection_workshop";
import Home from "../views/Home";

// Code Splitting，減少JS初次載入大小
// const Layout = lazy(() => import("../layout/Layout"));
// const Blogs = lazy(() => import("../views/Blogs"));
// const Home = lazy(() => import("../views/Home"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout_home />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="/" element={<Layout_inline />}>
          <Route path="collection_knowledge" element={<Collection_knowledge />} />
          <Route path="collection_workshop" element={<Collection_workshop />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;

