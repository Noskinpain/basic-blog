import React from "react";
import { IoMdClose } from "react-icons/io";
import ThickBorder from "../../../utils/ThickBorder";
import useHeader from "../../../hooks/use-header";

const SideBar = () => {
  const {handleCloseSidebar, isOpen} = useHeader()
  return (
    <div>
      {/* <button onClick={handleClick}>Toggle Sidebar</button> */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleCloseSidebar}
        />
      )}

      <section
        className={`fixed right-0 top-0 bg-white w-[28em] shadow-2xl h-full z-50 px-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoMdClose
            className="h-16 w-6 cursor-pointer "
            onClick={handleCloseSidebar}
          />
        </div>

        <div className="px-1 text-[#212529]">
          <p className="font-[500] text-[12px] ">HOT TOPICS</p>
          <ThickBorder hotTopicsBorder />

          <div className="flex flex-col gap-3 pt-8 font-[400] text-[14px]">
            <p>Hotels</p>
            <hr />
            <p>Destination</p>
            <hr />
            <p>Guides</p>
            <hr />
            <p>Travel</p>
            <hr />
            <p>Food</p>
          </div>
          <p className="font-[500] text-[12px] pt-14">DON'T MISS</p>
          <ThickBorder hotTopicsBorder />
        </div>
      </section>
    </div>
  );
};

export default SideBar;
