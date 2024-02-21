import React from 'react'
import category1 from '../../Assets/images/category1.jpg'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Figs = () => {
    return (
        <div className='mt-4'>
            <h1 className='CatHeading'>Figs</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={category1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Violette de Bordeaux</h5>
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

export default Figs
