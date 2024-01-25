import React from 'react'
import { Link } from "react-router-dom"
import "./index.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-container">
        <ul>
          <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo2_footer.png" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
        </ul>
        <ul>
          <h4>Quick Links</h4>
          <Link>About</Link>
          <Link>Offers & Discounts</Link>
          <Link>Get Coupon</Link>
          <Link>Contact Us</Link>
        </ul>

        <ul>
          <h4>New Products</h4>
          <Link>Woman Cloth</Link>
          <Link>Fashion Accessories</Link>
          <Link>Man Accessories</Link>
          <Link>Rubber made Toys</Link>
        </ul>

        <ul>
          <h4>Support</h4>
          <Link>Frequently Asked Questions</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Report a Payment Issue</Link>
        </ul>
      </div>
      <div className='footer-bottom'>
        <span>Copyright ©2024 All rights reserved | This template is made with by Colorlib</span>
        <div className='social-media'>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
