import React from 'react'
import {blogArr} from '../blogdata'
import BlogItem from './BlogItem'


const Blog = () => {

  console.log(blogArr)

  return <section className="blog wrapper">
  <h2 className="section-title">Type of cyberbullying</h2>
  <div className='blog-items'>
      {blogArr.map(item=>(
          <BlogItem key={item.id} item={item}/>
      ))}        
  </div>
</section>
}

export default Blog