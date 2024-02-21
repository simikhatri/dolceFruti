import React from 'react'
import "./latestpost.css"
import pic1 from '../../Assets/images/Desert Ruby.jpeg'
import pic2 from '../../Assets/images/valencia pride.jpg'
import pic3 from '../../Assets/images/Golden Lady.jpeg'

const LatestPost = () => {
    return (
        <>
            <div className="latestPost">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pic1} className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={pic2} className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={pic3} className="d-block img-fluid" alt="..." />
                        </div>
                    </div>
                    <div class="carousel-caption d-md-block">
                        <h1>Recent Posts</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LatestPost
