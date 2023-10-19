import React from 'react'
import './styles.css'
import girlImage from '../../assets/images/girlImage.png'
import verified from '../../assets/images/verified.png'
import instagram from "../../assets/images/Instagram.png"
import facebook from "../../assets/images/FaceBook.png"
import twitter from "../../assets/images/Twitter.png"
import flag from "../../assets/images/flag.png"
import location from "../../assets/images/location.png"
import love from "../../assets/images/oval-love.png"
import idCard from "../../assets/images/idCard.png"
import medal from "../../assets/images/Medal.png"
import info from "../../assets/images/info.png"
import sell from "../../assets/images/sell.png"


import SocialIcon from '../SocialIcon'
import Button from '../Button'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <div className="imageContainer">
        <img src={girlImage} alt="profileImage" className='girlImage'/>
        <img src={verified} alt="verified" className='verified'/>
      </div>
      <div className="details">
        <div className="title">
          <h1>Zoe Sennett</h1>
          <div className="socialIcons">
            <SocialIcon imageIcon={instagram}/>
            <SocialIcon imageIcon={twitter}/>
            <img src={facebook} alt="twitterLogo" />
          </div>
          <div className="address">
            <img src={location} alt="locationIcon" />
            <p>Chicago,USA</p>
            <img src={flag} alt="flag" />
          </div> 
        </div>
        <div className='skills'>
          <img src={love} alt="logo" />
          <p>Fashion,Cosmetics,Design</p>
        </div>
        <div className='idCard'>
          <img src={idCard} alt="logo" />
          <p>My name is Helena and I'm an influencer from Sweden that loves to take beautiful pictures that inspire. I'm purposeful, committed and love to being creative.</p>
        </div>
        <div className="buttons">
          <div className="button">
          <Button text={"+ Add To Campaign"}/>
          <Button image={sell}/>
          </div>
          <div className="tag">
            <img src={medal} alt="medal" />
            <div className="tag-detail">
              <h3>79 <span>/100</span></h3>
              <h4>Excellent</h4>
              <p>Quality Score <img src={info} alt="i" /></p>
            </div>
          </div>
        </div>
       

      </div>
      
    </div>
  )
}

export default Profile