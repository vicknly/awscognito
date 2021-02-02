import { Auth } from 'aws-amplify'

export const state = () => ({
  user: { status: { loggeduser: false }, user: null }
})

export const mutations = {
  set(state, user) {
    state.user = { status: { loggeduser: !!user }, user }
  }
}

export const actions = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      commit('set', user)
      return user
    } catch (error) {
      commit('set', null)
    }
  },

  async register(_, { email, password, phone_number, family_name, name }) {
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: {
          email,
          phone_number,
          family_name,
          name
      }
    })
    return user
  },

  async confirmRegistration(_, { email, code }) {
    return await Auth.confirmSignUp(email, code)
  },

  async login({ commit }, { email, password }) {
    const user = await Auth.signIn(email, password)
    commit('set', user)
    return user
  },

  async logout({ commit }) {
    await Auth.signOut()
    commit('set', null)
  },

  async forgotPassword(_, email) {
    return await Auth.forgotPassword( email )
  },

  async forgotPasswordSubmit(_, { username, code, password }) {
    return await Auth.forgotPasswordSubmit(username, code, password)
  }
}