import React from 'react'
import Coach from './Askcoach.png'
import './Details.css'

export default function Details() {
  return (
    <div>
    <div className='details'>
    <div className="details-photo">
        <img src={Coach}  className="details-photo-coach" />
    </div>
    
    <div className="details-paragraphe">
        <h1 className='details-title'>You need more than just studying</h1>
        <p className="details-text">Get greater support from a professional coach with a membership service that really helps you build your potential and career with some access and more premium features that you shouldn't pass.</p>
        <ul className="details-liste-1">
            <li className="details-item">Gain practical experience with our projects supported in Rhyme, a cloud desktop application integrated into your browser.</li>
            <li className="details-item">If you are looking to start a new career, The Bridge Professional Certificates help you get up and running.</li>
            </ul>   


            <ul className="details-liste-2">
            <li className="details-item">Our courses include recorded course videos, homework assignments, and community discussion forums</li>
            <li className="details-item">Register for our Specializations to master a specific professional skill.
</li>
            </ul>  
            </div>
    
  
       </div>



       <div className="details-buttons">
   <button className='details-buttons-1' >Learn more</button>
   <button className='details-buttons-2'>Ask for a coach</button>

       </div>
       </div>

   


  )
}
