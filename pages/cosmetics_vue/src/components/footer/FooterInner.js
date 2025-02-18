import React from 'react'
import FooterInnerItem from './FooterInnerItem'

function FooterInner() {
  return (
    <div className='FooterInnerFlex'>
      <ul className='FooterInner'>
        <li>회사소개</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        <li>이용안내</li>
        <li>광고/제휴 문의</li>
      </ul>
      <FooterInnerItem/>
    </div>
  )
}

export default FooterInner
