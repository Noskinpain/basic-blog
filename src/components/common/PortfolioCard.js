import React from "react";
import SocialLinks from "../../utils/SocialLinks"
const PortfolioCard = () => {
  return (
    <div className="w-full rounded-sm border h-96 bg-white px-6 pt-6">
      <div className="h-20 w-20 rounded-full bg-black"></div>
      <h1 className="pt-4">Hello, I'm Samuel</h1>
      <p className="pt-4 text-[14px]">
        Hi, I’m Samuel, a Florida native, who left my career in corporate wealth
        management six years ago to embark on a summer of soul searching that
        would change the course of my life forever.
      </p>
      <div className="flex gap-2 pt-12">
        <p>Follow me:</p>
        <SocialLinks/>
      </div>
    </div>
  );
};

export default PortfolioCard;
