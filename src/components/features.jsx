import '../css/index.css'
import '../js/index.js'
import slider1 from '../image/slider-1.png'
import slider2 from '../image/slider-2.png'
import slider3 from '../image/slider-3.png'
import slider4 from '../image/slider-4.png'
import slider5 from '../image/slider-5.png'
import slider6 from '../image/slider-6.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

export const Features = (props) => {
  const nextIcon = <span className="swiper-button-next"></span>
  const prevIcon = <span className="swiper-button-prev"></span>

  return (
    <>
      <div className="slide-items" style={{height: '523px'}}>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <Carousel style={{ padding: "0px" }} pause='false' nextIcon ={nextIcon} prevIcon={prevIcon}>
              <Carousel.Item interval={3000}>
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
                      <div className='scroll-down'>Scroll Down</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
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
                      <div className='scroll-down'>Scroll Down</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
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
                      <div className='scroll-down'>Scroll Down</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
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
                      <div className='scroll-down'>Scroll Down</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
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
                      <div className='scroll-down'>Scroll Down</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
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
                      <div className='scroll-down'>Scroll Down</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
