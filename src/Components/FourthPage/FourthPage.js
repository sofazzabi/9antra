import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeaderDynamicSectionList from './HeaderDynamicSectionList'
import AgendaSection from './AgendaSection'
import MyFooter from '../MyFooter/MyFooter'
export default function FourthPage() {
  return (
    <div>
        <Navbar />
        <HeaderDynamicSectionList />
        <AgendaSection />
        <MyFooter />
    </div>
  )
}
