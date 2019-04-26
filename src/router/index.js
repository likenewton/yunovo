
// 公共页面
import Login from '@/components/login.vue'
import Sysmenu from '@/components/sysmenu.vue'

// operation_platform(运营平台-侧边栏页面)
import OperationPlatform from '@/components/operation_platform/index.vue'
import Blank from '@/components/operation_platform/blank.vue'
import Ocinfo from '@/components/operation_platform/ocinfo.vue'
import Orginfo from '@/components/operation_platform/orginfo.vue'
import Ocpush from '@/components/operation_platform/ocpush.vue'
import Doilist from '@/components/operation_platform/doilist.vue'
import Doidispense from '@/components/operation_platform/doidispense.vue'
import Eqfilter from '@/components/operation_platform/eqfilter.vue'
import Scenetri from '@/components/operation_platform/scenetri.vue'

// 非侧边栏页面
import Doicreate from '@/components/operation_platform/form/doicreate.vue' // 新建doi应用
import Xmlcreate from '@/components/operation_platform/form/xmlcreate.vue' // 新建xml
import Filtercreate from '@/components/operation_platform/form/filtercreate.vue' // 新建设备过滤器
import Displancreate from '@/components/operation_platform/form/displancreate.vue' // 新建分发计划
import Tricreate from '@/components/operation_platform/form/tricreate.vue' // 新建触发器

// 展示元素
import Formvali from '@/components/elements/formvali.vue'
import Form from '@/components/elements/form.vue'
import Popup from '@/components/elements/popup.vue'
import Table from '@/components/elements/table.vue'
import Echarts from '@/components/elements/echarts.vue'

let router = new VueRouter({
  // 路由第一大类必须是侧边栏对应路由，非侧边栏的路由从第二大类开始部署
  routes: [{
    path: '/operation_platform',
    name: 'OPERATIONPLATFORM',
    component: OperationPlatform,
    redirect: '/operation_platform/menu1',
    children: [{
        path: 'menu',
        title: '模板元素',
        name: 'menu',
        component: Blank,
        redirect: '/operation_platform/menu/table',
        icon: 'el-icon-fontmima',
        children: [{
          path: 'table',
          name: 'table',
          component: Table,
          title: '表格',
          aside: true
        }, {
          path: 'formvali',
          name: 'formvali',
          component: Formvali,
          title: '表单验证',
          aside: true
        }, {
          path: 'doilist',
          name: 'doilist',
          component: Doilist,
          title: '列表',
          aside: true
        }, {
          path: 'form',
          name: 'form',
          component: Form,
          title: '表单元素',
          aside: true
        }, {
          path: 'popup',
          name: 'popup',
          component: Popup,
          title: '通知-弹框',
          aside: true
        }, {
          path: 'echarts',
          name: 'echarts',
          component: Echarts,
          title: '图表',
          aside: true
        }, {
          path: 'doicreate',
          name: 'doicreate',
          component: Doicreate,
          title: {
            create: '新建DOI应用', // 一个表单可能有三种状态， 新建、编辑、查看
            update: '编辑DOI应用',
            check: '查看DOI应用',
          },
          aside: false
        }, {
          path: 'xmlcreate',
          name: 'xmlcreate',
          component: Xmlcreate,
          title: {
            create: '新建XML应用',
            update: '编辑XML应用',
            check: '查看XML应用',
          },
          aside: false
        }, {
          path: 'filtercreate',
          name: 'filtercreate',
          component: Filtercreate,
          aside: false
        }, {
          path: 'displancreate',
          name: 'displancreate',
          component: Displancreate,
          aside: false
        }, {
          path: 'tricreate',
          name: 'tricreate',
          component: Tricreate,
          aside: false
        }]
      },

      // {
      //   path: 'menu',
      //   title: '终端开关管理',
      //   name: 'menu',
      //   component: Blank,
      //   redirect: '/operation_platform/menu/ocinfo',
      //   icon: 'el-icon-fontyonghu',
      //   children: [{
      //     path: 'ocinfo',
      //     name: 'ocinfo',
      //     component: Ocinfo,
      //     title: '开关信息维护',
      //     aside: true
      //   }, {
      //     path: 'orginfo',
      //     name: 'orginfo',
      //     component: Orginfo,
      //     title: '机构开关信息维护',
      //     aside: true
      //   }, {
      //     path: 'ocpush',
      //     name: 'ocpush',
      //     component: Ocpush,
      //     title: '开关推送',
      //     aside: true
      //   }]
      // }, {
      //   path: 'menu',
      //   title: 'DOI应用管理',
      //   name: 'MENU',
      //   component: Blank,
      //   redirect: '/operation_platform/menu/doilist',
      //   icon: 'el-icon-fontfengge',
      //   children: [{
      //     path: 'doilist',
      //     name: 'doilist',
      //     component: Doilist,
      //     title: 'DOI应用列表',
      //     aside: true
      //   }, {
      //     path: 'doidispense',
      //     name: 'doidispense',
      //     component: Doidispense,
      //     title: 'DOI应用分发',
      //     aside: true
      //   }, {
      //     path: 'eqfilter',
      //     name: 'eqfilter',
      //     component: Eqfilter,
      //     title: '设备筛选器',
      //     aside: true
      //   }, {
      //     path: 'scenetri',
      //     name: 'scenetri',
      //     component: Scenetri,
      //     title: '场景触发器',
      //     aside: true
      //   }]
      // }

    ]
  }, {
    path: '',
    redirect: '/login',
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/sysmenu',
    name: 'sysmenu',
    component: Sysmenu
  }]
})

export default router
