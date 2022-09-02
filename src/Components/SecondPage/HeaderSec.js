import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './HeaderSec.css'
import PathPage from './path_page.png'

export default function HeaderSec() {
  return (
    <div className="container-fluid headerSecContainer">
    <div className="row justify-content-center align-items-center d-flex" >
      <div className="col-md-5 text-center ">

      <h1>
      <div style={{fontSize : '30px', color : 'white'}}>Explore a New Career Path</div>
      <div style={{fontSize : '25px',color : 'white',marginTop : '20px'}}>Looking to make a career change? Not sure how to get started? This collection is designed to help you explore new career opportunities in fields like information technology, data science, graphic design or marketing.</div>


      </h1>

      </div>


      <div className="col-md-5 text-center">
        <img className = 'img-fluid' src={PathPage}  />

      </div>
      
      
    

    </div>


    </div>

  )
}
