import { ProductAction } from "./types.actions";

export default {
    [ProductAction.local.SET_PRODUCTS](state, data) {
        state.products = data.products;
    }
}