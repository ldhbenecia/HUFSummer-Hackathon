import React from "react";
import javabook from "../../assets/Images/javabook.jpeg";
import dumbel from "../../assets/Images/dumbel.jpeg";
import lgcpu from "../../assets/Images/lgcpu.jpeg";
import hdex from "../../assets/Images/hdex.jpeg";

const ProductList = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-2 mt-16 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
          <img
            src={javabook}
            alt="javabook"
            className="w-24 h-24 rounded-lg mr-4"
          ></img>
          <div className="flex flex-col justify-around h-full">
            <h3 className="text-lg font-medium">명품 자바 프로그래밍</h3>
            <p className="text-sm text-gray-600">기숙사 A동</p>
            <p className="text-sm text-black font-semibold">33,000 포인트</p>
          </div>
        </div>

        <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
          <img
            src={dumbel}
            alt="dumbel"
            className="w-24 h-24 rounded-lg mr-4"
          ></img>
          <div className="flex flex-col justify-around h-full">
            <h3 className="text-lg font-medium">양손 아령</h3>
            <p className="text-sm text-gray-600">기숙사 B동</p>
            <p className="text-sm text-black font-semibold">30,000 포인트</p>
          </div>
        </div>

        <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
          <img
            src={lgcpu}
            alt="lgcpu"
            className="w-24 h-24 rounded-lg mr-4"
          ></img>
          <div className="flex flex-col justify-around h-full">
            <h3 className="text-lg font-medium">LG 올인원 컴퓨터</h3>
            <p className="text-sm text-gray-600">기숙사 C동</p>
            <p className="text-sm text-black font-semibold">110,000 포인트</p>
          </div>
        </div>

        <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
          <img
            src={hdex}
            alt="hdex"
            className="w-24 h-24 rounded-lg mr-4"
          ></img>
          <div className="flex flex-col justify-around h-full">
            <h3 className="text-lg font-medium">에이치덱스 크롭탑</h3>
            <p className="text-sm text-gray-600">기숙사 A동</p>
            <p className="text-sm text-black font-semibold">20,000 포인트</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
