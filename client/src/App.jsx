import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Add from './pages/Add'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'
import Detail from './pages/Detail'
import {HelmetProvider} from "react-helmet-async"
import "./App.scss"
import {Toaster} from "react-hot-toast"
import BasketProvider from './context/BasketContext'
import WishlistProvider from './context/WishlistContext'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HelmetProvider>
        <div><Toaster/></div>
        <BasketProvider>
          <WishlistProvider>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />}/>
                <Route path='/add' element={<Add />}/>
                <Route path='/basket' element={<Basket />}/>
                <Route path='/wishlist' element={<Wishlist />}/>
                <Route path='/:id' element={<Detail />}/>
              </Route>
            </Routes>
          </WishlistProvider>
        </BasketProvider>
        </HelmetProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
