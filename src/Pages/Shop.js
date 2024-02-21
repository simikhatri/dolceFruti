import React from 'react'
import Slider from '../components/shop/Slider'
import '../components/shop/css/Shop.css'
import Landing from '../components/shop/Landing'
import HomeBlog from '../components/shop/HomeBlog'
import Testimonial from '../components/shop/Testimonial'
import WhatWeDo from '../components/shop/WhatWeDo'
import ContactForm from '../components/contact/ContactForm'

const Shop = () => {
    return (
        <div>
            <Slider />
            <WhatWeDo />
            {/* <div className="shopContent">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h1 className='shopTitle'>Welcome to Dolce Frutti</h1>
                            <div className="shopdesc">dolce frutti dates, fruits & desserts are unique, grown
                                and/or made in southern California’s Coachella Valley.
                                They are 100% organic – no pesticides and no fertilizers
                                have been used & are deliciously sweet. <br />dolce frutti products are all ripened on the tree and
                                hand-picked after careful observation to get the best
                                sweetness naturally from the tree.
                                All fruits and desserts should be refrigerated when not in
                                use to maintain nutritional value.</div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="bannerRight">
                                <img src={banner} alt="Dolce Frutti" className='img-fluid baanerImg' />
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
            <Landing />
            <HomeBlog />
            <Testimonial />
            <h1 className='shopcontact'>Contact us</h1>
            <ContactForm />

        </div>

    )
}

export default Shop
