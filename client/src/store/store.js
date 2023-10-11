import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            count: 0,
            products: null
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        getData({ commit }, { id }) {
            console.log(ctx)
        }
    }
})

export default store
