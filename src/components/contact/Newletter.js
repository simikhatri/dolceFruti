import React from 'react'
import './newsletter.css'

const Newletter = () => {
    return (
        <div>
            <div className="newsletter">
                <h3>Newsletters & Blogs</h3>
                <div className='d-flex mt-4'>
                    <input class="form-control" type="email" placeholder='your email address...' />
                    <button className='subscribe'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newletter
