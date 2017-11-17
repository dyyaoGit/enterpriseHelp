<template>
    <div class="nav clear-fixed">
        <h1 class="logo">
            <img src="../../../static/images/logo.png" alt="logo">
        </h1>
        <ul class="clear-fixed nav-items">
            <li class="main-link" :class="{active: $route.name === '首页'}"><router-link to="/index">首页</router-link></li>
            <li class="main-link" :class="{active: $route.name === '公司注册'}"><router-link to="/register">公司注册</router-link></li>
            <li class="main-link" :class="{active: $route.name === '财务代理'}"><router-link to="/fiscalAgent">财务代理</router-link></li>
            <li class="main-link" :class="{active: $route.name === '商标服务'}"><router-link to="/TMservices">商标服务</router-link></li>
            <li class="main-link" :class="{active: $route.name === '法律服务'}"><router-link to="/legalService">法律服务</router-link></li>
            <li class="main-link" :class="{active: $route.path === ''}"><router-link to="#">创业套餐</router-link></li>
            <li class="main-link" :class="{active: $route.path === ''}"><router-link to="#">帮帮干货</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>


<style scoped>
    .nav {
        margin: 0 auto;
        margin-top: 26px;
        width: 1226px;
        color: #333;
        font-size: 16px;
    }

    .logo {
        float: left;
    }

    .nav-items {
        float: right;
    }

    .main-link {
        float: left;
    }
    .main-link a:hover {
        border-bottom: 2px solid #39f;
    }
    .nav .active > a {
        color: #39f!important;
        border-bottom: 2px solid #39f;
    }


    .nav a:visited {
        color: #333;
    }

    .nav a:hover, .nav a:active {
        color: #39f;
    }

    .nav .main-link>a{
        padding: 16px 8px;
        color: #333;
    }

    .main-link:last-child {
        padding-right: 0;
    }
</style>
