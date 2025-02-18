import React from 'react'

function ReviewItemImages({item}) {
  return (
    <ul>
        <li>
          <div className='ReviewSize'>
            <img src={item.url} alt=''/>
          </div>
        </li>
        <li className='reviewTitle'>{item.title}</li>
        <li className='reviewText'>{item.text}</li>
        <li className='reviewBest'>{item.best}</li>
    </ul>
  )
}

export default ReviewItemImages
