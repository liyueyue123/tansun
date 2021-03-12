import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {title: '首页'}
      }
    ]
  },
  /*{
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: {title: 'Documentation', icon: 'documentation', affix: true}
      }
    ]
  },*/
  /*{
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: {title: 'Guide', icon: 'guide', noCache: true}
      }
    ]
  },*/
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: {title: 'Profile', icon: 'user', noCache: true}
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/systemManage/index.vue'),
        name: 'SystemManage',
        meta: {
          title: '系统管理',
          noCache: true
        }
      },
      {
        path: 'tenantInfo',
        component: () => import('@/views/systemManage/TenantInfo.vue'),
        name: 'TenantInfo',
        hidden:true,
        meta: {
          title: '租户信息',
          noCache: true
        }
      },
    ]
  },
  {
    path: '/organManage',
    component: Layout,
    redirect: '/organManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/organManage/index.vue'),
        name: 'OrganManage',
        meta: {
          title: '机构管理',
          noCache: true
        }
      },
      {
        path: 'addOrgan',
        component: () => import('@/views/organManage/OrganBasicInfo.vue'),
        name: 'AddOrgan',
        hidden:true,
        meta: { title: '添加机构信息' }
      },
      {
        path: 'viewOrgan',
        component: () => import('@/views/organManage/OrganBasicInfo.vue'),
        name: 'ViewOrgan',
        hidden:true,
        meta: { title: '查看机构信息' }
      },
      {
        path: 'editOrgan',
        component: () => import('@/views/organManage/OrganBasicInfo.vue'),
        name: 'EditOrgan',
        hidden:true,
        meta: { title: '修改机构信息' }
      },
    ]
  },
  {
    path: '/userManage',
    component: Layout, 
    redirect: '/userManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/userManage/index.vue'),
        name: 'UserManage',
        meta: { 
          title: '用户管理',
          noCache: true
        }
      },
      {
        path: 'basicInfo',
        component: () => import('@/views/userManage/BasicInfo.vue'),
        name: 'BasicInfo',
        hidden:true,
        meta: { title: '个人基本信息' }
      },
    ]
  },
  {
    path: '/roleManage',
    component: Layout,
    redirect: '/roleManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/roleManage/index.vue'),
        name: 'RoleManage',
        meta: {
          title: '角色管理',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/menuManage',
    component: Layout,
    redirect: '/menuManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/menuManage/index.vue'),
        name: 'MenuManage',
        meta: {
          title: '菜单管理',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/postManage',
    component: Layout,
    redirect: '/postManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/postManage/index.vue'),
        name: 'PostManage',
        meta: {
          title: '岗位管理',
          noCache: true
        }
      },
      {
        path: 'addPost',
        component: () => import('@/views/postManage/PostBasicInfo.vue'),
        name: 'AddPost',
        hidden:true,
        meta: { title: '添加岗位信息' }
      },
      {
        path: 'viewPost',
        component: () => import('@/views/postManage/PostBasicInfo.vue'),
        name: 'ViewPost',
        hidden:true,
        meta: { title: '查看岗位信息' }
      },
      {
        path: 'editPost',
        component: () => import('@/views/postManage/PostBasicInfo.vue'),
        name: 'EditPost',
        hidden:true,
        meta: { title: '修改岗位信息' }
      }
    ]
  },
  {
    path: '/groupManage',
    component: Layout,
    redirect: '/groupManage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/groupManage/index.vue'),
        name: 'GroupManage',
        meta: {
          title: '用户组管理',
          noCache: true
        }
      },
      {
        path: 'addGroup',
        component: () => import('@/views/groupManage/GroupBasicInfo.vue'),
        name: 'AddGroup',
        hidden:true,
        meta: { title: '添加用户组信息' }
      },
      {
        path: 'viewGroup',
        component: () => import('@/views/groupManage/GroupBasicInfo.vue'),
        name: 'ViewGroup',
        hidden:true,
        meta: { title: '查看用户组信息' }
      },
      {
        path: 'editGroup',
        component: () => import('@/views/groupManage/GroupBasicInfo.vue'),
        name: 'EditGroup',
        hidden:true,
        meta: { title: '修改用户组信息' }
      }
    ]
  },
  // {
  //   path: '/workbench',
  //   component: Layout,
  //   redirect: '/workbench/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/workbench/index.vue'),
  //       name: 'workbench',
  //       meta: {
  //         title: '催收工作台',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/casesearch',
  //   component: Layout,
  //   redirect: '/casesearch/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/casesearch/index.vue'),
  //       name: 'casesearch',
  //       meta: {
  //         title: '案件精确查找',
  //         noCache: true
  //       }
  //     },
  //     {
  //       path: 'user',
  //       component: () => import('@/views/casesearch/user.vue'),
  //       name: 'caseuser',
  //       hidden: true,
  //       meta: {
  //         title: '客户信息',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/casemgr',
  //   component: Layout,
  //   redirect: '/casemgr/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/casemgr/index.vue'),
  //       name: 'workbench',
  //       meta: {
  //         title: '案件管理',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/role',
  //   component: Layout,
  //   redirect: '/role/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/role/index.vue'),
  //       name: 'role',
  //       meta: {
  //         title: '角色权限及人员管理',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/workflow',
  //   component: Layout,
  //   redirect: '/workflow/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/workflow/index.vue'),
  //       name: 'workflow',
  //       meta: {
  //         title: '工作流引擎',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/setting',
  //   component: Layout,
  //   redirect: '/setting/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/setting/index.vue'),
  //       name: 'setting',
  //       meta: {
  //         title: '参数工作台',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: '/report',
  //   component: Layout,
  //   redirect: '/report/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/report/index.vue'),
  //       name: 'report',
  //       meta: {
  //         title: '报表中心',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },


  // {
  //   path: '/quality',
  //   component: Layout,
  //   redirect: '/quality/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/quality/index.vue'),
  //       name: 'quality',
  //       meta: {
  //         title: '品质管控工作台',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/batch',
  //   component: Layout,
  //   redirect: '/batch/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/batch/index.vue'),
  //       name: 'batch',
  //       meta: {
  //         title: '批量业务工作台',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/publictool',
  //   component: Layout,
  //   redirect: '/publictool/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/publictool/index.vue'),
  //       name: 'publictool',
  //       meta: {
  //         title: '公共功能',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  /*{
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },*/

  /*{
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: {title: 'Icons', icon: 'icon', noCache: true}
      }
    ]
  },*/

  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  /*{
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: {title: 'Create Article', icon: 'edit'}
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: {title: 'Edit Article', noCache: true, activeMenu: '/example/list'},
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: {title: 'Article List', icon: 'list'}
      }
    ]
  },*/

  /*{
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: {title: 'Tab', icon: 'tab'}
      }
    ]
  },*/

 /* {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: {title: '401', noCache: true}
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: {title: '404', noCache: true}
      }
    ]
  },*/

 /* {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: {title: 'Error Log', icon: 'bug'}
      }
    ]
  },*/

 /* {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: {title: 'Export Excel'}
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: {title: 'Export Selected'}
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: {title: 'Merge Header'}
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: {title: 'Upload Excel'}
      }
    ]
  },*/

 /* {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: {title: 'Zip', icon: 'zip'},
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: {title: 'Export Zip'}
      }
    ]
  },*/

  /*{
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: {title: 'PDF', icon: 'pdf'}
      }
    ]
  },*/
  /*{
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },*/

  /*{
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: {title: 'Theme', icon: 'theme'}
      }
    ]
  },*/

  /*{
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: {title: 'Clipboard', icon: 'clipboard'}
      }
    ]
  },*/

  /*{
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: {title: 'External Link', icon: 'link'}
      }
    ]
  },*/

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
