import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { setToken, getToken } from '@/utils/token.js'
import { getLogin } from "@/api/login.js";

const store = new Vuex.Store({

  state: {
    // 存储token
    info: {},
    token: getToken()
  },

  mutations: {

    setUser(state, userInfo) {
      state.info = userInfo
    },
    setToken(state, token) {
      state.token = token
      setToken(token);
    }
  },
  actions: {
    handleLogin({ state, commit },  userInfo) {
      return new Promise((resolve, reject) => {
        getLogin(
          userInfo.phone,
          userInfo. password
        ).then(res => {
          //commit('setUser', JSON.parse(JSON.stringify(data)));
          commit('setToken', res.token);
          console.log(state)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getUserInfo({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            const data = res.data
            commit('setUser', data)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    // 退出登录
    handleLogOut({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setToken', '')
          commit('setUser', {})
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
});

export default store;