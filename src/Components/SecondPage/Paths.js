import React from 'react'
import './Paths.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import PathGroup1 from './PathGroup1.png'
import PathGroup2 from './PathGroup2.png'
import PathGroup3 from './PathGroup3.png'
export default function Paths() {
  return (
    <div className="row align-items-center justify-content-center g-5">
        <h1 className='courses-h1-paths'>Available Paths</h1>
        <div className="col-8 col-lg-4 col-xl-3">
        <div className="card" >
    <img src={PathGroup1} className="card-img-top" />
<div className="card-body text-center">
    <h5 className="card-title">Full Stack JS</h5>
    <p className="card-text">We will do our best to teach you how to build working websites from scratch using node JS et</p>
    

    <a href="#">Learn More ></a>

</div>
</div>
</div>

<div className="col-8 col-lg-4 col-xl-3">
<div className="card" >
    <img src={PathGroup2} className="card-img-top" />
<div className="card-body text-center">
    <h5 className="card-title">Full Stack Spring Boot</h5>
    <p className="card-text">We will do our best to teach you how to build working websites from scratch using Spring Boot</p>
   

    <a href="#" >Learn More ></a>
    </div>
</div>
</div>

<div className="col-8 col-lg-4 col-xl-3">
<div className="card" >
    <img src={PathGroup3} className="card-img-top" />
<div className="card-body text-center">
    <h5 className="card-title">Mobile Development
</h5>
    <p className="card-text">We will do our best to teach you how to build working applications from the AppStore</p>
  
   

    <a href="#">Learn More ></a>
    </div>
</div>
</div>


</div>
  )
}
