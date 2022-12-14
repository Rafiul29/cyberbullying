import React, { useRef } from 'react'
import {blogArr} from '../blogdata'
import BlogItem from './BlogItem'
import {useGsapBlogTextHeader} from '../hooks/gsap'

const Blog = () => {
    const blogRef=useRef(null)
    const blogTitleRef=useRef(null)
    const blogItemRef=useRef(null)
    

    useGsapBlogTextHeader(blogTitleRef,blogRef)

   return <section className="blog wrapper" ref={blogRef}>
  <h2 className="section-title" ref={blogTitleRef}>Type of cyberbullying</h2>
  <div className='blog-items'>
      {blogArr.map(item=>(
          <BlogItem key={item.id} item={item}/>
      ))}        
  </div>
</section>
}

export default Blog