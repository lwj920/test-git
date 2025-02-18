import React from 'react'
import './fixed_menu.css'
import FixedMenFa from './FixedMenFa'
import FixedMenuUl from './FixedMenuUl'



function FixedMenu({scrollToTop}) {
  
  return (

    <div className='FixedMenu inner'>
      <div>
      <FixedMenFa scrollToTop={scrollToTop} />
      <FixedMenuUl/>
      </div>
    </div>

  )
}

export default FixedMenu
