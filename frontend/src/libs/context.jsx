import { createContext, useEffect, useState } from "react";
import { dummyData } from "../dummy/data";

export const createStore = createContext()

const StoreProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [wishlist, setwishlist] = useState([])
  const [compare, setCompare] = useState([])

  const [data, setData] = useState(dummyData)
  const [viewProduct, setViewProduct] = useState(false)

 

  const addToCart = (data) => {
    console.log(data)
    const exist = cart.find((x) =>  x.id === data.id)
    console.log(exist)
    if (exist) {
     alert("Item already in cart")
    } else {
      setCart([...cart, { ...data, qty: 1 }]);
      alert("Item added in cart")
      console.log(exist)
      //localStorage.setItem("cart", cart)
    }
  }

  const addCompare = (data) => {
    console.log(data)
    const exist = cart.find((x) =>  x.id === data.id)
    console.log(exist)
    if (exist) {
     alert("Item already in cart")
    } else {
      setCompare([...compare, { ...data }]);
      alert("Item added in cart")
      console.log(exist)
      //localStorage.setItem("cart", cart)
    }
  }

  const addWishlist = (data) => { 
    const exist = wishlist.find((x) =>  x.id === data.id)
    console.log(exist, "Compare")
    if (exist) {
     alert("Item already in cart")
    } else {
      setwishlist([...wishlist, { ...data}]);
      alert("Item added in compare")
      console.log(exist, "Comparing")
      //localStorage.setItem("cart", cart)
    }
  }

  const cartQty = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)

  /*useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse and set cart state
    }
  }, []);*/

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart)

  return (
    <createStore.Provider value={{ data, setViewProduct, viewProduct, cartQty, addCompare, compare, addToCart, cart, wishlist, addWishlist}}>
      {children}
    </createStore.Provider>
  )
}

export default StoreProvider