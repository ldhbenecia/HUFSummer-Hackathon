import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import PaymentIcon from "@mui/icons-material/Payment";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FeedIcon from "@mui/icons-material/Feed";

import "./Navigation.scss";

const Navigation = ({ tabIdx, setTabIdx }) => {
  return (
    <div className="navigation_box">
      <Box>
        <BottomNavigation
          showLabels
          value={tabIdx}
          onChange={(event, newValue) => {
            setTabIdx(newValue);
          }}
        >
          <BottomNavigationAction label="ProductList" icon={<FeedIcon />} />
          <BottomNavigationAction label="Payment" icon={<PaymentIcon />} />
          <BottomNavigationAction
            label="Point"
            icon={<FormatListNumberedIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Navigation;
