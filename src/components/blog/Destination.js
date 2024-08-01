import React from 'react'
import ThickBorder from '../../utils/ThickBorder'
import useBlog from '../../hooks/useBlog'

const Destination = ({filtered, rendered}) => {
    const {blogPost} = useBlog()

   const filteredGuides = filtered(blogPost, "destination")

   const renderedPosts = rendered(filteredGuides).slice(0,3)
  return (
    <div>
        <p>Destination</p>
        <ThickBorder hotTopicsBorder />
        <div className="flex flex-col gap-8 mt-12">{renderedPosts}</div>
    </div>
  )
}

export default Destination