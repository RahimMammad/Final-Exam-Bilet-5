import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Header = () => {
     const [isOpen, setIsOpen] = useState(false)
     const [isSticky, setIsSticky] = useState(false)

     const handleScroll = () => {
          const scrollPosittion = window.scroll
          setIsSticky(scrollPosittion > 50)
     }

     useEffect(() => {
          window.addEventListener("scroll", handleScroll)

          return (() => {
               window.removeEventListener("scroll", handleScroll)
          })
     })

     const handleOpenMenu = () => {
          setIsOpen(!isOpen)
          console.log(isOpen);
     }
  return (
    <>
    <nav className={`navbar ${isSticky ? "active" : ""}`}>
          <div className='navbar-main-container'>
               <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" />
               <ul className='navbar-main'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/add"}>Add</NavLink>
                    <NavLink to={"/basket"}><i className="fa-solid fa-cart-shopping"></i></NavLink>
                    <NavLink to={"/wishlist"}><i className="fa-regular fa-heart"></i></NavLink>
               </ul>
               <button>Sign In</button>
               <i onClick={handleOpenMenu} id='bars' className="fa-solid fa-bars"></i>
          </div>
    </nav>

    <nav id='sidebar' style={{top: isOpen ? "63px" : "-400px"}}>
          <ul>
               <NavLink to={"/"}>Home</NavLink>
               <NavLink to={"/add"}>Add</NavLink>
               <NavLink to={"/basket"}><i className="fa-solid fa-cart-shopping"></i></NavLink>
               <NavLink to={"/wishlist"}><i className="fa-regular fa-heart"></i></NavLink>
               <button>Sign In</button>
          </ul>
    </nav>
    </>
  )
}

export default Header
