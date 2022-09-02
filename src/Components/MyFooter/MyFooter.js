import React from 'react'
import './MyFooter.css'
import LogoBridge from './LogoBridge.png'
import {Link} from 'react-router-dom'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import youtube from './youtube.png'
import phone from './phone.png'
import envelope from './envelope.png'
export default function MyFooter() {
  return (
    <footer>
        <div className="footer-top">
            <div className="container-fluid sof">
                <div className="row align-items-center">
                    <div className=" col-md-4 col-xs-12 footer-contract">
                        <img src={LogoBridge} alt="" className="img-fluid footerimg" />


                    </div>

                    <div className="col-md-4 col-xs-12">
                        <div className="d-flex align-items-center justify-content-center FooterList">
                        <Link className="footerWords" to='/'>Home</Link>
                        <Link className="footerWords" to='/'>About us</Link>
                        <Link className="footerWords" to='/'>Our services</Link>
                        <Link className="footerWords" to='/'>Contact</Link>
                        </div>

                    </div>

                    <div className="col-md-4 col-xs-12 ">
                        <a href="https://www.facebook.com/9antra.tn/" className='facebook'>
                            <img src={facebook} alt="" className="monImage" />
                        </a>
                        <a href="https://www.instagram.com/lets_clone_it/" className='instagram'>
                            <img src={instagram} alt="" className="monImage" />
                        </a>
                        <a href="https://9antra.tn/" className='twitter'>
                            <img src={twitter} alt="" className="monImage" />
                        </a>
                        
                        
                        {/* 

                        <a href="https://www.instagram.com/lets_clone_it/" className='phone'><img src={phone} alt="" className="monImage" /></a><a href="https://www.instagram.com/lets_clone_it/" className='youtube'><img src={youtube} alt="" className="monImage" /></a>
                        
  */}
                        
                                 



                    </div>



            


                </div>

            </div>
        </div>

    </footer>
  )
}
