import React from 'react'

const BlogItem = ({item}) => {
  return (
    <div className='blog-item'>
      <img src={item.image} alt={item.title} />
      <div className='blog-text'>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </div>
    </div>
  )
}

export default BlogItem
