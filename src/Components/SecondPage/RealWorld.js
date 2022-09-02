import React from 'react'
import './RealWorld.css'
import RealWorldProjects from './RealWorldProjects.png'

export default function RealWorld() {
  return (

    <div className="container-fluid ">
        <h1 className='courses-h1-coach'>Real-World Projects</h1>
    <div className="row justify-content-center align-items-center d-flex" >
      <div className="col-md-5 text-center ">

     <ul className='sof' style={{listStyle : 'none',marginTop : '20px'}}>
        <li  style={{fontSize : '15px'}}>
        During weekly video chats, your mentor will support your progress, helping you identify goals, work through challenges, and manage your time as you complete each project.
        </li>

        <li  style={{fontSize : '15px', marginTop : '10px'}}>
        All coaches are experts and working professionals in your field of study vetted by the Bridge team        </li>

     </ul>
     
     

      </div>


      <div className="col-md-5 text-center">
        <img className = 'img-fluid img-caoch-R' src={RealWorldProjects}  />

      </div>
      
      
    

    </div>


    </div>
   
  )
}
