import { PointPurchaseListBigBox } from "components/PointPurchasePage/BigBox/BigBox";

import React, { useState } from "react";

const PointPurchaseList = ({ setprice, setchecked }) => {
  const [checkBigBox1, setCheckBigBox1] = useState(false);
  const [checkBigBox2, setCheckBigBox2] = useState(false);
  const [checkBigBox3, setCheckBigBox3] = useState(false);
  const [checkBigBox4, setCheckBigBox4] = useState(false);
  const [checkBigBox5, setCheckBigBox5] = useState(false);
  const [checkBigBox6, setCheckBigBox6] = useState(false);
  const [checkBigBox7, setCheckBigBox7] = useState(false);
  const [checkBigBox8, setCheckBigBox8] = useState(false);

  const checkboxControler = (checkboxNum) => {
    setCheckBigBox1(false);
    setCheckBigBox2(false);
    setCheckBigBox3(false);
    setCheckBigBox4(false);
    setCheckBigBox5(false);
    setCheckBigBox6(false);
    setCheckBigBox7(false);
    setCheckBigBox8(false);

    if (checkboxNum === 1) {
      setprice("313,600");
      setCheckBigBox1(true);
    } else if (checkboxNum === 2) {
      setprice("517,000");
      setCheckBigBox2(true);
    } else if (checkboxNum === 3) {
      setprice("720,000");
      setCheckBigBox3(true);
    } else if (checkboxNum === 4) {
      setprice("1,000,000");
      setCheckBigBox4(true);
    } else if (checkboxNum === 5) {
      setprice("10,000");
      setCheckBigBox5(true);
    } else if (checkboxNum === 6) {
      setprice("30,000");
      setCheckBigBox6(true);
    } else if (checkboxNum === 7) {
      setprice("50,000");
      setCheckBigBox7(true);
    } else if (checkboxNum === 8) {
      setprice("100,000");
      setCheckBigBox8(true);
    }

    setchecked(true);
  };

  return (
    <div className="pointPurchaseList grid grid-cols-2 gap-5 p-5 mb-20">
      <PointPurchaseListBigBox
        point={"313,600"}
        price={"313,600"}
        discount={"4%"}
        checked={checkBigBox1}
        handler={() => checkboxControler(1)}
      />
      <PointPurchaseListBigBox
        point={"539,000"}
        price={"517,000"}
        discount={"6%"}
        checked={checkBigBox2}
        handler={() => checkboxControler(2)}
      />
      <PointPurchaseListBigBox
        point={"833,000"}
        price={"720,000"}
        discount={"10%"}
        checked={checkBigBox3}
        handler={() => checkboxControler(3)}
      />

      <PointPurchaseListBigBox
        point={"1,130,000"}
        price={"1,000,000"}
        discount={"13%"}
        checked={checkBigBox4}
        handler={() => checkboxControler(4)}
      />
      <PointPurchaseListBigBox
        point={"10,000"}
        price={"10,000"}
        discount={""}
        checked={checkBigBox5}
        handler={() => checkboxControler(5)}
      />
      <PointPurchaseListBigBox
        point={"30,000"}
        price={"30,000"}
        discount={""}
        checked={checkBigBox6}
        handler={() => checkboxControler(6)}
      />
      <PointPurchaseListBigBox
        point={"50,000"}
        price={"50,000"}
        discount={""}
        checked={checkBigBox7}
        handler={() => checkboxControler(7)}
      />
      <PointPurchaseListBigBox
        point={"100,000"}
        price={"100,000"}
        discount={""}
        checked={checkBigBox8}
        handler={() => checkboxControler(8)}
      />
    </div>
  );
};

export default PointPurchaseList;
