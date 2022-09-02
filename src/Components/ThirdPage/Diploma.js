import React from 'react'
import './Diploma.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Certificat from './Certificat.png'

export default function Diploma() {
  return (
    <div className="container">
        <div className="row content">
            <div className="d-flex align-items-center flex-row justify-content-center">
                <div className="col-lg--6 pt-4 pt-lg-0">
                    <div>
                        <img src={Certificat} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h4>An accredited diploma</h4>
                    <div className="ShortDescBoxMedium">
                        <p>For the majority of our programs, we offer a certificate, equivalent to the level of an associate’s, bachelor’s or master’s qualification, respectively.</p>
                        <p>At the end of your program, you'll receive the support of your dedicated career coach who will help you find work.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
