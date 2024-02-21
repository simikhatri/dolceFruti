import React from 'react'
import './css/whatwedo.css'
import { LiaSeedlingSolid } from "react-icons/lia";
import { SiOverleaf } from "react-icons/si";
import { FiTruck } from "react-icons/fi";
import { TfiPackage } from "react-icons/tfi";

const WhatWeDo = () => {
    return (
        <>
            <div className='wedo'>
                <div className="container text-center">
                    <h1>What We Do</h1>
                    <div className="row">
                        <div className="col-lg-3 p-0">
                            <div className="working ">
                                <LiaSeedlingSolid className='icon' />
                                <div className="content text-start">
                                    <h4>Organic Growing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloribus at magni eligendi, quia ut eum doloremque eius debitis iure, nemo suscipit!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="working">
                                <SiOverleaf className='icon' />
                                <div className="content text-start">
                                    <h4>Quality Harvesting</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloribus at magni eligendi, quia ut eum doloremque eius debitis iure, nemo suscipit!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="working">
                                <TfiPackage className='icon' />
                                <div className="content">
                                    <h4>Fresh Packing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloribus at magni eligendi, quia ut eum doloremque eius debitis iure, nemo suscipit!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="working">
                                <FiTruck className='icon' />
                                <div className="content">
                                    <h4>Shipping & Delivery</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloribus at magni eligendi, quia ut eum doloremque eius debitis iure, nemo suscipit!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo
