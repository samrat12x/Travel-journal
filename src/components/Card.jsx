import React from 'react'

export default function Card(props) {
  const Url=props.coverImg;
      return (
<>
    <div className='card  hover:animate-bounce  border-2 mt-8  rounded-full pl-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
      
    <img src={`src/assets/images/${Url}`} className='card_img rounded-full border-2 border-slate-950 ' />    
    
<div className='pl-4'>
  <h1 className='card_title text-xl pr-8 pt-8 font-semibold text-white'>{props.title}</h1>
  <p className='card_description pr-8 pt-6 font-medium'> {props.description}</p>
  
  </div>      
    </div>
</>
  )
}
