import React from 'react'
import useBlog from '../../hooks/useBlog'
import BlogPost from './BlogPost';

const BlogList = () => {
    const { blogPost } = useBlog();

    const renderedPosts = blogPost.map((post) => {
        return <BlogPost key={post.id} post={post} />;
      });
  return (
    <div>{renderedPosts}</div>
  )
}

export default BlogList