import React from 'react'
import marsh from '../../Assets/images/marsh ruby blush.jpg'
import category1 from '../../Assets/images/category1.jpg'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Citrus = () => {
    return (

        <div className='mt-4'>
            <h1 className='CatHeading'>Citrus</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={category1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Minneola Tangelos</h5>
                                <div className='mt-2'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <span className='review'>45 Reviews</span>
                                </div>
                                <p className="card-text">$96</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={category1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Temple Orange</h5>
                                <div className='mt-2'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <span className='review'>45 Reviews</span>
                                </div>
                                <p className="card-text">$96</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={marsh} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Marsh Ruby Blush</h5>
                                <div className='mt-2'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <span className='review'>45 Reviews</span>
                                </div>
                                <p className="card-text">$96</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Citrus
