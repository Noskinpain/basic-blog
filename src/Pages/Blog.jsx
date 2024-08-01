import React from "react";
import FeaturedPosts from "../components/blog/FeaturedPosts";
import TravelPost from "../components/blog/TravelPost";
import PortfolioCard from "../components/common/PortfolioCard";
import MostPopular from "../components/blog/MostPopular";
import Galleries from "../components/blog/Galleries";
import LatestPosts from "../components/blog/LatestPosts";
import Categories from "../components/blog/Categories";
import CategoriesSlide from "../components/blog/CategoriesSlide";

const Blog = () => {

  return (
    <>
    <section className="px-6 lg:px-28 pt-6">
      <h1 className="pb-8 uppercase">Featured Posts</h1>

      <FeaturedPosts />
      </section>
      <section className = "lg:grid flex flex-col grid-cols-3 gap-8 bg-gray-100 px-6 lg:px-28 mt-16">
        <div className="col-span-2 pt-16 ">
        <TravelPost/>
        <LatestPosts/>
        </div>
      
      <div className="pt-14 w-full md:w-[21rem] pb-24">
      <PortfolioCard/>
      <MostPopular/>
      <Galleries/>
      </div>
      </section>

      <section className="px-6 lg:px-28 pt-6">
        <Categories/>
        <CategoriesSlide/>
      </section>
    
    </>
  );
};

export default Blog;
