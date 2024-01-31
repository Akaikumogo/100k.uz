import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AloqaUchun from "./pages/Aloqa_uchun";
import BizHaqimizda from "./pages/Biz_haqimizda";
import Ommaviy from "./pages/Ommaviy";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail";
import CategoryProduct from "./pages/CategoryProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/aloqa_uchun" element={<AloqaUchun />} />
          <Route path="/biz_haqimizda" element={<BizHaqimizda />} />
          <Route path="/privacy-policy" element={<Ommaviy />} />
          <Route
            path="/:category"
            element={<CategoryProduct />}
            // errorElement={<ErrorPage />}
          />
          <Route
            path="/:category/:id"
            element={<Detail />}
            // errorElement={<ErrorPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
