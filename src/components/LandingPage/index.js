import React from 'react'
import './styles.css'
import SideBar from '../SideBar'
import RightSection from '../RightSection'

const LandingPage = () => {
  return (
    <div className='landingPage'>
        <SideBar/>   
        <RightSection/>
    </div>
  )
}

export default LandingPage