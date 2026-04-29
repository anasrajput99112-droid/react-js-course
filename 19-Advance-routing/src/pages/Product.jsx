import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Men from './Men'

const Product = () => {
  return (
    <div>
        <div>
            <Link to='/product/men'>Men</Link>
        </div>
      <h1>Product</h1>

      <Outlet />
    </div>
  )
}

export default Product
