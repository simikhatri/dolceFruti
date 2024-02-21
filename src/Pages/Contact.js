import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import '../components/contact/contact.css'

const Contact = () => {

    return (
        <>
            <div className="contact animated fadeInLeft">
                <div className="ContactBack">
                    <div className="text-center contItem">
                        <h1 className='conthead'>Contact Us</h1>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="contactBy">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="Item">
                                    <div className="Iconbox">
                                        <FaLocationDot />
                                    </div>
                                    <h5>Our Location</h5>
                                    <div>72-811 Hwy 111 Palm Desert CA 92260</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="Item">
                                    <div className="Iconbox">
                                        <FaLocationDot />
                                    </div>
                                    <h5>Contact Us Anytime</h5>
                                    <div>Phone: 760 786 7786 <br />
                                        Fax: 760 786 8786</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="Item">
                                    <div className="Iconbox">
                                        <FaLocationDot />
                                    </div>
                                    <h5>Support Overall</h5>
                                    <div> support@dolcefrutti.com <br />info@dolcefrutti.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <Container>
                    <div className="text-center contItem">
                        <h1 className='conthead'>Hello!</h1>
                        <div className="contactContent">
                            Our group enjoys coming up with answers and solutions.<br /> Please get in touch with us; we would be delighted to hear from you.
                            <div className='officehour'>Office hours</div>
                            <div className='timing'> are 7:00 am to 1:00 pm, Monday through Thursday.</div>
                        </div>
                    </div>
                </Container> */}
                <ContactForm />
            </div >

        </>
    )
}

export default Contact
