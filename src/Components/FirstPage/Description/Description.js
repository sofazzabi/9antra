import React from 'react'
import './Description.css'
import image4 from './image4.png'
import image5 from './image5.png'
export default function Description() {
  return (

    <div className="img-description">

<ul className="liste-description">
     <li><img src={image4} className="img-description-1" /></li>
     <li><img src={image5} className="img-description-2" /></li>
     </ul>
     <div className="paragraphe">
     <h1 className="first-description">We are here to help</h1>
     
     <h3 className="second-description">Become who you want to be with The Bridge. Choose your own career path and earn an online degree with hands-on projects and weekly one-on-one mentoring sessions with a dedicated professional in your field.</h3>
     </div>
    


    </div>


    
  )
}
