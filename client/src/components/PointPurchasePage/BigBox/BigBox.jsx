import React from "react";

import "./BigBox.scss";
import point_img from "../../../assets/Images/money.png";
import checked_img from "../../../assets/Images/check.png";
import unchecked_img from "../../../assets/Images/uncheck.png";

export const PointPurchaseListBigBox = ({
  price,
  point,
  discount,
  checked,
}) => {
  return (
    <div
      className={`big_size_box flex flex-col ${
        checked ? "checked" : "unchecked"
      }`}
    >
      <div className="img flex items-center justify-center">
        <img src={point_img} alt="point" />
      </div>
      <div className="text flex flex-col items-center justify-center">
        <span className="price">{price}</span>
        <span className="point">{point}</span>
      </div>

      {discount !== "" && (
        <div className="absolute discount">{discount} 추가 적립</div>
      )}

      <div className="checkBox">
        {/* <img src={checked_img} alt="checked" /> */}
        <img src={unchecked_img} alt="unchecked" />
      </div>
    </div>
  );
};
