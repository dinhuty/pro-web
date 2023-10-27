import { CartAction } from "./types.actions";

export default {
    [CartAction.ADD_PRODUCT_TO_CART](context, data) {
        context.commit(CartAction.SET_CART_ITEMS, data)
    },
    [CartAction.UPDATE_CART_ITEM_QUANTITY](context, data){
        context.commit(CartAction.UPDATE_CART_ITEM_QUANTITY, data)
    },
    
};
