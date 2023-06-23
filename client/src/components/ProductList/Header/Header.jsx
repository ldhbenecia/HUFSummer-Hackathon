import React from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const ProductListHeader = () => {
  return (
    <div className="fixed top-0 right-0 bg-gray-50 w-full flex flex-row justify-end p-4">
      <div className="grid gap-2 grid-cols-2">
        <SearchOutlinedIcon sx={{ "font-size": "30px" }} />
        <NotificationsNoneOutlinedIcon sx={{ "font-size": "30px" }} />
      </div>
    </div>
  );
};
