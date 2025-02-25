import { createContext, useEffect, useState } from "react";
import { dummyData } from "../dummy/data";

export const createStore = createContext()

const StoreProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [wishlist, setwishlist] = useState([])
  const [compare, setCompare] = useState([])

  const [data, setData] = useState(dummyData)
  const [viewProduct, setViewProduct] = useState(false)

 
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    const storedCompare = localStorage.getItem("compare");
  
    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedWishlist) setwishlist(JSON.parse(storedWishlist)); // Fixed
    if (storedCompare) setCompare(JSON.parse(storedCompare)); // Fixed
  }, []);

  useEffect(() => {
  if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}, [cart]);

  

  const addToCart = (data) => {
    console.log(data)
    const exist = cart.find((x) =>  x.id === data.id)
    console.log(exist)
    if (exist) {
      alert("Item already in cart")
    } else {
      const updateCart = [...cart, { ...data, qty: 1 }];
      setCart(updateCart);
      alert("Item added in cart")
      localStorage.setItem("cart", JSON.stringify(updateCart))
    }
  }

  const addCompare = (data) => {
    console.log(data)
    const exist = compare.find((x) =>  x.id === data.id)
    console.log(exist)
    if (exist) {
     alert("Item already in cart")
    } else {
      const updateCompare = [...compare, { ...data }];
      setCompare(updateCompare);
      alert("Item added in compare")
      localStorage.setItem("compare", JSON.stringify(updateCompare))
    }
  }

  const addWishlist = (data) => { 
    const exist = wishlist.find((x) =>  x.id === data.id)
    console.log(exist, "Compare")
    if (exist) {
     alert("Item already in cart")
    } else {
      const updateWishlist = [...wishlist, { ...data}]
      setwishlist(updateWishlist);
      alert("Item added in wishlist")
      localStorage.setItem("wishlist", JSON.stringify(updateWishlist))
    }
  }

  const cartQty = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)

  const incCart = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage immediately
    return updatedCart;
  }

  const decCart = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  }

   const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id!== id)
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage immediately
    return updatedCart;
  }

  const deleteFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id)
    setwishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Sync with localStorage immediately
    return updatedWishlist;
  }
  const resetCompare = () => {
    setCompare([])
    localStorage.setItem("compare", JSON.stringify([])); // Sync with localStorage immediately
  }
  /*useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);*/
  

  console.log(cart)

  return (
    <createStore.Provider value={{ resetCompare, data, setViewProduct, deleteFromWishlist, removeFromCart, decCart, incCart, viewProduct, cartQty, addCompare, compare, addToCart, cart, wishlist, addWishlist}}>
      {children}
    </createStore.Provider>
  )
}

export default StoreProvider