import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout_inline from "../layout/Layout_inline";
import Layout_home from "../layout/Layout_home";
import Collection_knowledge from "../views/Collection_knowledge";
import Collection_workshop from "../views/Collection_workshop";
import Home from "../views/Home";
import Informative_article_1 from "../views/Informative_article_1";
import Informative_article_2 from "../views/Informative_article_2";
import Informative_article_3 from "../views/Informative_article_3";
import Informative_article_4 from "../views/Informative_article_4";
import Workshop_article_1 from "../views/Workshop_article_1";
import Workshop_article_2 from "../views/Workshop_article_2";


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
          <Route path="informative_article_1" element={<Informative_article_1 />} />
          <Route path="informative_article_2" element={<Informative_article_2 />} />
          <Route path="informative_article_3" element={<Informative_article_3 />} />
          <Route path="informative_article_4" element={<Informative_article_4 />} />
          <Route path="workshop_article_1" element={<Workshop_article_1 />} />
          <Route path="workshop_article_2" element={<Workshop_article_2 />} /> 
      
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;

