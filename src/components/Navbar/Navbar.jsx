import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./Navbar.scss"


// AiTwotoneHeart
// AiFillCaretDown
// BsCart4
// BsFillPersonFill

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrap">
            <div className="left">
                <div className="item">
                    <img src='img/en.png' alt='/'/>
                    <AiFillCaretDown/>
                </div>
                <div className="item">
                <span>USD</span>
                <AiFillCaretDown/>
            </div>
            <div className="item">
                <Link to="/products/1">Women</Link>
            </div>
            <div className="item">
                <Link to="/products/2">Men</Link>
            </div>
            <div className="item">
                <Link to="/products/3">Children</Link>
            </div>
            
            </div>
            <div className="center">
                <Link to="/">Flourish Gold</Link>
        
            </div>
            <div className="right">
            <div className="item">
                <Link to="/">Home</Link>
            </div>

            <div className="item">
                <Link to="/">Contact</Link>
            </div>

            <div className="item">
                <Link to="/">Stores</Link>
            </div>

            <div className="icons">
             <AiOutlineSearch/>
             <BsFillPersonFill />
             <AiTwotoneHeart/>
             <div className='cartIcon'>
               < BsCart4/>
               <span>0</span>
             </div>
            </div>
          </div>
        
  </div>
    </div>
  )
}

export default Navbar