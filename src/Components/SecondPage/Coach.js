import React from 'react'
import './Coach.css'
import dedicatedImg from './dedicatedImg.png'


export default function Coach() {
  return (
    <div className="container-fluid ">
        <h1 className='courses-h1-coach'>A dedicated expert coach to support you</h1>
    <div className="row justify-content-center align-items-center d-flex" >
      <div className="col-md-5 text-center ">

     <ul className='sof' style={{listStyle : 'none',marginTop : '20px'}}>
        <li  style={{fontSize : '15px'}}>
        During weekly video chats, your mentor will support your progress, helping you identify goals, work through challenges, and manage your time as you complete each project.
        </li>

        <li  style={{fontSize : '15px', marginTop : '10px'}}>
        All coaches are experts and working professionals in your field of study vetted by the Bridge team        </li>
<div className="details-buttons-coach text-lg-end">
   <button className='details-buttons-1-coach' >Learn more</button>
   <button className='details-buttons-2-coach'>Ask for a coach</button>

       </div>
     </ul>
     
     

      </div>


      <div className="col-md-5 text-center">
        <img className = 'img-fluid img-caoch' src={dedicatedImg}  />

      </div>
      
      
    

    </div>


    </div>
  )
}
