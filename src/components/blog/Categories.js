import React from "react";
import Guides from "./Guides";
import Destination from "./Destination";
import Food from "./Food";
import { Link } from "react-router-dom";

const Categories = () => {
  const filteredCategories = (postsArray, string) => {
    return postsArray.filter((post) => post.categories.includes(string));
  };

  const renderedCategories = (filteredArray) => {
  return filteredArray.map((post) => {
      return   <div className="flex gap-4" key={post.id}>
        <Link to={`/${post.header}`}>
      <img src={post.href} alt="img" className="w-20 h-[5rem] rounded-lg" />
      </Link>
      <div className="">
        <Link to={`/${post.header}`} className="text-[16px] w-[90%]">{post.header}</Link>
        <div className="flex text-[11px]">
          <p>{post.dateCreated} . </p>
          <p> {post.views}</p>
        </div>
      </div>
    </div>
    });
  };
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-8 pt-8">
      <Guides filtered = {filteredCategories} rendered = {renderedCategories}/>
      <Destination filtered = {filteredCategories} rendered = {renderedCategories}/>
      <Food filtered = {filteredCategories} rendered = {renderedCategories}/>
    </div>
  );
};

export default Categories;
