import React from "react";
import ThickBorder from "../../utils/ThickBorder";
import useBlog from "../../hooks/useBlog";


const Guides = ({filtered, rendered}) => {
  const { blogPost } = useBlog();

const filteredGuides = filtered(blogPost, "guides")
const renderedPosts = rendered(filteredGuides)
  return (
    <div>
      <p>Guides</p>
      <ThickBorder hotTopicsBorder />
      <div className="flex flex-col gap-8 mt-12">{renderedPosts}</div>
    </div>
  );
};

export default Guides;
