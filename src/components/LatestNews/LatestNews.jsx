import React from 'react'
import newsImage1 from './../../assets/images/n1.jpg';
import newsImage2 from './../../assets/images/n2.jpg';

export default function LatestNews() {
  return (
    <section class="news_section">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Latest News
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="img-box">
              <img src={newsImage1} class="box-img" alt=""/>
            </div>
            <div class="detail-box">
              <h4>
                Tasty Food For you
              </h4>
              <p>
                there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
              </p>
              <a href="">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="img-box">
              <img src={newsImage2} class="box-img" alt=""/>
            </div>
            <div class="detail-box">
              <h4>
                Breakfast For you
              </h4>
              <p>
                there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
              </p>
              <a href="">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
