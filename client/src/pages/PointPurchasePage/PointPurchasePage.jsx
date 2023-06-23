import { PointPurchaseButton } from "components/PointPurchasePage/PurchaseButton/PurchaseButton";
import React, { useState } from "react";
import PointPurchaseList from "../../components/PointPurchaseList/PointPurchaseList";

import "./PointPurchagePage.scss";

const PointPurchasePage = () => {
  const [point, setpoint] = useState(0);
  const [price, setprice] = useState(0);
  const [checked, setchecked] = useState(false);

  return (
    <div className="pb-10 relative">
      <PointPurchaseList setchecked={setchecked} setprice={setprice} />
      <PointPurchaseButton checked={checked} point={point} price={price} />
    </div>
  );
};

export default PointPurchasePage;
