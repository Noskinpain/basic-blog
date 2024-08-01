import React from "react";
import useBlog from "../../hooks/useBlog";
import { Link } from "react-router-dom";

const MostPopular = () => {
  const { blogPost } = useBlog();

  let sortedData = blogPost;

  sortedData = [...blogPost].sort((a, b) => b.views - a.views);

  const renderedData = sortedData
    .map((post) => {
      return (
        <div key={post.id} className="w-full h-fit bg-white px-6 rounded-md">
          

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
            <Link to={`/${post.header}`} className="">{post.header}</Link>
              <div className="text-[11px] pt-2">{post.dateCreated}. 
              {post.views}
              </div>
            </div>
            <Link to={`/${post.header}`}>
            <img src={post.href} alt="img" className="w-20 h-20 rounded-lg my-5"/>
            </Link>
          </div>
        </div>
      );
    })
    .slice(0, 5);
  return (
    <div className="pt-8">
      <p className="uppercase">Most Popular</p>
      <hr className="mt-2 mb-8" />
      <div className="flex flex-col gap-6">{renderedData}</div>
    </div>
  );
};

export default MostPopular;
