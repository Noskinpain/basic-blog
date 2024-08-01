import React from "react";
import useBlog from "../../hooks/useBlog";
import { Link } from 'react-router-dom';

const TravelPost = () => {
  const { blogPost } = useBlog();

  const travelPost = blogPost.filter((post) =>
    post.categories.includes("travel")
  );
  
  const renderedPost = travelPost.map((post) => {
    return (
      <div key={post.id} className="relative w-full h-96 shadow-xl">
        <Link to={`/${post.header}`}>
        <div
          className={`
         w-full bg-center object-cover rounded-lg h-48`}
          style={{
            backgroundImage: `url(${post.href})`,
          }}
        >
          {" "}
          <div
            className={`absolute inset-0 bg-gradient-to-t h-48 from-black/90 to-transparent`}
          ></div>
        </div>
        </Link>

        <div className={`relative top-6 px-6`}>
          <div
            className={`text-orange-600 capitalize
          flex gap-2 mb-2  font-bold text-sm`}
          >
            {post.categories &&
              post.categories.length > 0 &&
              post.categories.map((category, index) => (
                <div key={index} className={``}>
                  {category + " ."}
                </div>
              ))}
          </div>
          <Link to={`/${post.header}`}
            className={` text-lg
          font-bold `}
          >
            {post.header}
          </Link>
          <div
            className={` text-black mt-10
          flex text-[11px] font-light items-center pt-3`}
          >
            {post.dateCreated} {"."} {post.views} views {"."} {post.readLength}
          </div>
        </div>
      </div>
    );
  }).slice(0,3);
  return (
    <section className="w-full">
      <p>TRAVEL</p>
      <hr className="mt-2 mb-8"/>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{renderedPost}</div>
    </section>
  );
};

export default TravelPost;
