const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  modify_flag: state => state.user.modify_flag,
  userId: state => state.user.userId,
  tenantCode: state => state.user.tenantCode,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  username: state => state.user.username,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
