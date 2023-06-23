import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyExchange from "@mui/icons-material/CurrencyExchange";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

import "./Navigation.scss";

const Navigation = ({ tabIdx, setTabIdx }) => {
  return (
    <div className="navigation_box bg-white border-t-2">
      <Box>
        <BottomNavigation
          showLabels
          value={tabIdx}
          onChange={(event, newValue) => {
            setTabIdx(newValue);
          }}
        >
          <BottomNavigationAction
            label="상품"
            icon={<SyncAltIcon sx={{ fontSize: 27 }} />}
          />
          <BottomNavigationAction
            label="결제"
            icon={<PaymentIcon sx={{ fontSize: 27 }} />}
          />
          <BottomNavigationAction
            label="포인트충천"
            icon={<CurrencyExchange sx={{ fontSize: 27 }} />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Navigation;
