import React from 'react'
import './HeaderDynamicSectionList.css'
import Agenda from './Agenda.png'

export default function HeaderDynamicSectionList() {
  return (
    <section className="d-flex align-items-center" id='HeaderDynamicSectionList'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-md-1 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                <div className="TextBannerTitle">Discover our upcoming events</div>
                <p className="BannerTextDynamicList">Looking to make a career change? Not sure how to get started? This collection is designed to help you explore new career opportunities in fields like information technology, data science, graphic design or marketing.</p>
                </div>
                <div className="col-lg-4 order-1 offset-md-1 order-lg-2 hero-img align-items-center">

                <img src={Agenda} className="img-fluid animated dynamic" />
                </div>
            </div>
            
            </div>    
    </section>
  )
}
