import axios from "axios";
import {getToken} from "@/utils/auth";
import {api} from '@/settings'

/**
 * @type {{status: number}}
 */
const host = 'http://195.203.27.95:8080/smartbi/vision/openresource.jsp';
const user = 'user'
const state = {
    password: null
}
let timer=-1
const mutations = {
    set_password(state, ps) {
        state.password = ps;
    }
}
const getters = {
    //催收队列明细表
    //Iff8080810175c1a4c1a418f101761d6e239215a6  会姣
    //I8aaa809c016757fa57fa72630167594128cc2eff  经润
    url1(state) {
        return host + '?resid=' + 'Iff8080810175c1a4c1a418f101761daf072a1766' + '&user=' + user + '&password=' + state.password
    },
    //工作成效检视
    url2(state) {
        return host + '?resid=' + 'bb68d2ab9a2bf19d7d61c075bfcb909f' + '&user=' + user + '&password=' + state.password
    },
    //
    urlHome1(state) {
        return host + '?resid=' + 'Iff8080810175c1a4c1a418f10176ef319b2a57ff' + '&user=' + user + '&password=' + state.password
    },
    urlHome2(state) {
        return host + '?resid=' + 'Iff8080810175c1a4c1a418f10176f0270c815ad1' + '&user=' + user + '&password=' + state.password
    }
}

const actions = {
    getPass({state, commit,dispatch}){
        axios.post(api+'/api-user/smartbi', {'user': user}, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        }).then(res => {
            if (res.data.code == 200) {
                commit('set_password', res.data.data);
            } else {

            }
        })
    },
    init({state, commit,dispatch}) {
        clearInterval(timer)
        dispatch('getPass')
        timer=setInterval(s=>{
            dispatch('getPass')
        },60000*60)

    },
    exit({state, commit,dispatch}) {
        clearInterval(timer)
    }
}

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
}
