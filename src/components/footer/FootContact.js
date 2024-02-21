import React from 'react'
import './footcontact.css'
import { Link } from 'react-router-dom'

const FootContact = () => {
  return (
    <>
      <div className="footerTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="newsletter">
                <h3>Newsletters & Blogs</h3>
                <div className='d-flex mt-4 pt-2'>
                  <input class="form-control" type="email" placeholder='your email address...' />
                  <button className='btn'>Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="newsletter">
                <h3>For info, support, inquiries, or feedback</h3>
                <div className='mt-4 pt-3'>
                  <Link to="/contact" className='contactlink'>Contact us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FootContact
