import React from 'react';
import { Link } from 'react-router-dom';
import './css/Shop.css'
import dates from '../../Assets/images/cm9.jpg'
import pome from '../../Assets/images/pomog.jpg'
import fig from '../../Assets/images/fig.jpg'
import { MdNavigateNext } from "react-icons/md";


const HomeBlog = () => {
    return (
        <>
            <div className="blogSwiper text-center">
                <h1 className='swiperHead'>Blogs</h1>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={dates} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Dates</h4>
                                            <p>Nature's sweet gems, a delightful blend of chewy and rich goodness.</p>
                                            <Link to="/blog" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={pome} className="card-img-top" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Pomegranates</h4>
                                            <p>Bursting jewels, a taste explosion of sweet and tart perfection.</p>
                                            <Link to="/blog" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={fig} className="card-img-top" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Figs</h4>
                                            <p> Nature's candy, a sweet and chewy delight for a wholesome treat.</p>
                                            <Link to="/blog" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MoreBlogBtn">
                            <Link to="/blog" className='btn'>More Blogs</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomeBlog;
