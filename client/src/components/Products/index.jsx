import React, { useState } from 'react'
import "./index.scss"
import UseFetchData from '../../hooks/UseFetchData'
import ProductCard from '../ProductCard'

const Products = () => {
     const {data} = UseFetchData()
     const [inpvalue, setInpValue] = useState("")
     const [sortedData, setSortedData] = useState("default")

     const filteredData = data.filter((item) => item.name.toLowerCase().includes(inpvalue))
     filteredData.sort((a, b) => {
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          const priceA = a.discountPrice
          const priceB = b.discountPrice

          if(sortedData === "asc") {
               return nameA.localeCompare(nameB)
          } else if(sortedData === "desc") {
               return nameB.localeCompare(nameA)
          } else if(sortedData === "High To Low") {
               return priceB - priceA
          } else if(sortedData === 'Low To High') {
               return priceA - priceB
          } else {
               return 0
          }
     })
     
  return (
    <div className='products'>
      <div className="products-top">
          <h1>Latest Products</h1>
          <div className='static'>
               <span>All</span>
               <span>New</span>
               <span>Featured</span>
               <span>Offer</span>
          </div>
      </div>
      <div>
          <input type="text" placeholder='Search' onChange={(e) => setInpValue(e.target.value)}/>
          <select onChange={(e) => setSortedData(e.target.value)}>
               <option value="default">Default</option>
               <option value="asc">A-Z</option>
               <option value="desc">Z-A</option>
               <option value="High To Low">High To Low</option>
               <option value="Low To High">Low To High</option>
          </select>
      </div>

      <div className="products-main-container">
          {
               filteredData && filteredData.map((item) => {
                    return (
                         <ProductCard key={item._id} item={item} />
                    )
               })
          }
      </div>
    </div>
  )
}

export default Products
