import React from 'react'
import ReviewItemImages from './ReviewItemImages'
import review from '../../json/review.json'

function ReviewItem() {
  return (
    <div className='ReviewItem'>
      {
        review.map((item)=>{
          return <ReviewItemImages item={item} key={item.id}/>
        })
      }
    </div>
  )
}

export default ReviewItem
