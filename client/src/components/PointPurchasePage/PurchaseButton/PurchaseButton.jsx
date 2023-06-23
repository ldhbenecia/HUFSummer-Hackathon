import React from "react";

import "./PurchaseButton.scss";

export const PointPurchaseButton = ({ price, point, checked }) => {
  return (
    <>
      {checked && (
        <div className="pointPurchaseButton animate-barcodeMove shadow-md">
          <span>₩{price}원 결제하기</span>
        </div>
      )}
    </>
  );
};
