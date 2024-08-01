import React from "react";
import AutoTyping from "../utils/AutoTyping";
import Subscribe from "../components/common/Subscribe";
import Blog from "./Blog";
// import "../assets/styles/main.css"

const Home = () => {
  return (
    <>
    <section className="bg-gray-100 px-6 lg:px-28 py-24 flex justify-between">
      <div className="">
        <AutoTyping />
        <h1 className="text-[40px] sm:text-[50px] text-[#212529] leading-tight font-bold pt-4">
          Hello, I’m <span className="text-[#5869DA]">Samuel</span>
          <br />
          <span className="text-[32px] sm:text-[42px]">Welcome to my blog</span>
        </h1>
        <p className="pt-4 text-[20px] sm:w-[26em] w-fit text-[#687385]">
        Don't miss out on the latest updates about software reviews, tech guides, and more...
        </p>
        <div className="hidden sm:block">
        <Subscribe btnWidth="8em" inputWidth="22em" topLeft = "25px" bottomLeft = "25px"/> 
        </div>
        <div className="block sm:hidden">
        <Subscribe btnWidth="8em" inputWidth="18em" topLeft = "25px" bottomLeft = "25px"/> 
        </div>
        
      </div>
      <div className="hidden md:block">
        <img
          src="https://stories.botble.com/storage/general/featured.png"
          alt="home-bg"
          loading="lazy"
        />
      </div>
    </section>

    <section className="">
      <Blog/>

    </section>
  
    </>
  );
};

export default Home;
