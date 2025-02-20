import React from 'react'
import logo from "@/assets/logo.svg"
import google from "@/assets/google.svg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='container bg-[#111111]'>
         <div>
          <img src={logo} alt="#" />
          <Link to={"https://play.google.com/store/games?hl=en"} target='blank'>
          <img src={google} alt="" />
          </Link>
         </div>
        </div>
    </div>
  )
}

export default Footer