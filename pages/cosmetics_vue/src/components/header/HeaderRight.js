import React from 'react'

function HeaderRight() {
  return (
    <div className='headerRight'>
      <ul>
        <li><a href='#'><i className="fa-brands fa-twitter"></i> Twitter</a></li>
        <li><a href='#'><i className="fa-brands fa-facebook"></i> Facebook</a></li>
        <li><a href='#'><i className="fa-brands fa-youtube"></i> Youtube</a></li>
      </ul>
      <nav>
        <ul>
          <li><a href='#'>로그인</a></li>
          <li><a href='#'>회원가입</a></li>
          <li><a href='#'>마이페이지</a></li>
          <li><a href='#'>장바구니</a></li>
          <li><a href='#'>고객센터</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderRight
