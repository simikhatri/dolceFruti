import React from 'react'
import logo from '../../Assets/images/logo2.png';
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { IoLeafSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import insta from '../../Assets/images/instagram.png'
import fb from '../../Assets/images/facebook.png'
import gmail from '../../Assets/images/gmail.png'
import youtube from '../../Assets/images/youtube.png'
import tiktok from '../../Assets/images/tik-tok.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                {/* Section: Social media */}
                <div className="social d-none" style={{ backgroundColor: '#A06701' }}>
                    <div className="container">
                        <div className="row p-4 text-white justify-content-center" >
                            <div className="col-lg-4 col-md-6 col-sm-12 SLinks">
                                <Link to='/' className="Reviews">
                                    <IoSearchSharp className='mb-1' /> 7+ varieties
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 SLinks">
                                <Link to='/' className="Reviews">
                                    <IoLeafSharp className='mb-1' /> 100% organic
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 SLinks">
                                <Link to='/' className="Reviews">
                                    <IoIosHeart className='mb-1' /> heart healthy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className=" text-md-start footercont">
                        <div className="container">
                            <div className="row justify-content-evenly alllinks">
                                <div className="col-lg-3 col-md-3 mb-3">
                                    <div className="footRight">
                                        <img className='footerlogo' src={logo} alt="" />
                                        <div>
                                            <div className="socialIcons">
                                                <Link to="https://www.facebook.com/dolcefruttiUSA" className="iconss">
                                                    <img src={fb} alt="facebook" className='item mx-1' />
                                                </Link>
                                                <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                                    <img src={gmail} alt="gmail" className='item mx-2' />
                                                </Link>
                                                <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                                    <img src={insta} alt="instagram" className='item mx-2' />
                                                </Link>
                                                <Link to="https://www.youtube.com/channel/UCTEsan1pgEHkCacYRwm7NQw" className="iconss">
                                                    <img src={youtube} alt="youtube" className='item mx-2' />
                                                </Link>
                                                <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                                    <img src={tiktok} alt="tiktok" className='item mx-2' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 my-3">
                                    <h6 className="fw-bold foothead">Products</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#E1C343', height: 3, color: '#E1C343' }} />
                                    <p>
                                        <Link to='/' className="link">Dates</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Citrus</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Mangos</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Figs</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Pomegranates</Link>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 my-3">
                                    <h6 className="fw-bold foothead">Useful links</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#E1C343', height: 3, color: '#E1C343' }} />
                                    <p>
                                        <Link to='/' className="link">About</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Shop</Link>
                                    </p>
                                    <p>
                                        <Link to='/categories' className="link">All Products</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Blogs</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Testimonials</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Contact Us</Link>
                                    </p>
                                    <p>
                                        <Link to='/PrivacyPolicy' className="link">Privacy & Policy</Link>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 my-3">
                                    <h6 className="fw-bold foothead">Contact</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#E1C343', height: 3, color: '#E1C343' }} />
                                    <p>
                                        <Link to='/' className="link"><MdOutlineEmail /> support@dolcefrutti.com</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><MdOutlineEmail /> info@dolcefrutti.com</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><MdOutlineEmail /> shop@dolcefrutti.com</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><MdOutlinePhoneInTalk /> 760.786.7786</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><FaWhatsapp />  +1 760.600.6401</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><LiaFaxSolid /> 760.786.8786</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center py-2" style={{ backgroundColor: ' #E1C343', color: "#000000", fontSize: '20px' }}>
                    All &copy; 2024 |
                    <Link to='https://www.dolcefrutti.com/' style={{ textDecoration: 'none', color: "#000000" }}> Dolce Frutti LLC</Link>
                </div>
            </footer >
        </>
    )
}

export default Footer
