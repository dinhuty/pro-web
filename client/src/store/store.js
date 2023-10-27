import { createStore } from 'vuex'
import product from './modules/product'
import cart from './modules/cart'
import common from './modules/common'
import auth from './modules/auth'

const store = createStore({
    modules: {
        product,
        cart,
        common,
        auth
    }
})

export default store
