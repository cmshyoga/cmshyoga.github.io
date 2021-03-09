import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/profile_picture.jpg'


const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>嗨，我是哈密瓜熊。</strong>
        <br />
      </h1>
      
      <h2>
        <br />
        我是旅遊夥伴 Yoga在北海道旅遊時，<br />
        受命運感召而買下的帥氣熊玩偶，<br />
        也是來自北海道夕張市，<br />
        最殘暴也最勤奮不懈的吉祥物。
        <br />
        <br />
        這裡是我的個人網頁，<br />
        記錄我的每一份回憶。
      </h2>
    </div>
    <Footer />
  </header>
)

export default Header
