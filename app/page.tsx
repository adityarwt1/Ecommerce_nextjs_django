"use client"
import React, { useEffect } from 'react'


const page = () => {
  const fetchResult =async ()=>{
    const response = await fetch("http://localhost:5096");
    const data  = await response.json()
    console.log(data)
  }
  useEffect(()=>{
    fetchResult()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default page
