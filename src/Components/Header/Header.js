import React , {useState} from 'react'
import './Header.css'
import photo from './images/image2.png'
export default function Header() {




  return (
    <div className="header">
    <ul className="liste-header">

        <li className="item"><p className="paragraphe1">Improve <span>your skills </span>
on your own to prepare
for a <span>better future</span></p></li>
        <li className="item"><p className="paragraphe2">The Bridge, allows any student, staff or professional to acquire relevant online training to embark on the future employment opportunity with guaranteed follow-up.</p></li>
    
    <li className="item ButtonRegister"><a href="#" className="primary-button">Register now</a></li>
    </ul>
    <img src={photo}  className="moveArrow" />

    </div>
    
  )
}
