import React from 'react'
import './Courses.css'
import Android from './Android.png'
import IOS from './IOS.png'
import Python from './Python.png'
import arrow from './arrow.png'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'


export default function Courses() {
  return (
  

    <div className="row align-items-center justify-content-center g-5">
        <h1 className='courses-h1'>Available Trainings</h1>
        <div className="col-8 col-lg-4 col-xl-3">
        <div className="card" >
    <img src={Android} className="card-img-top" />
<div className="card-body">
    <h5 className="card-title">Create Apps For Android</h5>
    <p className="card-text">Android is the most popular operating system on smartphones and tablets. The applications being written in Java</p>
    <ul className="first-android">
        <li >Training and Assessment</li>
        <li >Achievement Certificate</li>
        <li >8 weeks</li>
    </ul>
    <div className="ViewPlusRepeaterSearchBox d-flex justify-content-end">
    <a href="#">
        <img src={arrow} alt="" className="imgArrow" />
    </a>
    </div>

</div>
</div>
</div>

<div className="col-8 col-lg-4 col-xl-3">
<div className="card" >
    <img src={IOS} className="card-img-top" />
<div className="card-body">
    <h5 className="card-title">Create apps for iOS</h5>
    <p className="card-text">iOS is Apple's operating system for iphones and ipad. Take a step-by-step guide to building native apps for the apple world!</p>
    <ul className="first-android">
        <li >Training and Assessment</li>
        <li >Achievement Certificate</li>
        <li >8 weeks</li>
    </ul>

    <div className="ViewPlusRepeaterSearchBox d-flex justify-content-end">
    <a href="#">
        <img src={arrow} alt="" className="imgArrow" />
    </a>
    </div>
    </div>
</div>
</div>

<div className="col-8 col-lg-4 col-xl-3">
<div className="card" >
    <img src={Python} className="card-img-top" />
<div className="card-body">
    <h5 className="card-title">Learn Python basics</h5>
    <p className="card-text">Python is one of the most widely-used programming languages. Learning to code with Python is a highly marketable skill for any job.</p>
    <ul className="first-android">
        <li >Training and Assessment</li>
        <li >Achievement Certificate</li>
        <li >8 weeks</li>
    </ul>

    <div className="ViewPlusRepeaterSearchBox d-flex justify-content-end">
    <a href="#">
        <img src={arrow} alt="" className="imgArrow" />
    </a>
    </div>
    </div>
</div>
</div>


</div>

   
  )
}
