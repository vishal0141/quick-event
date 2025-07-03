import React from 'react'
import Swiper from './components/Swiper'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AutoSlider from './components/AutoSlider'
import WhatsAppFloat from './components/WhatsAppFloat'
import Slide2 from './components/Slide2'
// import EventTechLanding from './components/EventTechLanding'
// import Practice from './components/Practice'
export default function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <div className="w-full ">
       <AutoSlider/>
    </div>
    <Slide2/>
    {/* <EventTechLanding/> */}
    <Swiper/>
    <WhatsAppFloat phoneNumber="+919376195533" />
    {/* <Practice/> */}
    </>
  )
}
