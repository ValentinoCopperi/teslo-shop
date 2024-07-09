export default function getDeliveredCart(cart) {
    const deliveredCart = [];

    cart.forEach((itemCart) => {
        const existingItem = deliveredCart.find((prod) => itemCart.producto.slug === prod.producto.slug);
        if (existingItem) {
            existingItem.cantidad += itemCart.cantidad;
        } else {
            // Copia el itemCart para no mutar el array original
            deliveredCart.push({ ...itemCart });
        }
    });

    return deliveredCart;
}
