import React from 'react'
import "./index.scss"

const Latest = () => {
  return (
    <div className='latest-main'>
     <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png" alt="" />
     <div className="latest">
          <div className="text">
               <h1>Get Our Latest Offers News</h1>
               <p>Subscribe news latter</p>
          </div>
          <div className="inp-btn">
               <input type="text" />
               <button>Shop Now</button>
          </div>
     </div>
    </div>
  )
}

export default Latest
