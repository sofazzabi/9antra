import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeaderSec from './HeaderSec'
import Paths from './Paths'
import Coach from './Coach'
import RealWorld from './RealWorld'
import MyFooter from '../MyFooter/MyFooter'

export default function SecondPage() {
  return (
    <div>
        <Navbar />
        <HeaderSec />
        <Paths />
        <Coach />
        <RealWorld />
        <MyFooter />

    </div>
  )
}
