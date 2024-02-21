import React, { useEffect, useRef } from 'react'
import date from '../Assets/images/cm9.jpg'
import pome from '../Assets/images/pomog.jpg'
import Citrus from '../Assets/images/orange.jpg'
import figs from "../Assets/images/fig.jpg"
import mango from '../Assets/images/mango.jpg'
import '../components/blog/blog.css'
import FootContact from '../components/footer/FootContact'
import LatestPost from '../components/blog/LatestPost'

const Blog = () => {
    const offeringsRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.blogitem').forEach((item) => {
            observer.observe(item);
        });
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <LatestPost />
            <div className="blog" ref={offeringsRef}>
                <h1 className="blogHeading">Blogs</h1>
                <div className="container">
                    <div className="blogitem">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 rowleft">
                                <div className="itemContent">
                                    <div className="itemLeft">
                                        <img src={date} alt="" className="blogImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 rowright">
                                <div className="itemRight">
                                    <div>
                                        <h6 className='itemtop'>Dates</h6>
                                        <h3 className='itemHead'>Dive into the Date Diary: From Wholesome Recipes to the Fascinating Harvest Tales</h3>
                                    </div>
                                    <div className="blogbtn">
                                        {/* <Postbtn /> */}
                                        <button className='btn'>Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogitem">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 rowleft">
                                <div className="itemContent">
                                    <div className="itemLeft">
                                        <img src={pome} alt="" className="blogImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 rowright">
                                <div className="itemRight">
                                    <div>
                                        <h6 className='itemtop'>Pomegranates</h6>
                                        <h3 className='itemHead'>Pomegranate Paradise: Savoring the Burst of Flavor and Health Benefits in Every Seed</h3>
                                    </div>
                                    <div className="blogbtn">
                                        <button className='btn'>Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogitem">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 rowleft">
                                <div className="itemContent">
                                    <div className="itemLeft">
                                        <img src={Citrus} alt="" className="blogImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 rowright">
                                <div className="itemRight">
                                    <div>
                                        <h6 className='itemtop'>Citrus</h6>
                                        <h3 className='itemHead'>Citrus Symphony: Zesting Up Your Life with Tangy Delights and Citrus-infused Adventures</h3>
                                    </div>
                                    <div className="blogbtn">
                                        <button className='btn'>Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogitem">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 rowleft">
                                <div className="itemContent">
                                    <div className="itemLeft">
                                        <img src={figs} alt="" className="blogImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 rowright">
                                <div className="itemRight">
                                    <div>
                                        <h6 className='itemtop'>Figs</h6>
                                        <h3 className='itemHead'>Fig Fantasia: A Journey into the Luscious World of Figs – From Sweet Recipes to Orchard Whispers</h3>
                                    </div>
                                    <div className="blogbtn">
                                        <button className='btn'>Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogitem">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 rowleft">
                                <div className="itemContent">
                                    <div className="itemLeft">
                                        <img src={mango} alt="" className="blogImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 rowright">
                                <div className="itemRight">
                                    <div>
                                        <h6 className='itemtop'>Mangos</h6>
                                        <h3 className='itemHead'>Mango Magic: Reveling in the Sweet Symphony of Tropical Bliss and Mango-inspired Delights</h3>
                                    </div>
                                    <div className="blogbtn">
                                        <button className='btn'>Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FootContact />
        </>
    )
}

export default Blog
