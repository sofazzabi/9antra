import React from 'react'
import { useState,useRef,useEffect } from 'react'

import './Testimonials.css'
import Marwen from './marwen.jpg'
import Aymen from './Aymen.jpg'
import Nour from './Nour.jpg'
import Rihem from './Rihem.jpg'
import Ons from './Ons.jpg'
import star from './star.png'

export default function Testimoanials() {
  const [toggleMarwen,setToggleMarwen] = useState(true);
  const toggleStateMarwen = ()=>{
    if (!toggleMarwen){
    setToggleMarwen(true);
    setToggleOns(false);
    setToggleAymen(false);
    
    setToggleRihem(false);
    
    setToggleNour(false);
}
  }
 
  const [toggleOns,setToggleOns] = useState(false);
  const toggleStateOns = ()=>{
    if (!toggleOns){
        setToggleOns(true);
        setToggleMarwen(false);
        setToggleAymen(false);
        
        setToggleRihem(false);
        
        setToggleNour(false);
    }
  }


  const [toggleAymen,setToggleAymen] = useState(false);
  const toggleStateAymen = ()=>{
    if (!toggleAymen){
        setToggleAymen(true);
        setToggleMarwen(false);
        setToggleOns(false);
        setToggleRihem(false);
        
        setToggleNour(false);
    }
}

    const [toggleNour,setToggleNour] = useState(false);
    const toggleStateNour = ()=>{
      if (!toggleNour){
          setToggleNour(true);
          setToggleMarwen(false);
          setToggleOns(false);
          setToggleRihem(false);
          setToggleAymen(false);
          
      }
  }

  const [toggleRihem,setToggleRihem] = useState(false);
  const toggleStateRihem = ()=>{
    if (!toggleRihem){
        setToggleAymen(false);
        setToggleMarwen(false);
        setToggleOns(false);
        setToggleRihem(true);
        setToggleNour(false);
    }
  }

  return (
    <div className="container-fluid my-5 containerTestimmonials ">

<div className="row justify-content-start">

    <div className="col-md-5">
    <h3 style={{color : '#af2f64'}}>Testimonials</h3>
        <ul className='my-3'>
         <li className={toggleMarwen ? "testimonials-item-toggle" :"testimonials-item"} onClick={toggleStateMarwen}>
            <img src={Marwen} className="testimonials-photo" />
            <div className='testimonials-text'>Marwen Hammami</div>
         </li>

         <li className={toggleOns ? "testimonials-item-toggle" :"testimonials-item"} onClick={toggleStateOns}>
            <img src={Ons} className="testimonials-photo" />
            <div className='testimonials-text'>Ons Fadhel</div>
         </li>

         <li className={toggleAymen ? "testimonials-item-toggle" :"testimonials-item"} onClick={toggleStateAymen}>
            <img src={Aymen} className="testimonials-photo" />
            <div className='testimonials-text'>Elouaer Aymen</div>
         </li>

         <li className={toggleRihem ? "testimonials-item-toggle" :"testimonials-item"} onClick={toggleStateRihem}>
            <img src={Rihem} className="testimonials-photo" />
            <div className='testimonials-text'>Garrouch Rihem</div>
         </li>

         <li className={toggleNour ? "testimonials-item-toggle" :"testimonials-item"} onClick={toggleStateNour}>
            <img src={Nour} className="testimonials-photo" />
            <div className='testimonials-text'>Zraibia Nour El Houda</div>
         </li>
         

        </ul>
    </div>
    <div className="col-md-5 text-center">
       
            
        
        {toggleMarwen ?
        <div>
        <h2 className='azzabi'>It was a great experience</h2>
        <p className="lead my-3 az">He is an excellent trainer, the explanations were very clear and the exercises very good. I will recommend this training.Very satisfactory training. ... I was particularly interested in the practical work with concrete examples and the discussions between the trainer and the participants</p>
        </div>
        :<div></div>
        }

{toggleOns ?
        <div>
        <h2 className='azzabi'>C'était une expérience géniale</h2>
        <p className="lead my-3 az">La formation était pertinente pour mes expériences personnelles . Autant de théorie que de pratique ce qui rend cette formation enrichissante . Le formateur est toujours disponible , à l'écoute et avec des explications très claires La formation était pertinente pour mes expériences personnelles . Autant de théorie que de pratique ce qui rend cette formation enrichissante . Le formateur est toujours disponible , à l'écoute et avec des explications très claires.</p>
        </div>
        :<div></div>
        }



{toggleAymen ?
        <div>
        <h2 className='azzabi'>It was a great experience</h2>
        <p className="lead my-3 az">it was a good experience over all, the framer is a very nice guy, you never hesitate to ask him any questions, unlike in class when sometimes you hesitate to ask a dumb question and you get embaressed infront of your class. the framer also had a very good knowledge of the mobile developpement as expected, personally i enjoyed the training because it was a high quality and i learned a lot of things, but the most thing i liked is that even if you miss a session, you always have it recorded and you can rewatched whenever you want.</p>
        </div>
        :<div></div>
        }


{toggleRihem ?
        <div>
        <h2 className='azzabi'>C'était une expérience géniale</h2>
        
        <p className="lead my-3 az">c'était une excellente formation, les explications étaient claires, j'ai été particulièrement intéressée par la pratique avec les exemples concrets et les discussions entre le formateur et les participants.</p>
        </div>
        :<div></div>
        }


{toggleNour ?
        <div>
        <h2 className='azzabi'>Merci pour ce super service</h2>
        <p className="lead my-3 az">Le formateur nous a mis à l'aise et en confiance pendant notre formation, il est toujours là pour nous aider et nous faire avancer l'ambiance était super. je recommande!</p>
        </div>
        :<div></div>
        }


    </div>


</div>



    </div>
  )
    }
