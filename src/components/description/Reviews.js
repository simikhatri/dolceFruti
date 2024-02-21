import React from 'react'
import './reviews.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import pic1 from '../../Assets/images/Golden Lady.jpeg'


const Reviews = () => {
    return (
        <>
            <div className="Reviews">
                <h1 className='Headreview'>Reviews</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="box me-2">
                                            <p>S</p>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='ps-3'>
                                            <h5 className="card-title">Sabiha Ghani</h5>
                                            <div>
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStarHalfAlt className='icon' />
                                            </div>
                                            <p className="card-text">1/30/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">MashaAllah so sweet dates. May AllahTaala Bless your orchard withh all
                                        the khair and you and your progeny get benefits throughout your lives. Ameen</p>
                                    <hr />
                                    <div className="reviewsImage">
                                        <img src={pic1} alt="" className='me-2' />
                                        <img src={pic1} alt="" className='me-2' />
                                        <img src={pic1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="box me-2">
                                            <p>S</p>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='ps-3'>
                                            <h5 className="card-title">Sadath Sayeed</h5>
                                            <div>
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStarHalfAlt className='icon' />
                                            </div>
                                            <p className="card-text">10/29/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">MashaAllah so sweet dates. May AllahTaala Bless your orchard withh all
                                        the khair and you and your progeny get benefits throughout your lives. Ameen</p>
                                    <hr />
                                    <div className="reviewsImage">
                                        <img src={pic1} alt="" className='me-2' />
                                        <img src={pic1} alt="" className='me-2' />
                                        <img src={pic1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="box me-2">
                                            <p>f</p>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className='ps-3'>
                                            <h5 className="card-title">Fahmi Nogura</h5>
                                            <div>
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStar className='icon' />
                                                <FaStarHalfAlt className='icon' />
                                            </div>
                                            <p className="card-text">9/26/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">MashaAllah so sweet dates. May AllahTaala Bless your orchard withh all
                                        the khair and you and your progeny get benefits throughout your lives. Ameen</p>
                                    <hr />
                                    <div className="reviewsImage">
                                        <img src={pic1} alt="" className='me-2' />
                                        <img src={pic1} alt="" className='me-2' />
                                        <img src={pic1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews
