import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: [
      {
        name: 'main',
        count: 0,
      },
      {
        name: 'cite',
        count: 0,
      },
      {
        name: 'claim',
        count: 0,
      },
      {
        name: 'settings',
        count: 0,
      }
    ]
  },
  getters: {
    CURRENT: state => name => {
      let el =  state.page.find(item => item.name === name);
      return el.count
    },
  },
  mutations: {
    SET_COUNT: (state, name) => {
        let el =  state.page.find(item => item.name === name);
        return el.count = el.count + 1
    },
  }
})
