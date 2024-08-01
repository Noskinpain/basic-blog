import React from "react";
import useBlog from "../../hooks/useBlog";
import { Link } from "react-router-dom";

const LatestPosts = () => {
  const { blogPost } = useBlog();

  const renderedPosts = blogPost
    .map((post) => {
      return (
        <div className="flex flex-col md:flex-row gap-6 md:items-center" key={post.id}>
          <Link to={`/${post.header}`} className="w-full md:w-56">
          <img src={post.href} alt="img" className="md:w-56 w-full h-56 md:h-32 rounded-md" />
          </Link>
          <div className="">
          <p className="text-[12px] text-orange-600 capitalize font-bold">{post.categories.slice(0,1)} .</p>
          <Link to={`/${post.header}`} className="font-bold text-2xl pt-2">{post.header} <span className="bg-gray-200 px-1 text-lg text-gray-400">✰</span></Link>
          <div className="flex gap-2 pt-4 text-[11px] text-gray-600 ">
          <p>{post.dateCreated} .</p>
          <p>{post.readLength} .</p>
          <p>{post.views}</p>
          </div>
         
          </div>
        </div>
      );
    })
    .slice(-3);
  return (
    <div className="pt-12">
      <p className="uppercase">latest posts</p>
      <hr className="mt-2 mb-8" />
      <div className="flex flex-col gap-12">{renderedPosts}</div>
    </div>
  );
};

export default LatestPosts;
