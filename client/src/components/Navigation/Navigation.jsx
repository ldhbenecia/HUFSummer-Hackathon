import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/eatPayment">Eat Payment</Link>
        </li>
        <li>
          <Link to="/pointpurchase">Point Purchase</Link>
        </li>
        <li>
          <Link to="/productlist">Product List</Link>
        </li>
        <li>
          <Link to="/userprofile">User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
