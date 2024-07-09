export function getCartFromStorage(){
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    return cart ? cart : []    
}