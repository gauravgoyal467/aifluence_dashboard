import React from 'react'
import './styles.css'
import tick from '../../assets/images/check-one.png'

const SocialIcon = ({imageIcon}) => {
  return (
    <div className='socialIcon'>
        <img src={imageIcon} alt="icon" />
        <img src={tick} alt="tick" className='tick' />
    </div>
  ) 
}

export default SocialIcon