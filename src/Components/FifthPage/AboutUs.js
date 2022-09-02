import React from 'react'
import './AboutUs.css'
import Aboutus from './about-us.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import image from './about-us.png'

export default function AboutUs() {
  return (
    <div className="container myContainer">
        <div className="row content">
            <div className="d-flex align-items-center flex-row justify-content-center">
                <div className="col-xs-12 col-sm-5 mb-4">
                    <div>
                        <img src={image} alt="" className="img-fluid myImage" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 align-items-center paragraphfifth">
                    <h3>About Us</h3>
                    <p className='text-muted'>Learn something new</p>
                    <p>Bridge Learning is where lifelong learners come to learn the new skills they need, land the jobs they want and build the lives they deserve.</p>
                </div>

            </div>

        </div>
    </div>
  )
}
