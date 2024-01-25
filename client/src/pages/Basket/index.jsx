import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
  const {basketArr, subTotal, removeFromBasket, modifyCount} = useContext(BasketContext)
  return (
    <div>
      <Helmet>
          <title>Basket</title>
      </Helmet>
      <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>DiscountPrice</td>
          <td>Counter</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
            basketArr && basketArr.map((item) => {
              return (
                <tr key={item._id}>
                  <td className='image'><img src={item.image} alt="" /></td>
                  <td><h3>{item.name}</h3></td>
                  <td><span>${item.price}.00</span></td>
                  <td><span>${item.discountPrice}.00</span></td>
                  <td>
                    <div>
                      <button onClick={() => modifyCount(false, item)}>-</button>
                      <span>{item.count}</span>
                      <button onClick={() => modifyCount(true, item)}>+</button>
                    </div>
                  </td>
                  <td className='btn'><button onClick={() =>removeFromBasket(item._id)}>Delete</button></td>
                </tr>
              )
            })
        }
      </tbody>  
      <tfoot>
        <tr>
          <td><span>SubTotal: ${subTotal}.00</span></td>
        </tr>
      </tfoot>
    </table>
    </div>
  )
}

export default Basket
