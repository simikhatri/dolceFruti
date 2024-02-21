import React from "react";
import "./css/slider.css"
import { Link } from 'react-router-dom';
import pic1 from "../../Assets/images/pic1.jpg"
import pic2 from "../../Assets/images/pic2.jpg"
import pic3 from "../../Assets/images/pic3.jpg"

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            {/* <div className="img1 img"></div> */}
            <img src={pic1} alt="" className="img" />
            <div className="carousel-caption">
              <h1 className="mb-4">dates, fruits and desserts</h1>
              <h2 className="mb-2">100% organic</h2>
              <h2 className="mb-2">No pesticides, fertilizers or herbicides used</h2>
              <h2 className="mb-2">Ripened on trees and Hand-picked</h2>
              <div className="btn-shop">
                <Link to='/categories' className="button">Shop</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={pic2} alt="" className="img" />
            <div className="carousel-caption">
              <h2 className="mb-2">Savor the symphony with our sun-kissed citrus,</h2>
              <h2 className="mb-2">luscious mangoes, and ruby-red pomegranates</h2>
              <h2 className="mb-2">nature's finest at your fingertips</h2>
              <div className="btn-shop">
              <Link to='/categories' className="button">Shop</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={pic3} alt="" className="img" />
            <div className="carousel-caption">
              <h2 className="mb-2">embrace nature's wisdom with our permaculture</h2>
              <h2 className="mb-2">farming practices for healthier, sustainable living.</h2>
              <div className="btn-shop">
              <Link to='/categories' className="button">Shop</Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="carousel-caption">
          <h1 className="mb-2">Fresh, Healthy & Organic</h1>
          <h4 className="mb-3">100% organic Fruits</h4>
          <div className="btn-shop">
            <button>Shop</button>
          </div>
        </div> */}
      </div>
    </div>

  );
};

export default Slider;
