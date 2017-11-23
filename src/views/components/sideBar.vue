<template>
    <div class="side-bar-wrap">
        <div class="side-bar">
            <h3 class="all-ser">
                全部服务项目
            </h3>
            <ul class="ser-lists">
                <li class="ser-item">
                    公司注册
                    <router-link to="/register">
                        <span class="item-title">
                            注册公司，工商变更
                        </span>
                    </router-link>
                    <div class="class-item-child">
                        <div class="item-child-title">
                            注册公司
                        </div>
                        <div class="child-links">
                            <a href="#" v-for="item in 6">注册有限公司</a>
                        </div>
                    </div>
                </li>
                <li class="ser-item">
                    工商注册
                    <router-link to="/fiscalAgent">
                        <span class="item-title">
                        注册公司，工商变更
                    </span>
                        <!--<i class="iconfont icon-more jiantou"></i>-->
                    </router-link>
                    <div class="class-item-child">
                        <div class="item-child-title">
                            注册公司
                        </div>
                        <div class="child-links">
                            <a href="#" v-for="item in 6">注册有限公司</a>
                        </div>
                    </div>
                </li>
                <li class="ser-item">
                    工商注册
                    <router-link to="#">
                        <span class="item-title">
                        注册公司，工商变更
                    </span>
                        <!--<i class="iconfont icon-more jiantou"></i>-->
                    </router-link>
                    <div class="class-item-child">
                        <div class="item-child-title">
                            注册公司
                        </div>
                        <div class="child-links">
                            <a href="#" v-for="item in 6">注册有限公司</a>
                        </div>
                    </div>
                </li>
                <li class="ser-item">
                    工商注册
                    <router-link to="#">
                        <span class="item-title">
                        注册公司，工商变更
                    </span>
                        <!--<i class="iconfont icon-more jiantou"></i>-->
                    </router-link>
                    <div class="class-item-child">
                        <div class="item-child-title">
                            注册公司
                        </div>
                        <div class="child-links">
                            <a href="#" v-for="item in 6">注册有限公司</a>
                        </div>
                    </div>
                </li>
                <li class="ser-item">
                    工商注册
                    <router-link to="#">
                        <span class="item-title">
                        注册公司，工商变更
                    </span>
                        <!--<i class="iconfont icon-more jiantou"></i>-->
                    </router-link>
                    <div class="class-item-child">
                        <div class="item-child-title">
                            注册公司
                        </div>
                        <div class="child-links">
                            <a href="#" v-for="item in 6">注册有限公司</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>


<style scoped>
    .side-bar-wrap {
        position: relative;
        width: 1226px;
        margin: 0 auto;
    }
    .side-bar {
        position: absolute;
        width: 281px;
        height: 381px;
        top: 0;
        left: 0;
        z-index: 999;
        background: rgba(198,224,252, .6);
        text-align: left;
        box-sizing: border-box;
        color: #333;
    }

    .side-bar .all-ser {
        height: 48px;
        line-height: 48px;
        font-weight: 400;
        padding-left: 20px;
        border-bottom: 1px solid rgba(255,255,255,.6);
    }

    .ser-item {
        font-size: 18px;
        font-weight: 400;
        padding-left: 20px;
        line-height: 64px;
        line-height: 64px;
        color: #333;
        padding-right: 15px;
        box-sizing: border-box;
        border-bottom: 1px dashed rgba(255,255,255,.6);
    }
    .ser-item:last-child {
        border-bottom: none;
    }

    .ser-item>a{
        font-weight: 400;
        font-size: 14px;
        color: #333;
        line-height: 65px;
    }

    .ser-item .jiantou {
        float: right;
    }

    .ser-item .class-item-child {
        display: none;
        position: absolute;
        left: 281px;
        width: 680px;
        top: 0;
        height: 381px;
        padding: 50px 50px 50px 50px;
        box-sizing: border-box;
        border: 1px solid #eee;
        line-height: 1;
        background: #fff;
        color: #333;
        opacity: .8;
    }

    .ser-item:hover {
        background: #ff6700;

    }

    .item-child-title {
        font-size: 18px;
        float: left;
        margin-right: 50px;
    }

    .ser-item:hover .class-item-child {
        display: block;
    }

    .class-item-child .child-links {
        line-height: 1;
        max-width: 450px;
        font-size: 14px;
        float: left;
    }

    .class-item-child .child-links a {
        margin: 0 16px 16px 0;
        color: #333;
    }

    .child-links a:link, .child-links a:visited {
        color: #333;
        display: inline-block;
    }

    .child-links a:hover, .child-links a:active {
        color: #ff6700;
        display: inline-block;
    }



</style>
