import Vue from 'vue'
import Router from 'vue-router'
import layout from '~views/layout/layout'
import indexPage from '~views/index'

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
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router
