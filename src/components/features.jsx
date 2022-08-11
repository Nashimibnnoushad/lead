import '../css/index.css'
import '../js/index.js'
import slider1 from '../image/slider-1.png'
import slider2 from '../image/slider-2.png'
import slider3 from '../image/slider-3.png'
import slider4 from '../image/slider-4.png'
import slider5 from '../image/slider-5.png'
import slider6 from '../image/slider-6.png'
import { Helmet } from 'react-helmet'

export const Features = (props) => {
  // var swiper = new Swiper(".mySwiper", {
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // });

  
  return (
    <>
      <div className="slide-items">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide  slider-color">
              <div className="slider-content container-fluid">
                <div className="row">
                  <div className="col-md-6 slider-datas">
                    <div className="circleslide"></div>
                    <div className="slider-data-contents">
                      <h1>Get Skilled! Get Certified! </h1>
                      <ul>
                        <li>Become an Entrepreneur!
                        </li>
                        <li>Become a Job-giver and an icon in Telangana!
                        </li>
                      </ul>
                      <p> An initiative by TASK powered by Ed4All™ </p>
                    </div>
                  </div>
                  <div className="col-md-6 sliderimages " >
                    <div className="circleimage"></div>
                    <img src={slider1} alt="" srcset="" />
                  </div>
                </div>
                <div className="scroolanime">
                  <div className="mouse"></div>
                  <p>Scroll <br />
                    Down</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide  slider-color">
              <div className="slider-content container-fluid">
                <div className="row">
                  <div className="col-md-6 slider-datas">
                    <div className="circleslide"></div>
                    <div className="slider-data-contents">
                      <h1>Develop the Skills to control your Destiny…  </h1>
                      <p> An initiative by TASK powered by Ed4All™ </p>
                    </div>
                  </div>
                  <div className="col-md-6 sliderimages " >
                    <div className="circleimage"></div>
                    <img src={slider2} alt="" srcset="" />
                  </div>
                </div>
                <div className="scroolanime">
                  <div className="mouse"></div>
                  <p>Scroll <br />
                    Down</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide  slider-color">
              <div className="slider-content container-fluid">
                <div className="row">
                  <div className="col-md-6 slider-datas">
                    <div className="circleslide"></div>
                    <div className="slider-data-contents">
                      <h1>Get access to Skills, Certifications, and Capital!   </h1>
                      <p><b>Become an Entrepreneur and start your business after graduating from this Program </b> </p>
                      <p> An initiative by TASK powered by Ed4All™ </p>
                    </div>
                  </div>
                  <div className="col-md-6 sliderimages " >
                    <div className="circleimage"></div>
                    <div className="sliderimagespicial">
                      <img src={slider3} alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div className="scroolanime">
                  <div className="mouse"></div>
                  <p>Scroll <br />
                    Down</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide  slider-color">
              <div className="slider-content container-fluid">
                <div className="row">
                  <div className="col-md-6 slider-datas">
                    <div className="circleslide"></div>
                    <div className="slider-data-contents">
                      <h1>Get Skilled!
                        Get Certified!
                        Get Jobs!  </h1>
                      <p>Become part of the largest GIG economy platform! </p>
                      <p> An initiative by TASK powered by Ed4All™ </p>
                    </div>
                  </div>
                  <div className="col-md-6 sliderimages " >
                    <div className="circleimage"></div>
                    <div className="sliderimagespicial">
                      <img src={slider4} alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div className="scroolanime">
                  <div className="mouse"></div>
                  <p>Scroll <br />
                    Down</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide  slider-color">
              <div className="slider-content container-fluid">
                <div className="row">
                  <div className="col-md-6 slider-datas">
                    <div className="circleslide"></div>
                    <div className="slider-data-contents">
                      <h1>Get Industry-recognised Certifications
                        from Microsoft, LinkedIn Learning,
                        and others to come   </h1>
                      <p> An initiative by TASK powered by Ed4All™ </p>
                    </div>
                  </div>
                  <div className="col-md-6 sliderimages " >
                    <div className="circleimage"></div>
                    <div className="sliderimagespicial">

                      <img src={slider5} alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div className="scroolanime">
                  <div className="mouse"></div>
                  <p>Scroll <br />
                    Down</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide  slider-color">
              <div className="slider-content container-fluid">
                <div className="row">
                  <div className="col-md-6 slider-datas">
                    <div className="circleslide"></div>
                    <div className="slider-data-contents">
                      <h1>Pay only 12%!
                        88% subsidised
                        by the Government of Telangana!   </h1>
                      <p> An initiative by TASK powered by Ed4All™ </p>
                    </div>
                  </div>
                  <div className="col-md-6 sliderimages " >
                    <div className="circleimage"></div>
                    <div className="sliderimagespicial">
                      <img src={slider6} alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div className="scroolanime">
                  <div className="mouse"></div>
                  <p>Scroll <br />
                    Down</p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
      {/* <Helmet>
      <script>
        var swiper = new Swiper(".mySwiper", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        });
      </script>
      </Helmet> */}
    </>
  )
}
