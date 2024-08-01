import React from "react";
import { useParams } from "react-router-dom";
import useBlog from "./hooks/useBlog";
import SocialLinks from "./utils/SocialLinks";

const PostDetails = () => {
  const { header } = useParams();
  const { blogPost } = useBlog();

  // Check if blogPost is loaded and an array
  if (!Array.isArray(blogPost)) {
    return <p>Loading...</p>;
  }

  const post = blogPost.find((post) => post.header === header);

  return (
    <div className="px-6 lg:px-28">
      {post ? (
        <div>
          <section className="text-[13px] mt-4">
            <p>Home {">"}{" "}   Guides {">"}{" "}  {post.header}</p>
          </section>

          <section className="">
            <h1 className="md:text-5xl text-4xl font-bold mt-20 lg:mx-48">{post.header}</h1>
            <div className="flex lg:mx-48  my-16 justify-between items-center">
              <div className="">
                <div className="flex md:items-center items-start gap-4">
                  <div className="rounded-full bg-green-300 w-10 h-10"></div>
                  <div className="">
                    <p>
                      By <span className="font-bold">Samuel</span>
                    </p>
                    <p className="text-[11px]">May 25,2024 . {post.readLength} read . {post.views} views</p>
                  </div>
                </div>
              </div>
               <div className="md:flex gap-2 text-[14px] items-center hidden">
               Share this: <SocialLinks/>
               </div>
              
            </div>
            <div className="md:mx-16">
            <img src={post.href} alt="bg-img" className="w-full md:h-[35rem] h-[20rem] bg-center object-cover rounded-xl"/>
            </div>
         {post.comments?.map((comment) => {
          return (
            <div>{comment}</div>
          )
         })}
          </section>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default PostDetails;
