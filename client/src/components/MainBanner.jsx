import React from "react";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div>
      <img
        src={assets.main_banner_bg}
        alt="banner-bg"
        className="w-full hiddden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner-bg-sm"
        className="w-full md:hidden"
      />
    </div>
  );
};

export default MainBanner;
