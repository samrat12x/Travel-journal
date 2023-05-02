import React from 'react'

export default function Card(props) {
  const Url=props.coverImg;
      return (
<>
    <div className='card'>
    <img src={`src/assets/images/${Url}`} className='card_img' />    
<div>
  <h1 className='card_title'>{props.title}</h1>
  <p className='card_description'> {props.description}</p>
  
  </div>      
    </div>
</>
  )
}
