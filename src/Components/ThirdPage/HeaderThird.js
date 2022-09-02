import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './HeaderThird.css'
import CoursImg from './CoursImg.png'

export default function HeaderThird() {
  return (
    <div className="container-fluid headerSecContainer">
    <div className="row justify-content-center align-items-center d-flex" >
     


      <div className="col-md-5 text-center">
        <img className = 'img-fluid' src={CoursImg}  />

      </div>

      <div className="col-md-5 text-center ">

<h1>
<div style={{fontSize : '30px', color : 'white'}}>Browse our online courses</div>
<div style={{fontSize : '25px',color : 'white',marginTop : '20px'}}>Learn the most in-demand skills for the jobs of today and tomorrow with The Bridge A next generation school, 100% online.</div>


</h1>

</div>
      
      
    

    </div>


    </div>

  )
}
