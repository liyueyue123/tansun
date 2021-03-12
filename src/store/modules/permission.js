import { getMenus } from '@/api/user'
import { asyncRoutes, constantRoutes } from '@/router'
import { getToken } from '@/utils/auth'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(routes, tmp) {
  if (tmp.name) {
    return routes.some(r => r.meta && r.meta.title.includes(tmp.name))
  } else {
    return true
  }
}
// 获取下标
function getIndex(routes,tmp){
  let i = routes.length;
  while (i--){
    if(routes[i].meta&&routes[i].meta.title==tmp.name) return i
  }
  return -1
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes allRoutes
 * @param datas  
 */
export function filterAsyncRoutes(routes, datas) {
  const res = []
  routes.forEach(eachRoute=>{
    if(eachRoute.meta){
      if(eachRoute.meta.hidden==true){
        res.push(eachRoute)
        // console.log('add hidden route',eachRoute.meta)
      }else{
        let find=datas.find(d=>{return d.name==eachRoute.meta.title});
        if(find){
          // console.log('find route',find.meta)
          let copyRoute={...eachRoute,children:[]};
          res.push(copyRoute);
          if(Array.isArray(eachRoute.children)&&Array.isArray(find.subMenus)){
            // console.log('eachRoute---',eachRoute,find.subMenus)
            eachRoute.children.forEach(childRoute=>{
              if(childRoute.meta){
                if((childRoute.meta.hidden==true)){
                  copyRoute.children.push(childRoute)
                  // console.log('add hidden child route',childRoute.meta)
                }else{
                  let findChildren=find.subMenus.find(_=>{return _.name==childRoute.meta.title});
                  if(findChildren){
                    // console.log('find child route',findChildren.meta)
                    copyRoute.children.push(childRoute);
                  }
                }
              }
            })
          }
        }
      }
    }

    
    
  })
  

  return res
}

const state = {
  token:getToken(),
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      getMenus(state.token).then(res=>{
        const { data }  = res;
        accessedRoutes = filterAsyncRoutes(asyncRoutes, data)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      },err=>{
        
      })
    })
  },
  resetRoutes({commit}){
    return new Promise(resolve=>{
      commit('SET_ROUTES', [])
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
