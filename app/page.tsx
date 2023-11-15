'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() { 
  const [name,setname] =useState('Muhammad')
 const namefun =( ) => {
  setname('Muhammad Faheem')
 }



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className=''>HTML tags assignment</h1>
     <h2>Faheem Saif</h2>
     <h3>PIAIC student</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem iste ab dolorem, quo ullam eum perspiciatis cum ipsa quos animi eius, delectus neque expedita fugit ducimus soluta. Labore dolor velit quisquam eaque laborum non cum dolorum repellat adipisci deserunt! Hic rerum possimus voluptates ullam nostrum, obcaecati corrupti. Vero, nulla.</p>
     <h1>My Name is {name}</h1>
     <button onClick={namefun}> Full Name</button>

     

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/cBg6xA5C60s?si=250817HmSA5InwS_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}

    </main>
  )
}
