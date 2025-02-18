import React from 'react'
import logo from '../images/f_logo.png'
import FooterInner from './FooterInner'
import './footer.css'
import FooterText from './FooterText'

function Footer() {
  return (
    <footer>
      <div className='inner'>
        <h2><img src={logo} alt=''/></h2>
        <FooterInner/>
      </div>
      <FooterText/>
      <div className='copy'>
        <div className='inner'>
          COPYRIGHT (C) www.cellnb.com ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}

export default Footer
