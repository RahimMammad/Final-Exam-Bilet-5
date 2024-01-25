import React, { useContext } from 'react'
import "./index.scss"
import {useNavigate} from "react-router-dom"
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const ProductCard = ({item}) => {
  const {addToBasket} = useContext(BasketContext)
  const {addToWishlist} = useContext(WishlistContext)
     const navigate = useNavigate()
  return (
    <div className='product'>
      <div className='image'>
          <img src={item.image} alt="" />
          <div className='btns'>
               <div className="btn-flex">
               <i onClick={() => navigate(`${item._id}`)} className="fa-solid fa-eye"></i>
               <i onClick={() => addToWishlist(item)} className="fa-regular fa-heart"></i>
               <i onClick={() => addToBasket(item)} className="fa-solid fa-cart-shopping"></i>
               </div>
          </div>
      </div>
      <h3>{item.name}</h3>
      <div className='price'>
          <span id='discountPrice'>${item.discountPrice}.00</span>
          <span id='price'>${item.price}.00</span>
      </div>
    </div>
  )
}

export default ProductCard
