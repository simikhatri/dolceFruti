import React from 'react'
import './css/Shop.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
import dates from '../../Assets/images/dates.jpg'
import pome from '../../Assets/images/pomegranate.jpg'
import mango from '../../Assets/images/mango fruit collage.jpg'
import fig from '../../Assets/images/figs.jpg'
import orange from '../../Assets/images/orange fruit collage.jpg'

const Landing = () => {
  return (
    <>
      <div className="landing text-center">
        <div className="container">
          <div className="landItem">
            <h1 className='catHeading'>Shop</h1>
            <Swiper className='Swiper'
              slidesPerView={3}
              breakpoints={{
                900: { slidesPerView: 4 },
                600: { slidesPerView: 3 },
                450: { slidesPerView: 2 },
                270: { slidesPerView: 1 },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              spaceBetween={1}>
              <SwiperSlide>
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/categories" className="link-category_product">
                        <img src={dates} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/categories" className='link'>Dates</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/categories" className="link-category_product">
                        <img src={orange} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/categories" className='link'>Citrus</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/categories" className="link-category_product">
                        <img src={mango} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/categories" className='link'>Mangos</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/categories" className="link-category_product">
                        <img src={fig} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/categories" className='link'>Figs</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/categories" className="link-category_product">
                        <img src={pome} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/categories" className='link'>Pomegranates</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="row">
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={dates} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Dates</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={pome} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Pomegranates</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={fig} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Figs</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 p-0" ></div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={orange} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Citrus</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={mango} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Mangos</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 p-0" ></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
