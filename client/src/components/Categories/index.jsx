import React from 'react'
import "./index.scss"

const Categories = () => {
  return (
    <div className='category-main'>
      <h1>Shop by Category</h1>
      <div className="categories-main-container">
          <div className="category-1">
               <div className="text">
                    <h2>Owmen's</h2>
                    <button>Best New Deal</button><br />
                    <span>New Collection</span>
               </div>
          </div>
          <div className="category-2">
               <div className="text">
                    <span>Discount!</span>   
                    <h2>Winter Cloth</h2>
                    <p>New Collection</p>
                    
               </div>
          </div>
          <div className="category-3">
               <div className="text">
                    <h2>Man's Cloth</h2>
                    <button>Best New Deal</button><br />
                    <span>New Collection</span>
               </div>
          </div>
      </div>
    </div>
  )
}

export default Categories
