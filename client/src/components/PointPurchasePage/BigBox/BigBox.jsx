import React from "react";

import "./BigBox.scss";
import point_img from "../../../assets/Images/money.png";
import point_img3 from "../../../assets/Images/money2.png";
import point_img2 from "../../../assets/Images/coupon.png";
import checked_img from "../../../assets/Images/check.png";
import unchecked_img from "../../../assets/Images/uncheck.png";

export const PointPurchaseListBigBox = ({
  price,
  point,
  discount,
  checked,
  handler,
}) => {
  return (
    <div
      className={`big_size_box flex flex-col transition-colors ${
        checked ? "checked" : "unchecked "
        // checked ? "bg-blue-900" : "bg-gray-400"
      }`}
      onClick={handler}
    >
      <div className="img flex items-center justify-center">
        <img src={`${discount === "" ? point_img3 : point_img2}`} alt="point" />
      </div>
      <div className="text flex flex-col items-center justify-center">
        <span className="price">₩{price}</span>
        {discount !== "" && <span className="point_original">{price}P</span>}
        <span className="point">{point}P</span>
      </div>

      {discount !== "" && (
        <div className="absolute discount">{discount} 추가 적립</div>
      )}

      <div className="checkBox">
        {checked && <img src={checked_img} alt="unchecked" />}
        {!checked && <img src={unchecked_img} alt="unchecked" />}
      </div>
    </div>
  );
};
