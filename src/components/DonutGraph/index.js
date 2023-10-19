import React from 'react'
import './styles.css'

const DonutGraph = (props) => {
  return (
    <div className='donut'>
        <img src={props.image} alt="" className='donutImage'/>
        <div className="numGroup one">
            <p>{props.textOne}</p>
            <p>{props.num1}</p>
        </div>
        <div className="numGroup two">
            <p>{props.text2}</p>
            <p>{props.num2}</p>
        </div>
        <div className="numGroup three">
            <p>{props.text3}</p>
            <p>{props.num3}</p>
        </div>
    </div>
  )
}

export default DonutGraph