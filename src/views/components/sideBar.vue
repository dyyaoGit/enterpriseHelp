<template>
    <div class="side-bar">
        <h3 class="all-ser">
            全部服务项目
        </h3>
        <ul class="ser-lists">
            <li class="ser-item" v-for="item in 4">
                <router-link to="#">
                    工商注册
                    <span class="item-title">
                        注册公司，工商变更
                    </span>
                    <i class="iconfont icon-more jiantou"></i>
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
    .side-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 260px;
        height: 100%;
        z-index: 999;
        background: rgba(0, 0, 0, .6);
        text-align: left;
        box-sizing: border-box;
        color: #fff;
    }

    .side-bar .all-ser {
        height: 63px;
        line-height: 60px;
        font-weight: 400;
        padding-left: 15px;
        margin-bottom: 6px;
    }

    .ser-item {
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
    }

    .ser-item>a {
        color: #fff;
        line-height: 63px;
    }

    .ser-item .jiantou {
        float: right;
    }

    .ser-item .class-item-child {
        display: none;
        position: absolute;
        left: 260px;
        width: 680px;
        top: 0;
        height: 331px;
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
