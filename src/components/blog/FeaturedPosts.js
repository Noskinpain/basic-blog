import React from "react";
import Slider from "react-slick";
import useBlog from "../../hooks/useBlog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPostClasses } from "../../utils/classnamesUtils";
import { Link } from "react-router-dom";
import { FaShareNodes } from "react-icons/fa6";

const FeaturedPosts = () => {
  const { blogPost } = useBlog();

  const filteredFeaturedPosts = blogPost
    .filter((post) => post.isFeatured)
    .slice(0, 6);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderedPost = filteredFeaturedPosts
    .map((post, index) => {
      const classes = getPostClasses(index);

      return (
        <Link
          to={`/${post.header}`}
          key={post.id}
          className="relative w-full h-96 shadow-xl"
        >
          <div
            className={classes.imageContainer}
            style={{
              backgroundImage: `url(${post.href})`,
            }}
          >
            {" "}
            {index >= 2 ? (
              <div className="flex justify-end">
              <div className="bg-blue-500 w-6 h-6 z-10 rounded-full relative items-center mx-4 top-40 flex text-white justify-center">
                <FaShareNodes />
              </div>
              </div>
            ) : null}
            <div className={classes.gradientOverlay}></div>
          </div>

          <div className={classes.textContainer}>
            <div className={classes.categoryText}>
              {post.categories &&
                post.categories.length > 0 &&
                post.categories.map((category, index) => (
                  <div key={index} className={``}>
                    {category + " ."}
                  </div>
                ))}
            </div>
            <p className={classes.headerText}>{post.header}</p>
            <div className={classes.metaText}>
              {post.dateCreated} {"."} {post.views} views {"."}{" "}
              {index >= 2 ? post.readLength : null}
            </div>
          </div>
        </Link>
      );
    })
    .slice(0, 6);

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="col-span-1 lg:col-span-2">
          {filteredFeaturedPosts.length > 1 && (
            <Slider {...sliderSettings}>{renderedPost.slice(0, 2)}</Slider>
          )}
        </div>
        <div className="h-96 rounded-xl shadow-xl">
          {renderedPost.slice(2, 3)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderedPost.slice(3)}
      </div>
    </div>
  );
};

export default FeaturedPosts;
