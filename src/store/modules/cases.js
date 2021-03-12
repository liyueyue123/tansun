import {queryCaseInfo, queryCaseUserInfo} from "@/api/cases";


const state = {
  caseId: '',

  caseUserInfo: {},
  caseInfo: {}

}

const mutations = {
  set_caseId: (state, caseId) => {
    state.caseId = caseId;
  },

  set_caseUserInfo: (state, caseUserInfo) => {
    state.caseUserInfo = caseUserInfo;
  },

  set_caseInfo: (state, data) => {
    state.caseInfo = data;
  }

}

const actions = {
  changeCaseId({commit}, caseId) {

    commit('set_caseId', caseId)

    queryCaseUserInfo(caseId).then(res => {
      commit('set_caseUserInfo', res.data)
    })


    queryCaseInfo(caseId).then(res => {
      commit('set_caseInfo', res.data)
    })


  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
