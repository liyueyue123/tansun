import {queryCaseCardList, queryCaseInfo, queryCaseUserInfo} from "@/api/cases";
import Cookies from 'js-cookie'
import axios from "axios";
import {api} from "@/settings";
import {getToken} from "@/utils/auth";

/**
 * status: 1 签入了 2
 * @type {{status: number}}
 */
const state = {
  status:1,
  landed:false,
  duration:0,
  phoneNumber:null,
  phoneNumberCnt:0,
  phoneNumbersCnt:0,
  callId:null,
  callCnt:0,
  callType:0,
  wellCaseCode:0,
  wellCustName:'',
  callRelation:'',
  sessionId:null
}

const mutations = {
  set_landed(state,value){
    state.landed=value;
  },
  set_record_added(state){
    state.callCnt++;
  },
  set_number(state,number){
    state.phoneNumbers=[];
    state.phoneNumber=number;
    state.phoneNumberCnt++;
  },
  set_numbers(state,numbers){
    state.phoneNumbers=numbers;
    state.phoneNumbersCnt++;
  },
  set_type(state,number){
    state.callType=number;
  },
  set_duration(state,duration){
    //Cookies.set('wellDuration',duration)
    state.duration=duration;
  },
  set_wellCaseCode(state,c){
    state.wellCaseCode=c;
  },
  set_wellCustName(state,c){
    state.wellCustName=c;
  },
  set_callId(state, callId) {
    Cookies.set('callId',callId)
    state.callId=callId;
  },
  set_relation(state, relation) {
    state.callRelation=relation;
  },

  set_ssid(state, sid) {
    state.sessionId=sid;
  }
}
let timer=-2;
const actions = {
  //恢复保存的callid

  getSsid({state,commit,dispatch}) {

    /*axios.post('http://195.203.190.134:31020/api/loginByEmail', {'email': 'cddc@cmbc.com',password:'1qaz@WSX'}, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'application/json'
      }
    }).then(res => {
      commit('set_ssid',res.sessionId)
    }).catch(e=>{

    })*/
  },
  initSavedCallId({state,commit,dispatch}) {
    /*let c=Cookies.get('callId')

    if (!!c) {
      commit('set_callId',c)
    }*/
    dispatch('getSsid');
    clearInterval(timer)
    timer=setInterval(s=>{

      dispatch('getSsid')
    },1000*60*6)
  },
  exit({state, commit,dispatch}) {
    clearInterval(timer)
  },

  makeCall({state,commit,dispatch}, {callTarget,type,caseCode,custName,relation}){
    commit('set_type',type)
    commit('set_number',callTarget)
    commit('set_wellCaseCode',caseCode)
    commit('set_wellCustName',custName)
    commit('set_relation',relation)
  },

  oneByOne({state,commit,dispatch}, {callTargets,type,caseCode,custName}){
    commit('set_type',type)
    commit('set_numbers',callTargets)
    commit('set_wellCaseCode',caseCode)
    commit('set_wellCustName',custName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
