const state = {
  authenticated: !!localStorage.getItem('current_user')
}

const mutations = {
  LOGIN (state) {
    state.authenticated = true
    localStorage.setItem('current_user', true)
  },

  LOGOUT (state) {
    state.authenticated = false
    localStorage.setItem('current_user', null)
  }
}

const getters = {

}

const actions = {
  login ({ commit }) {
    commit('LOGIN')
  },

  logout ({ commit }) {
    commit('LOGOUT')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
