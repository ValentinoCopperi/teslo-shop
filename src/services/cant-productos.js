export default function getTotalProducts(cart) {
    let cantidad = 0;

    cart.forEach((prod) => {
        cantidad += prod.cantidad
    })

    return cantidad
}