import { CartAction } from "./types.actions";
import { CartService } from "@/services/local/cart";

export default {

    [CartAction.SET_CART_ITEMS](state, data) {

        const items = state.cartItems.filter(item => item.product.id === data.product.id)

        if (items.length < 1) {
            state.cartItems.push({
                product: data.product,
                option: data.option,
                quantity: 1,
                id: state.cartItems.length
            });
        } else {
            let checkProductOption = false

            for (const item of items) {
                if (item.option?.color?.value == data.option?.color?.value &&
                    item.option?.attribute?._id == data.option?.attribute?._id) {
                    item.quantity += 1
                    checkProductOption = true
                    break
                }
            }

            if (!checkProductOption) {
                state.cartItems.push({
                    product: data.product,
                    option: data.option,
                    quantity: 1,
                    id: state.cartItems.length
                });
            }
        }
        CartService.addItem(state.cartItems)
    },
    [CartAction.UPDATE_CART_ITEM_QUANTITY](state, { id, type }) {
        const item = state.cartItems.find((product) => product.id === id)
        if (type === 'plus') {
            item.quantity += 1
        } else if (type === 'minus') {
            if (item.quantity > 1) {
                item.quantity -= 1
            } else {
                const index = state.cartItems.findIndex((product) => product.id === id)
                if (index !== -1) {
                    state.cartItems.splice(index, 1)
                }
            }
        }
        CartService.addItem(state.cartItems)

    },
    [CartAction.CLEAR_CART](state) {
        state.cartItems = []
        CartService.addItem(state.cartItems)

    },
    [CartAction.REMOVE_FROM_CART](state) {
        const index = state.cartItems.findIndex((product) => product.id === id)
        if (index !== -1) {
            state.cartItems.splice(index, 1)
        }
        CartService.addItem(state.cartItems)
    },
    [CartAction.INITIAL_CART](state, data) {
        state.cartItems = data
    }
}