const state = {
  isModalLogin: false,
  isModalRegister: false
}
const mutations = {
  'CLOSE_MODAL_LOGIN'(state, data) {
    state.isModalLogin = false
  },
  'OPEN_MODAL_LOGIN'(state, data) {
    state.isModalRegister = false
    state.isModalLogin = true
  },
  'CLOSE_MODAL_REGISTER'(state, data) {
    state.isModalRegister = false
  },
  'OPEN_MODAL_REGISTER'(state, data) {
    state.isModalLogin = false
    state.isModalRegister = true
  },
}
const actions = {
  'CLOSE_MODAL_LOGIN'(context, data) {
    context.commit('CLOSE_MODAL_LOGIN', data)
  },
  'OPEN_MODAL_LOGIN'(context, data) {
    context.commit('OPEN_MODAL_LOGIN', data)
  },
  'CLOSE_MODAL_REGISTER'(context, data) {
    context.commit('CLOSE_MODAL_REGISTER', data)
  },
  'OPEN_MODAL_REGISTER'(context, data) {
    context.commit('OPEN_MODAL_REGISTER', data)
  }
}
const getters = {
  isModalLogin: state => state.isModalLogin,
  isModalRegister: state => state.isModalRegister
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

