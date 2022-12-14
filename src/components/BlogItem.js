import React, { useRef } from 'react'

const BlogItem = ({item}) => {

  const blogItemRef=useRef(null);
  const blogArr=[blogItemRef]
  console.log(blogArr)

  return (
    <div className='blog-item' ref={blogItemRef}>
      <img src={item.image} alt={item.title} />
      <div className='blog-text'>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </div>
    </div>
  )
}

export default BlogItem
