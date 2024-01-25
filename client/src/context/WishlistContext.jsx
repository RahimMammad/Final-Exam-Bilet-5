import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
     const [wishlistArr, setWishlistArr] = useState(localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : [])

     localStorage.setItem("Wishlist", JSON.stringify(wishlistArr))

     const addToWishlist = (item) => {
          const existedProduct = wishlistArr.find((x) => x._id === item._id)
          if(!existedProduct) {
               setWishlistArr([...wishlistArr, item])
               Swal.fire({
                    title: "Success",
                    text: "Added to Wishlist",
                    icon: "success"
               });
               return
          }Swal.fire({
               title: "OOPS",
               text: "Already in Wishlist",
               icon: "warning"
          });
     }

     const removeFromWishlist = (id) => {
          setWishlistArr(wishlistArr.filter((item) => item._id !== id))
          Swal.fire({
               title: "Success",
               text: "Successfully Removed from Wishlist",
               icon: "success"
          });
     }

     const data = {wishlistArr, setWishlistArr, addToWishlist, removeFromWishlist}

     return (
          <WishlistContext.Provider value={data}>
               {children}
          </WishlistContext.Provider>
     )
}

export default WishlistProvider