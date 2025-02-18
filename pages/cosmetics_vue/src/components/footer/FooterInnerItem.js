import React from 'react'
import blog from '../images/blog.png'
import fasbook from '../images/fasbook.png'
import instar from '../images/instar.png'
import kakao from '../images/kakao.png'

function FooterInnerItem() {
  return (
    <ul className='FooterInnerItem'>
      <li>SNS와 블로그에서 최신인기상품을 만나보세요!</li>
      <li><img src={blog} alt=''/></li>
      <li><img src={fasbook} alt=''/></li>
      <li><img src={instar} alt=''/></li>
      <li><img src={kakao} alt=""/></li>
    </ul>
  )
}

export default FooterInnerItem
