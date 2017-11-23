import Vue from 'vue'
import Router from 'vue-router'
import layout from '~views/layout/layout'
import indexPage from '~views/index'

let regPage = function(resolve) {
    return require(['../views/regCompany/index.vue'],resolve)
}




Vue.use(Router)




let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default',
            component: layout,
            redirect: '/index',
            children: [{path: 'index', component: indexPage,name: '首页',meta: {title: '首页-企帮宝-注册公司-代理记账'}}],
        },
        {
            path: '/register',
            meta: {
                title: '公司注册'
            },
            component: layout,
            children: [{path: '', component: regPage, meta: {title: '注册公司'},name: '公司注册'}]
        },
        {
            path: '/test',
            name: 'test',
            component: resolve => require(['~views/test'],resolve),
            meta: {title: '我是测试界面'}
        },
        {
            path: '/fiscalAgent',
            component: layout,
            children: [{name: '财务代理', path: '',component: resolve => require(['~views/fiscalAgent'], resolve),meta: {title: '代理记账-记账公司'}}]
        },
        {
            path: '/TMservices',
            component: layout,
            children: [{name: '商标服务', path: '', component: resolve => require(['~views/TMservices'], resolve), meta: {title: '商标注册-代办商标-商标变更'}}]
        },
        {
            path: '/legalService',
            component: layout,
            children: [{name: '法律服务', path: '', component: resolve => require(['~views/legalService'], resolve), meta: {title: '企帮宝-注册公司-法律服务'}}]
        },
        {
            path: '/setMeal',
            component: layout,
            children: [{name: '创业套餐', path: '', component: resolve => require(['~views/setMeal'],resolve), meta: {title: '企帮宝-创业套餐-代理记账'}}]
        },
        {
            path: '/ganhuo',
            component: layout,
            children: [{name: '干货文章', path: '', component: resolve => require(['~views/ganhuo'],resolve), meta: {title: '企帮宝-干货文章'}}]
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router
