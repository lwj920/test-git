import React from 'react'

function ProductItem({ProductJson}) {
  return (
    <div className='ProductItem'>
      <ul>
        <li><img src={ProductJson.url} alt=''/></li>
        <li className='ProductJsonTitle'>{ProductJson.title}</li>
        <li><span className='ProductText'>{ProductJson.text}</span></li>
        <li className='ProductExplanation'>{ProductJson.explanation}</li>
        <li className='ProductPrice'><span>{ProductJson.price}</span> {ProductJson.sale}</li>
      </ul>
    </div>
  )
}

export default ProductItem
