import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Melonkuma Travel'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              哈密瓜熊的下一趟精彩冒險需要您的力量
              Melonkuma can explore !
            </h2>
            <h3>
              支持哈密瓜熊與夥伴 Yoga的旅行計畫
              <br />
            </h3>
          </header>
          <p>
            從2018年夏天，哈密瓜熊從北海道的紀念品店與 Yoga相遇開始，
            哈密瓜熊就歷經了各式大大小小的冒險與邂逅。
            除了全力感受台灣在地生活的各種美好，
            熱愛探索的哈密瓜熊也始終有個想要走遍世界各地的宏願。
            然而，哈密瓜熊與探險夥伴 Yoga的資源及能力都有其極限，
            於是我們在這裡記錄下過去旅程中的無價回憶，
            並邀請您與我們共譜下一段感動的物語。<br />
            <br />
            您可以點按下方的按鈕進入贊助頁面，
            詳細了解哈密瓜熊與夥伴 Yoga正在規劃中的下一次冒險。
            並且，如果您能夠理解並認同他們的想法與計畫，
            您的支持能為哈密瓜熊的旅程提供最強大的後盾。
          </p>
          <ul className="actions">
            <li>
              <a href="/support" className="button">
                了解更多！
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>哈密瓜熊的旅行相簿</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https://www.instagram.com/melonkuma_and_yoga/" className="button">
                到IG看更多！
              </a>
            </li>
          </ul>
        </section>
        
        <section id="three">
          <h2>與我們聯絡</h2>
          <p>
            我們相信世界上一切的相遇皆有重要的意義，
            不管你是其他的動物玩偶、嬰兒玩具，還是一個單純熱愛旅遊及探索世界的冒險者，
            我們都邀請您成為我們的快樂夥伴，共組哈密瓜熊友善陣線。
            如果您對哈密瓜熊的旅行計畫有所疑問，或是在了解和支持哈密瓜熊的過程中遇到任何障礙，
            也請不要有任何壓力，可以直接與我們聯繫。
          </p>
          <ul className="actions">
            <li>
              <a href="mailto:b06303096@ntu.edu.tw?subject=給哈密瓜熊:&body=" className="button">
                寄送信件
                </a>
              </li>
            </ul>
            
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Taipei, Taiwan
              </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                  </h3>
                  0910-423611
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                b06303096@ntu.edu.tw
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
