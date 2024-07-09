export default function getTotalPrize(cart){
    let total = 0;

    cart.forEach((prod) => {
        total += (prod.cantidad * prod.producto.price)
    })

    return total
}