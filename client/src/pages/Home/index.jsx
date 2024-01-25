import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainSlider from '../../components/MainSlider'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import Latest from '../../components/Latest'
import Shipping from '../../components/Shipping'

const Home = () => {
  return (
    <div>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <MainSlider />
      <Categories />
      <Products />
      <Latest />
      <Shipping />
    </div>
  )
}

export default Home
