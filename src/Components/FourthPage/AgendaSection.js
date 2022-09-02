import React from 'react'
import './AgendaSection.css'
import Agenda2 from './Agenda2.png'

export default function AgendaSection() {
  return (
    <section>
        <div className="container">
             <div className="row rowAgenda">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-4 colAgenda1">
                        <p className='paragraphAgenda'>We don't have upcoming events at the moment.</p>
                        <p className='paragraphAgenda'>But stay tuned, much is coming up very soon!</p>
                    </div>

                    <div className="col-md-8 colAgenda2">
                        <img src={Agenda2} alt="" className="img-fluid anilated imgAgenda" />


                    </div>
                </div>
             </div>

        </div>

    </section>
  )
}
