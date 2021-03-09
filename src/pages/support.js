import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const SupportPage = () => (
    <Layout>
      <div id="main">
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

      <section id="one">

        <h3>【哈密瓜熊的下一次冒險】</h3>
        <p>
          世界很大，哈密瓜熊想盡情探索世間萬物的心願也很大。
          然而無奈的是，不管是人還是熊，
          都只能以有限的資源，來擁抱無限的渴望。
          在幫助哈密瓜熊，我們希望您可以先了解哈密瓜熊團隊的想法與規劃。<br />
          <br />
          以下是哈密瓜熊原定下一次出行想探索的城市...<br />
        
            <li>東京</li>
            <li>新潟</li>
            <br />

          雖然很想和大家分享我們以小時為單位的行程安排，並在旅途中瘋狂散播愛與歡樂，
          但不幸的是，受到 COVID-19武漢肺炎影響，哈密瓜熊的所有海外行動計畫都被無限期的擱置了。<br />
          <br />
          因此在疫情結束前，我們將會以主要根據地台北為中心，規畫數次一至三日的簡單旅行。
          目前候選中的目的地包括：

            <li>淡水</li>
            <li>花東</li>
            <li>台南</li>
            <br />

          旅程安排會以大眾交通可抵達為原則，
          在符合健康、安全、環保的前提下，
          踏訪當地的自然美景與人文地標，品嘗當地美食，
          並在 <a href = 'https://www.instagram.com/melonkuma_and_yoga'>IG</a>
          上與大家分享完整的旅行見聞。
          <br />
          <br />
        </p>

        <h3>【贊助及回饋方案總覽】</h3>
        <p>
          我們了解賺取金錢的過程必定是勞心且勞力的，
          沒有人有義務提供哈密瓜熊免費的旅遊行程。
          但若您願意理解並支持我們的行動，
          我們願意提供贊助者以下數種不同的回饋選項。
          <br />
        </p>
        <ul>
            <li><b>50 小額愛心贊助，哈密瓜熊感謝有你</b></li>
            <li><b>100 旅遊當地特色零食</b></li>
            <li><b>300 旅遊當地特色零食兩包＋飲料一瓶</b></li>
            <li><b>1000 旅遊當地特色零食兩包 + 特色禮盒一盒＋明信片一組</b></li>
            <li><b>3000以上 大力支持 - 旅遊當地特色禮盒一盒＋明信片一組，另有各式商品代購(化妝品、酒類等)</b></li>
        </ul>

        <p>
          <br />
        </p>

        <h3>【銀行匯款資訊】</h3>
        <p>
            若您使用銀行匯款方式，
            請在匯款成功後，以<a href="mailto:b06303096@ntu.edu.tw?subject=給哈密瓜熊:&body=">電子郵件</a>聯繫我們，
            並請在郵件上註明您的姓名、地址、及聯絡方式，
            以方便我們提供您收據及贊助回饋。
        </p>
        <table>
            <tbody>
                <tr>
                    <td class="title">銀行代碼</td>
                    <td class="title">銀行名稱</td>
                    <td class="title">匯款帳號</td>
                  </tr>
                <tr>
                    <td>700</td>
                    <td>中華郵政</td>
                    <td>xxxx-xxx-xxxxxx</td>
                  </tr>
                <tr>
                    <td>822</td>
                    <td>中國信託</td>
                    <td>xxx-xxx-xxxxxx</td>
                  </tr>
                <tr>
                    <td>007</td>
                    <td>第一銀行</td>
                    <td>xxx-xx-xxxxx-xx</td>
                  </tr>
              </tbody>
          </table>
        <ul className="actions">
          <li>
            <a href="../" className="button">
              回到首頁
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
)

export default SupportPage
