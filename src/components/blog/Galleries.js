import React from 'react'
import useBlog from '../../hooks/useBlog'

const Galleries = () => {
    const {blogPost} = useBlog()

    const renderedImages = blogPost.map((post) => (
        <div className='' key={post.id}>
        <img src={post.href} alt='img' className='w-full h-24 rounded-lg'/>
        </div>
    )).slice(0,6)
  return (
    <div className="pt-6">
    <p className='uppercase'>Galleries</p>
    <hr className="mt-2 mb-8" />
    <div className='grid grid-cols-3 gap-3'>{renderedImages}</div>
  </div>
  )
}

export default Galleries