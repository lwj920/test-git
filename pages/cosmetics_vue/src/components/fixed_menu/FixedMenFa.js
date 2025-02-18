import React from 'react'

function FixedMenu__fa({scrollToTop}) {
  return (
    <div className='FixedMenFa'>
      <button onClick={scrollToTop}><i className="fa-solid fa-house"></i></button>
      <a href='#'><i className="fa-solid fa-bars"></i></a>
    </div>
  )
}

export default FixedMenu__fa
