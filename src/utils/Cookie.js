import React from "react";

const Cookie = () => {
  return (
    <div className="bg-black z-50 py-3 sm:py-0 sm:h-14 fixed bottom-0 w-full text-white px-6 lg:px-28 flex flex-col gap-2 sm:gap-0 text-center  sm:flex-row sm:justify-between items-center text-[14px] font-[400]">
     <p>Your experience on this site will be improved by allowing cookies&nbsp;
      <span className="underline">Cookie policy.</span></p> 
      <button className=" border border-white p-2 w-fit font-[600] text-[11px]">ALLOW COOKIES</button>
    </div>
  );
};

export default Cookie;
