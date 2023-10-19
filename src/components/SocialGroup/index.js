import React from 'react'
import './styles.css'

const SocialGroup = ({text,iconImage}) => {
  return (
    <div className='socialGroup'>
        <p>{text}</p>
        <img src={iconImage} alt="imgIcon" />
    </div>
  )
}

export default SocialGroup