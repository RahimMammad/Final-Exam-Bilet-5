import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import "./index.scss"
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Detail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState({})
  const {addToBasket} = useContext(BasketContext)
  const {addToWishlist} = useContext(WishlistContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/${id}`)
      setProductData(response.data)
    }
    fetchData()
  }, [])
  return (
    <div>
     <Helmet>
          <title>Detail</title>
      </Helmet>
      <div className='detail'>
        <img src={productData.image} alt="" />
        <div className="detail-info">
          <h2>{productData.name}</h2>
          <div className='price'>
            <span id='discountPrice'>${productData.discountPrice}.00</span>
            <span id='price'>${productData.price}.00</span>
          </div>
          <div className="btn-flex">
               <button onClick={() => addToWishlist(productData)}>Add to Wishlist</button>
               <button onClick={() => addToBasket(productData)}>Add To Basket</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
