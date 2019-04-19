import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  asideCollapse: false,
  asideFlag: '终端开关管理'
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
