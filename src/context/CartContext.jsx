

import { useContext,createContext, useState } from "react"
import { getCartFromStorage } from './../services/cart-service';
const CartContext = createContext()

export default function CartContextProvider ({children}){
    const[cart,setCart] = useState(getCartFromStorage())
    const addProductToCart = (prod,cant) => {
        if(cart.length > 0){
            setCart((prev) => [...prev,{
                producto : prod,
                cantidad : cant
            }])
        }else{
            setCart([{
                producto : prod,
                cantidad : cant
            }])
        }
        const newCart = [...cart,{
            producto : prod,
            cantidad : cant
        }]
        window.localStorage.setItem('cart',JSON.stringify(newCart))
    }

    const deleteAllProducts = (item) => {
        const newCart = cart.filter(prod => prod.producto.slug != item.producto.slug)
        setCart(newCart)
        window.localStorage.setItem('cart',JSON.stringify(newCart))
    }

    const deleteOneProduct = (item) => {
        const updatedCart = cart.map(item => ({ ...item }));

        // Encontramos el índice del producto en el carrito
        const productIndex = updatedCart.findIndex(item => item.producto.slug === item.producto.slug);
    
        if (productIndex !== -1) {  // Si encontramos el producto
            if (updatedCart[productIndex].cantidad > 1) {
                // Reducimos la cantidad en 1
                updatedCart[productIndex].cantidad -= 1;
            } else {
                // Si la cantidad es 1, eliminamos el producto del carrito
                updatedCart.splice(productIndex, 1);
            }
        }
        setCart(updatedCart)
        window.localStorage.setItem('cart',JSON.stringify(updatedCart))
        
    }
   
    return (
        <CartContext.Provider value={{cart,addProductToCart,deleteAllProducts,deleteOneProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext  () {
    return useContext(CartContext)
}