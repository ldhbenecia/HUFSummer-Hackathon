import { PointPurchaseListBigBox } from "components/PointPurchasePage/BigBox/BigBox";

import React, { useState } from "react";

const PointPurchaseList = () => {
  const [checkBigBox1, setCheckBigBox1] = useState(false);
  const [checkBigBox2, setCheckBigBox2] = useState(false);
  const [checkBigBox3, setCheckBigBox3] = useState(false);

  return (
    <div className="pointPurchaseList grid grid-cols-2 gap-5 p-5">
      <PointPurchaseListBigBox
        point={"313,600"}
        price={"₩313,600"}
        discount={"4%"}
        checked={checkBigBox1}
      />
      <PointPurchaseListBigBox
        point={"539,000"}
        price={"₩517,000"}
        discount={"6%"}
        checked={checkBigBox2}
      />
      <PointPurchaseListBigBox
        point={"833,000"}
        price={"₩720,000"}
        discount={"10%"}
        checked={checkBigBox3}
      />

      <PointPurchaseListBigBox
        point={"10,000"}
        price={"₩10,000"}
        discount={""}
        checked={checkBigBox1}
      />
      <PointPurchaseListBigBox
        point={"30,000"}
        price={"₩30,000"}
        discount={""}
        checked={checkBigBox2}
      />
      <PointPurchaseListBigBox
        point={"50,000"}
        price={"₩50,000"}
        discount={""}
        checked={checkBigBox3}
      />
    </div>
  );
};

export default PointPurchaseList;
