'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() { 


 
  
  const [name,setname] =useState('----------------')
 const namefun =( ) => {
 
  setname("Faheem Saif")
 }

const [value,setvalue]= useState('Start')
const namefunn=() =>{
  setvalue("End")
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className=''>HTML tags assignment</h1>
     <h2>Faheem Saif</h2>
     <h3>PIAIC student</h3>
     <p>Hello <br/>
      I m Faheem.
      
     </p>
     <img src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" alt="" />
   

     <label >
      <b> <u>Piaic Fellows</u></b>
     <ul>
     
      <ol><b>Faheem</b></ol>
      <ol><b>Zafeer</b></ol>
      <ol><b>Ali hamza</b></ol>
      <ol><b>Manan Tahir</b></ol>
    
     </ul>
     </label>

     
     <h1>My Name is {name}</h1>
     <h1>Here The Value Output is {value}</h1>
     <button onClick={namefun}>Get Full Name</button>
     <button onClick={namefunn}>Get Full value</button>

     

     

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/cBg6xA5C60s?si=250817HmSA5InwS_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}

    </main>
  )
}
