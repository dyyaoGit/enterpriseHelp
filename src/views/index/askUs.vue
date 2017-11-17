<template>
    <div class="ask-us">
        <div class="rec-server-title">
            <h2>
                <i class="iconfont icon-zixun"></i>
                有问题就咨询企帮宝的伙伴吧
                <span>数名精英骨干为您提供一对一的服务</span>
            </h2>

            <div class="talking clear-fixed">
                <i class="kefu"></i>
                <dl>
                    <dt class="">7×24在线聊天</dt>
                    <dd>专业客服在线对话，为您解决遇到的问题</dd>
                </dl>

                <a href="#" class="btn-primary">
                    立即咨询
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'askUs',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">

    .ask-us{
        width: 1226px;
        margin: 20px auto 0;
        h2 {
            font-size: 18px;
        }
    }

    .talking{
        background: #fff;
        /*padding:;*/
        padding: 30px 0;
        border: 1px solid #f1f1f1;
    }

    .kefu{
        float: left;
        margin-left: 253px;
        margin-right: 45px;
        width: 100px;
        height: 100px;
        background-image: url(../../../static/images/contact-icon.png);
        background-repeat: no-repeat;
    }
    .talking dl{
        float: left;
        width: 430px;
        margin-top: 20px;
    }
    .talking dl dd{
        margin: 0;
        padding: 0;
        color: #757575;
    }
    .btn-primary{
        float: left;
        margin-top: 30px;
        display: inline-block;
        width: 158px;
        height: 38px;
        padding: 0;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
        -webkit-transition: all .4s;
        transition: all .4s;
        background: #ff6700;
        border-color: #ff6700;
        color: #fff!important;
    }
    .btn-primary:hover{
        background-color: #f25807;
        border-color: #f25807;
        color: #fff;
    }
    .icon-zixun{
        font-size: 30px!important;
        vertical-align: middle;
    }
</style>
