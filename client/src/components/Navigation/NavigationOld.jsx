import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import PaymentIcon from "@mui/icons-material/Payment";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import EatCardPaymentPage from "../../pages/EatCardPaymentPage/EatCardPaymentPage";
import PointPurchasePage from "../../pages/PointPurchasePage/PointPurchasePage";
import ProductListPage from "../../pages/ProductListPage/ProductListPage";
import UserProfilePage from "../../pages/UserProfilePage/UserProfilePage";

import "./NavigationOld.css"

const Navigation = () => {
  const [value, setValue] = useState(0);

  // 페이지 전환 애니메이션 관련 상태
  const [prevValue, setPrevValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  // 페이지 전환 핸들러
  const handlePageChange = (newValue) => {
    if (newValue !== value) {
      setIsAnimating(true);
      setPrevValue(value);
      setTimeout(() => {
        setIsAnimating(false);
        setValue(newValue);
      }, 500); // 애니메이션 시간 설정 (0.5초)
    }
  };

  return (
    <Box sx={{ width: 500 }}>
      <TransitionGroup>
        <CSSTransition
          key={value}
          classNames={{
            enter: "slide-animating-enter",
            enterActive: "slide-animating-enter-active",
            exit: "slide-animating-exit",
            exitActive: "slide-animating-exit-active",
          }}
          timeout={500}
        >
          <>
            {value === 0 && <EatCardPaymentPage />}
            {value === 1 && <PointPurchasePage />}
            {value === 2 && <ProductListPage />}
            {value === 3 && <UserProfilePage />}
          </>
        </CSSTransition>
      </TransitionGroup>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handlePageChange(newValue);
        }}
      >
        <BottomNavigationAction label="Payment" icon={<PaymentIcon />} />
        <BottomNavigationAction
          label="Point"
          icon={<FormatListNumberedIcon />}
        />
        <BottomNavigationAction label="ProductList" icon={<FeedIcon />} />
        <BottomNavigationAction label="UserProfile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
