import Vue from 'vue'
import Router from 'vue-router'
// operation_platform(运营平台)
import OperationPlatform from '@/components/operation_platform/index.vue'
import Blank from '@/components/operation_platform/blank.vue'
import Ocinfo from '@/components/operation_platform/ocinfo.vue'
import Orginfo from '@/components/operation_platform/orginfo.vue'
import Ocpush from '@/components/operation_platform/ocpush.vue'
import Doilist from '@/components/operation_platform/doilist.vue'
import Doidispense from '@/components/operation_platform/doidispense.vue'
import Eqfilter from '@/components/operation_platform/eqfilter.vue'
import Scenetri from '@/components/operation_platform/scenetri.vue'

import Doicreate from '@/components/operation_platform/form/doicreate.vue' // 新建doi应用
import Xmlcreate from '@/components/operation_platform/form/xmlcreate.vue' // 新建xml
import Filtercreate from '@/components/operation_platform/form/filtercreate.vue' // 新建设备过滤器
import Displancreate from '@/components/operation_platform/form/displancreate.vue' // 新建分发计划
import Tricreate from '@/components/operation_platform/form/tricreate.vue' // 新建触发器

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
      }, {
        path: 'xmlcreate',
        name: 'XMLCREATE',
        component: Xmlcreate
      }, {
        path: 'filtercreate',
        name: 'FILTERCREATE',
        component: Filtercreate
      },{
        path: 'displancreate',
        name: 'DISPLANCREATE',
        component: Displancreate
      },{
        path: 'tricreate',
        name: 'TRICREATE',
        component: Tricreate
      }, {
        path: 'doidispense',
        name: 'DOIDISPENSE',
        component: Doidispense,
        title: 'DOI应用分发'
      }, {
        path: 'eqfilter',
        name: 'EQFILTER',
        component: Eqfilter,
        title: '设备筛选器'
      }, {
        path: 'scenetri',
        name: 'SCENETRI',
        component: Scenetri,
        title: '场景触发器'
      }]
    }]
  }]
})

export default router
