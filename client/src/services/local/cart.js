import { LocalStorageService } from "./base.localstorage";

const CART_KEY = 'cart';


export const CartService = {

    addItem(product) {
        localStorage.setItem(CART_KEY, JSON.stringify(product));
    },

    getCart() {
        if (typeof window !== "undefined") {
            if (LocalStorageService.get(CART_KEY)) {
                const cart = JSON.parse(LocalStorageService.get(CART_KEY));
                return cart;
            }
        }
        return []
    },
    // removeItem(product) {
    //     if (LocalStorageService.get(CART_KEY)) {
    //         let cartItems = JSON.parse(LocalStorageService.get(CART_KEY));
    //         cartItems = cartItems.filter(ci => ci.id !== product.id);
    //         LocalStorageService.set(CART_KEY, JSON.stringify(cartItems));
    //         return cartItems
    //     }
    //     // this should never happen actually
    //     debugger;
    //     return [];
    // },
    emptyCart() {
        if (typeof window !== 'undefined') {
            LocalStorageService.remove(CART_KEY);
        }
    },
};