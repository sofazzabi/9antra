import React , {useState,useEffect} from 'react'
import './Navbar.css'
import image from './images/image3.png'
import icon from './images/icon.png'
import {NavLink,Link} from 'react-router-dom'

export default function Navbar() {

    const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur,setLargeur] = useState(window.innerWidth);
    
    const toggleNav = ()=>{
setToggleMenu(!toggleMenu);

    }

    useEffect(()=>{
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }
        window.addEventListener('resize',changeWidth);

        return ()=>{
            window.removeEventListener('resize',changeWidth);
        }


    } , [])
  return (
    <header>
        
        
        <img src={image} className='img' />
        
        {(toggleMenu || largeur > 700) && (<ul className="liste">
            <li className="items"><NavLink  to='/' className={({isActive}) =>{return isActive ?  "navlink beforeNavlink": "navlink"  } }style={({isActive}) =>{return isActive ?  {color : "#af2f64"}: {color : "#000"}  }}>Home</NavLink></li>
            <li className="items"><NavLink  to='/paths' className={({isActive}) =>{return isActive ?  "navlink beforeNavlink": "navlink"  }} style={({isActive}) =>{return isActive ?  {color : "#af2f64"}: {color : "#000"}  }}>Paths</NavLink></li>
            <li className="items"><NavLink  to='/courses' className={({isActive}) =>{return isActive ?  "navlink beforeNavlink": "navlink"  }} style={({isActive}) =>{return isActive ?  {color : "#af2f64"}: {color : "#000"}  }}>Courses</NavLink></li>
            <li className="items"><NavLink  to='/eventschedule' className={({isActive}) =>{return isActive ?  "navlink beforeNavlink": "navlink"  }} style={({isActive}) =>{return isActive ?  {color : "#af2f64"}: {color : "#000"}  }}>Events</NavLink></li>
            
            <li className="items"><NavLink  to='/eventschedul' className={({isActive}) =>{return isActive ?  "navlink beforeNavlink": "navlink"  }} style={({isActive}) =>{return isActive ?  {color : "#af2f64"}: {color : "#000"}  }}>Reports</NavLink></li>
            <li className="items"><NavLink  to='/aboutus' className={({isActive}) =>{return isActive ?  "navlink beforeNavlink": "navlink"  }} style={({isActive}) =>{return isActive ?  {color : "#af2f64"}: {color : "#000"}  }}>About us</NavLink></li>
        
        
        </ul>)
}


        <img src={icon} onClick={toggleNav} className="icon" />



    
    </header>
  )
}
