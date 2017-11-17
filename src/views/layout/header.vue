<template>
    <div class="header-wrapper">
        <div class="header clear-fixed">
            <div class="header-item clear-fixed">
                <div class="ser-tel">
                    <div>服务热线： 400-888-8888</div>
                </div>
                <div class="ser-time">
                    服务时间： 9:00-18：00
                </div>
                <div class="follow-us">
                    关注我们：
                    <div class="weixin">
                        <i class="iconfont icon-weixin"></i>
                        <div class="wx-qrcode">
                            <img src="http://www.itenbo.com/Content/img/index/sprict-msg.jpg" alt="wx" style="display: block">
                            <div class="wx-desc" style="background: #fff;width: 100px;">
                                官方微信
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-item1">
                <ul>
                    <li class="login1">
                        <a href="#">登录</a>
                    </li>
                    <li class="sign-in">
                        <a href="#">免费注册</a>
                    </li>
                    <li class="my-order">
                        <a href="#">我的订单</a>
                    </li>
                    <li class="personal-center">
                        <a href="#">个人中心</a>
                    </li>
                    <li class="about-us">
                        <a href="#">关于我们</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .header-wrapper {
        background-color: #333;
        color: #b0b0b0;
    }

    .header a:link, a:visited {
        color: #b0b0b0;
        font-size: 12px;
    }

    .header a:hover, .header a:active {
        color: #31a5e7;
        font-size: 12px;
    }

    .header {
        width: 1226px;
        margin: 0 auto;
    }

    .header-item {
        float: left;
        padding: 8px 0;
    }

    .header-item > div {
        float: left;
        padding: 0 10px 0 0;
    }

    .follow-us {
        position: relative;
    }

    .weixin {
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
    }

    .icon-weixin {
        font-size: 20px !important;
    }

    .icon-weixin:hover {
        color: rgb(98, 185, 0);
    }

    .weixin:hover .wx-qrcode {
        opacity: 1;
    }

    .wx-qrcode {
        opacity: 0;
        transition: opacity .2s;
        border: 1px solid #eee;
        position: absolute;
        top: 30px;
        left: -42px;
        width: 100px;
        text-align: center;
        color: #000;
        img {
            width: 100px;
        }
    }


    .header-item1 {
        float: right;
        padding: 8px;
    }

    .header-item1 > ul > li {
        float: left;
        padding: 0 0 0 10px;
    }
</style>
