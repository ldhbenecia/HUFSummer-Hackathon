import React, { useEffect, useRef, useState } from "react";
import barcode from "../../assets/Images/barcode.jpg";

import { EatCardPaymentHeader } from "./Header/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./EatCardPayment.scss";

const EatCardPayment = () => {
  const [selectedMenu, setSelectedMenu] = useState("저녁");
  const [showPayment, setShowPayment] = useState(false);

  // const handleMenuClick = (menu) => {
  //   setSelectedMenu(menu);
  //   setShowPayment(false);
  // };

  const handlePaymentClick = () => {
    setShowPayment(true);
  };

  const wrapperRef = useRef();
  const wrapperRef2 = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    console.log("click");
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setShowPayment(false);
    }
    if (wrapperRef2 && !wrapperRef2.current.contains(event.target)) {
      setShowPayment(false);
    }
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="flex justify-end p-6" ref={wrapperRef}>
        <AccountCircleIcon sx={{ "font-size": "35px" }} />
      </div>
      <EatCardPaymentHeader />
      <section
        className="flex text-gray-600 body-font animate-appear"
        ref={wrapperRef2}
      >
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white shadow-md bg-opacity-75 px-8 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  기숙사 식당 메뉴
                </h2>
                {/* <div className="flex justify-center mb-3">
                  <button
                    className={`text-sm px-4 py-2 mr-2 rounded animate-appear ${
                      selectedMenu === "아침"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() => handleMenuClick("아침")}
                  >
                    아침
                  </button>
                  <button
                    className={`text-sm px-4 py-2 rounded animate-appeaR ${
                      selectedMenu === "점심"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() => handleMenuClick("점심")}
                  >
                    점심
                  </button>
                  <button
                    className={`text-sm px-4 py-2 ml-2 rounded animate-appear ${
                      selectedMenu === "저녁"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() => handleMenuClick("저녁")}
                  >
                    저녁
                  </button>
                </div> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 animate-appear">
                  {selectedMenu}
                </h1>
                {selectedMenu === "아침" && (
                  <p className="leading-relaxed mb-3 min-w-[270px] animate-appear">
                    홍합무국
                    <br /> 베이컨구이
                    <br /> 쌀밥/배추김치
                    <br /> 마시는요거트/토스트/잼
                    <br /> 초코첵스&후레이크
                    <br /> 우유&주스
                    <br /> 샐러드&드레싱
                  </p>
                )}
                {selectedMenu === "점심" && (
                  <p className="leading-relaxed mb-3 min-w-[270px] animate-appear">
                    돈육짜글이찌개
                    <br /> 쌀밥
                    <br /> 언양식불고기
                    <br /> 꽈리고추멸치볶음
                    <br /> 얼갈이겉절이
                    <br /> 배추김치
                    <br /> 요구르트
                  </p>
                )}
                {selectedMenu === "저녁" && (
                  <p className="leading-relaxed mb-3 min-w-[270px] animate-appear">
                    {/* 치즈김치볶음밥
                    <br /> 계란후라이
                    <br /> 유부우동장국
                    <br /> 야채핫바/케찹
                    <br /> 브로커리무침
                    <br /> 배추김치
                    <br /> 쥬시쿨 */}
                    치즈김치볶음밥, 계란후라이, 유부우동장국, 야채핫바/케찹,
                    브로커리무침, 배추김치,
                    <br /> 쥬시쿨
                  </p>
                )}
                <p className="text-indigo-500 inline-flex items-center animate-appear">
                  {/* <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg> */}
                  4,900원
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mt-16 ">
        {!showPayment && (
          <button
            className="bg-gray-500 text-white mt-10 px-10 py-3 animate-appear rounded-2xl"
            onClick={handlePaymentClick}
          >
            결제 하기
          </button>
        )}
        {showPayment && (
          <div className="fixed bottom-0 z-10 bg-white p-5 rounded-t-3xl barcode_shadow animate-barcodeMove">
            <img src={barcode} alt="결제 바코드" className="p-5" />
            <p className="flex flex-row justify-between">
              <span>사용자: 전승재</span>
              <span>잔액: 24300P</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EatCardPayment;
