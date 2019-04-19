const SET_ASIDECOLLAPSE = 'SET_ASIDECOLLAPSE'
const SET_ASIDEFLAG = 'SET_ASIDEFLAG'

export default {
  [SET_ASIDECOLLAPSE](state, paras) {
    state.asideCollapse = paras.asideCollapse
  },
  [SET_ASIDEFLAG](state, paras) {
    state.asideFlag = paras.asideFlag
  }
}
