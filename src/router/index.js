import Vue from 'vue'
import Router from 'vue-router'
// operation_platform(运营平台)
import OperationPlatform from '@/components/operation_platform/index.vue'
import Blank from '@/components/operation_platform/blank.vue'
import Ocinfo from '@/components/operation_platform/ocinfo.vue'
import Orginfo from '@/components/operation_platform/orginfo.vue'
import Ocpush from '@/components/operation_platform/ocpush.vue'
import Doilist from '@/components/operation_platform/doilist.vue'
import Doicreate from '@/components/operation_platform/doicreate.vue'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/operation_platform',
    name: 'OPERATIONPLATFORM',
    component: OperationPlatform,
    redirect: '/operation_platform/menu',
    children: [{
      path: 'menu',
      title: '终端开关管理',
      component: Blank,
      redirect: '/operation_platform/menu/ocinfo',
      children: [{
        path: 'ocinfo',
        name: 'OCINFO',
        component: Ocinfo,
        title: '开关信息维护'
      }, {
        path: 'orginfo',
        name: 'ORGINFO',
        component: Orginfo,
        title: '机构开关信息维护'
      }, {
        path: 'ocpush',
        name: 'OCPUSH',
        component: Ocpush,
        title: '开关推送'
      }]
    }, {
      path: 'menu',
      title: 'DOI应用管理',
      component: Blank,
      redirect: '/operation_platform/menu/doilist',
      children: [{
        path: 'doilist',
        name: 'DOILIST',
        component: Doilist,
        title: 'DOI应用列表'
      }, {
        path: 'doicreate',
        name: 'DOICREATE',
        component: Doicreate
      }]
    }]
  }]
})

export default router
