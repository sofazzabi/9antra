import React from 'react'
import './Properties.css'
import Students from './Students.png'
import Courses from './Courses.png'
import Trainers from './Trainers.png'

export default function Properties() {
  return (
    <ul className="liste-prop">
     <li className="item-prop">
       <div className="prop">
       <div className="prop-photo">
        <img src={Students}  className="image-dis" />
       </div>
       <div className="prop-description">Enrolled Students</div>
       <div className="prop-number">3,800+</div>

       </div>
        

     </li>
     <li className="item-prop"><div className="prop">
     <div className="prop-photo">
        <img src={Courses}  className="image-dis" />
       </div>
       <div className="prop-description">Online Courses</div>
       <div className="prop-number">966+</div>

</div></li>
     <li className="item-prop"><div className="prop"><div className="prop-photo">
        <img src={Trainers}  className="image-dis" />
       </div>
       <div className="prop-description">Trainers</div>
       <div className="prop-number">187+</div></div></li>

    </ul>
  )
}
