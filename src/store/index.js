import getters from './getter'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  asideCollapse: false,
  asideFlag: {}
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
