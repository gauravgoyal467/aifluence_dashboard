import React from 'react'
import './styles.css'

const Card = ({title,list}) => {
  return (
    <div className='card'>
        <h4>{title}</h4>
        <div className='cardItemList'>
        {
        list.map((element,index)=>{
          return(
            <p key={index}>{element}</p>
          )
        })
        }
        </div>
    </div>
  )
}

export default Card