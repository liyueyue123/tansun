import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter,constantRoutes} from '@/router'
import request from "@/utils/request";

const state = {
  token: getToken(),
  userId:'',
  name: '',
  username: '',
  avatar: '',
  //bmjl,ksjl,tdjl
  roles: [],
  tenantCode:'',  //租户代码
}

const getters={
  // 超管
  superManage(state){
    return state.roles.some(r=>r=='cjgly')
  },
  //工单
  canManagerOrder(state){
    return state.roles.indexOf('qm')!=-1
  },
  // 品控
  qualityManageFlag(state){
    if(state.roles.some(r=>r=='qm')){ //品控总经理
      return 'qm'
    }
    if(state.roles.some(r=>r=='qjl')){  //品控经理
      return 'qjl'
    }
    if(state.roles.some(r=>r=='qp')){ //品控专员
      return 'qp'
    }
    return 'other'
  },
  //首页任务板块
  canShowHomeTaskAndQuery(state){
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    return state.roles.indexOf('bmjl')==-1
  },

  //能否分配任务.能的话是领导.可取消,分配,查看任务.
  canAssignTask(state){
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false;

  },

  //能否获取待待处理任务和协催任务.团队经理,催收员调用.
  canLoadTask(state){

    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return true;

  },
  //能否获取待待处理任务和协催任务.团队经理,催收员调用.
  canExportTask(state){
    if(state.roles.indexOf('cjgly')!=-1){
      return true;
    }
    if(state.roles.indexOf('bmjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false;

  },

  //显示首页左侧其他查询条件中的科室选项. 团队领导不能有.
  canShowHomeQueryDepartment(state) {
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('cjgly')!=-1){
      return true;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    return false
  },

  //显示首页左侧其他查询条件中的团队
  canShowHomeQueryGroup(state) {

    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false
  },

  //显示首页左侧其他查询条件中的策略组
  canShowHomeQueryTeam(state) {

    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false
  },

  //显示首页左侧其他查询条件中的催收员
  canShowHomeQueryMember(state) {

    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false
  },

  //是否能显示今日预测队列
  canShowHomeTodayGuessList(state) {
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }
    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    return true
  },
  //是否能显示今日预退出队列
  canShowHomeTodayQuitList(state) {
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }

    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    return true
  },
  //是否能显示配置任务按钮
  canShowHomeTaskAssignBtn(state) {
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }

    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false
  },

  //是否能显示批量助手
  canShowHomeListBatchHelper(state) {
    if(state.roles.indexOf('bmjl','cjgly')!=-1){
      return false;
    }
    return true
  },
  //是否能显示批量助手重分配选项
  canShowHomeListBatchHelperAssignItem(state) {
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }

    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return false
  },
  //是否能显示批量助手重分配选项
  canShowHomeListBatchHelperHelpItem(state) {
    if(state.roles.indexOf('cjgly')!=-1){
      return false;
    }

    if(state.roles.indexOf('bmjl')!=-1){
      return false;
    }
    if(state.roles.indexOf('ksjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('tdjl')!=-1){
      return true;
    }
    return true
  },
  //能否将录间加入品控队列
  canSubmitAudioToQuality(state) {
    
    if(state.roles.indexOf('qm')!=-1){
      return true;
    }
    if(state.roles.indexOf('qjl')!=-1){
      return true;
    }
    if(state.roles.indexOf('qp')!=-1){
      return true;
    }
    //经理助理?
    if(state.roles.indexOf('jlzl')!=-1){
      return true;
    }

    return false
  },
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_MODIFYFLAG: (state, updFlag) => {
    state.modify_flag = updFlag
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERNAME: (state, name) => {
    state.username = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  TENANT_CODE: (state, tenantCode) => {
    state.tenantCode = tenantCode
  },
  
}

const actions = {
  // user login
  login({ commit,dispatch }, userInfo) {
    // const { username, password } = userInfo
    let formDatas = new FormData();
    Object.keys(userInfo).forEach((key)=>{
      formDatas.append(key,userInfo[key])
    })
    return new Promise((resolve, reject) => {
        login(formDatas).then(response => {
          const { data } = response
          commit('SET_USERID', data.userId)
          commit('SET_TOKEN', data.token.access_token)
          setToken(data.token.access_token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })

    })
  },

  // get user info
  getInfo({ commit, state,dispatch }) {
    dispatch('smartbi/init',null,{root:true})
    dispatch('well/initSavedCallId',null,{root:true})
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {data} = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        // const {id, roles, nickname, userImagePath,openId} = data
        const {id, nickname, userImagePath,openId,username,updFlag} = data
        // roles must be a non-empty array
        // if (!roles || roles.length <= 0) {
        //   reject('getInfo: roles must be a non-null array!')
        // }
        let roles = [];
        //雨姣写的接口拿角色
        request({
          url:'/case/LU10/LU1001',
          method: 'post',
          data: {userId: id }
        }).then(res=>{

          res.data.forEach(rd=>{
            roles.push(rd.roleCode)
          })

          if (roles.length == 0) {
            reject('此用户没有角色信息!')
            return;
          }
          commit('SET_USERID', id)
          commit("TENANT_CODE",openId);
          commit('SET_ROLES', roles)
          commit('SET_NAME', nickname)
          commit('SET_USERNAME', username)
          commit('SET_AVATAR', userImagePath)
          commit('SET_MODIFYFLAG',updFlag)
          resolve(data)

        }).finally(o=>{
          
        })

      }).catch(error => {
        reject(error)
      })

    })
  },

  // user logout
  logout({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      logout().then((res) => {
        commit('SET_USERID', '')
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        dispatch('permission/resetRoutes')
        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })
        // return
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit,dispatch }) {
    dispatch('smartbi/exit',null,{root:true})
    dispatch('well/exit',null,{root:true})
    return new Promise(resolve => {
      commit('SET_USERID', '')
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resetRouter()
      dispatch('permission/resetRoutes')
      dispatch('tagsView/delAllViews', null, { root: true })
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
