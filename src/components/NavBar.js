import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logo-clear.png'
import '../css/Home.css'
import CartWidget from "./CartWidget";


export const NavBar = ()=> {
  const navigate = useNavigate();

  return (
    <div className='navbox'>
      <div onClick={() => navigate('/home')} className='leftside'>
        <img src={logo} alt='NoFungibleStore'/>
      </div>
      <div className='rightside'>
        <CartWidget />
      </div>
    </div>
  )
}