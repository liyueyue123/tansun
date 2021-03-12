import {queryCaseCardList, queryCaseInfo, queryCaseUserInfo} from "@/api/cases";


const state = {
  caseCode: '',

  caseInfo: {}

}

const mutations = {
  set_caseId: (state, caseCode) => {
    state.caseCode = caseCode;
  },


  set_caseInfo: (state, data) => {
    state.caseInfo = data;
  }

}

const actions = {
  changeCaseId({commit}, caseCode) {

    commit('set_caseId', caseCode)


    queryCaseInfo(caseCode).then(res => {
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
