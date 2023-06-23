import React, { useState } from "react";
import Main from "../../components/Main/Main";
import Navigation from "../../components/Navigation/Navigation";
import EatCardPaymentPage from "../EatPaymentPage/EatPaymentPage";
import PointPurchasePage from "../PointPurchasePage/PointPurchasePage";
import ProductListPage from "../ProductListPage/ProductListPage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";


const MainPage = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setTab(tabIndex);
  };

  return (
    <>
      {tab === 1 && <EatCardPaymentPage />}
      {tab === 2 && <PointPurchasePage />}
      {tab === 3 && <ProductListPage />}
      {tab === 4 && <UserProfilePage />}

      <Main />
      <Navigation activeTab={tab} onTabChange={handleTabChange} />
    </>
  );
};

export default MainPage;
