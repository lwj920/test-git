import React from 'react'
import './Product.css'
import ProductItem from './ProductItem'


function Product({ProductJson}) {
  return (
    <div className='ProductFlex'>
      <h2><span>BEST</span> SELLER</h2>
      <div className='Product'>
        {
          ProductJson.map(item=>{
            return <ProductItem className="ProductItem" ProductJson={item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Product
