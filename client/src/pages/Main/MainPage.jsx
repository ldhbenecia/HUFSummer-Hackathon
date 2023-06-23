import React, { useState } from "react";
import SignInPage from "../Auth/SignInPage";
import PointPurchagePage from "../PointPurchasePage/PointPurchasePage";
import Navigation from "../../components/Navigation/Navigation.jsx";
import EatCardPaymentPage from "../EatCardPaymentPage/EatCardPaymentPage";
import ProductListPage from "../ProductListPage/ProductListPage";
import "./MainPage.scss";

const MainPage = () => {
  const [loginState, setLoginState] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    setLoginState(true);
  };

  const [tabIdx, setTabIdx] = useState(0);

  return (
    <>
      {loginState ? (
        <>
          <div>
            {tabIdx === 0 && <ProductListPage />}
            {tabIdx === 1 && <PointPurchagePage />}
            {tabIdx === 2 && <EatCardPaymentPage />}
          </div>

          <Navigation tabIdx={tabIdx} setTabIdx={setTabIdx} />
        </>
      ) : (
        <SignInPage loginHandler={loginHandler} />
      )}
    </>
  );
};

export default MainPage;
