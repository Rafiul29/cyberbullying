import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return <section className='notfound'>
  <h1 className='section-title'>Page Not Found</h1>
  <Link to='/'>Go to Home</Link>
</section>
}

export default NotFoundPage
