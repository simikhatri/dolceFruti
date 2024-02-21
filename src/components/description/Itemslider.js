
import React from 'react';
import pic1 from '../../Assets/images/Desert Ruby.jpeg'
import pic2 from '../../Assets/images/Golden Lady.jpeg'
import pic3 from '../../Assets/images/keitt.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic4 from '../../Assets/images/valencia pride.jpg'
import './itemSlider.css'

const Itemslider = () => {

    return (
        <>
            <div className="custom-carousel-wrapper">
                <Carousel showStatus={false} className="thumbs-carousel">
                    <div>
                        <img src={pic1} alt='mango' className="carousel-image" />
                    </div>
                    <div>
                        <img src={pic2} alt='mango' className="carousel-image" />
                    </div>
                    <div>
                        <img src={pic3} alt='mango' className="carousel-image" />
                    </div>
                    <div>
                        <img src={pic4} alt='mango' className="carousel-image" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Itemslider

