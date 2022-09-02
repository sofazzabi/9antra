import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Video from '../Video/Video'
import Description from './Description/Description';
import Properties from '../Properties/Properties';
import Courses from './Courses/Courses';
import Details from './Details/Details';
import Question from '../Question/Question';
import Testimoanials from '../Testimonials/Testimoanials';
import MyFooter from '../MyFooter/MyFooter';

export default function () {
  return (
    <div>

    <Navbar />
    <Header />
    <Video />
    <Description />
    <Properties />
    <Courses />
    <Details />
    
    <Testimoanials />
    <Question />
    <MyFooter />



    </div>
  )
}
