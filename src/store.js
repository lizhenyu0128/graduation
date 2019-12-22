import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    id: null,
    name: null,
    phone: null,
    w_chart: null,
    articals: [],
    collectArticals: []
  },
  getters: {
    personalInfo: state => state
  },
  mutations: {
    /**
     * @param articals Array
     */
    storeArticals: (state, articals) => {
      let exists = state.articals.filter(art => {
        if (art.id === articals.id) {
          return true
        }
      })
      if (exists.length === 0) {
        state.articals = [...state.articals, articals]
      }
    },
    foreachCollections: (state, articalID) => {
      let s = state.collectArticals.some(art => {
        console.log(~~art.id === ~~articalID)
        return ~~art.id === ~~articalID
      })
      console.log(s)
      return s
    },
    collectArticals: (state, articalID) => {
      state.collectArticals.push(articalID)
    },
    cancelArticals: (state, articalID) => {
      state.collectArticals = state.collectArticals.filter(art => {
        if (~~art.id !== ~~articalID) {
          return true
        }
        return false
      })
      console.log(state.collectArticals)
    },
    setLoginInfo: (state, obj) => {
      state[obj.info] = obj.value
    },
    LOGIN: (state, info) => {
      state.id = info.id
      state.name = info.name
      state.phone = info.phone
      state.w_chart = info.w_chart
    },
    LOGOUT: state => {
      state.name = null
      state.phone = null
      state.w_chart = null
    }
  }
})

export default store
