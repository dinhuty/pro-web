export default {
    cartItems: state => state.cartItems,
    totalPrice: (state) => {
        return state.cartItems.reduce((total, item) => {
            return total + item.quantity*item.option.attribute.price
        }, 0)
    },
    getTotalProduct: state => state.cartItems.length
}