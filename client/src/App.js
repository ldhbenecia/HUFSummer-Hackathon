import React from "react";
import "../src/styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import SignInPage from "./pages/Auth/SignInPage";
import PointPurchasePage from "./pages/PointPurchasePage/PointPurchasePage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="relative top-0 h-full overflow-hidden">
      <div className="flex md:flex-col w-full max-w-lg justify-between items-center md:mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/pointpurchase" element={<PointPurchasePage />} />
            <Route path="/productlist" element={<ProductListPage />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
