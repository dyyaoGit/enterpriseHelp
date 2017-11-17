<template>
    <div class="rec-sever">
        <div class="rec-server-title">
            <h2>
                <i class="iconfont icon-zhuanye"></i>
                推荐服务
                <span>我们有最专业的团队，只为解决您任何需要的需求</span>
            </h2>
        </div>

        <div class="rec-sever-content clear_fixed">
            <a href="#" class="sever-item" v-for="item in 6">
                <div class="item-header">
                    <div class="sever-item-title">
                        公司注册
                    </div>
                    <div class="sever-desc">
                        线上提交材料，5-15天证照到手
                    </div>
                </div>
                <div class="item-bottom">
                    <span class="price-l">
                        518元起
                    </span>
                    <span class="order-r">
                        立即预约
                    </span>
                </div>
            </a>
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
    .rec-sever{
        width: 1226px;
        margin: 20px auto 0;
    }
    .rec-server-title h2{
        font-size: 18px;
        font-weight: 700;
        color: #000;
    }
    .rec-server-title h2>span{
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #666;
        font-weight: 500;
    }
    .icon-zhuanye{
        font-size: 32px!important;
        font-weight: 400;
        vertical-align: middle;
    }

    .sever-item{
        float: left;
        width: 392px;
        border: 1px solid #eee;
        margin: 0 25px 25px 0;
        box-sizing: border-box;
        padding: 25px;
        border-radius: 10px;
        transition: all .2s;
    }
    .sever-item:hover{
        transform: translate3d(0,-2px,0);
        box-shadow: 0 10px 15px rgba(0,0,0,.1);
    }
    .sever-item-title{
        font-size: 18px;
        color: orangered;
        margin-bottom: 10px;
    }
    .item-bottom{
        border-top: 1px solid #eee;
        padding-top: 5px;
    }
    .sever-desc{
        margin-bottom: 5px;
        color: #333;
    }
    .price-l{
        color: #ff6700;
        float: left;
        padding: 8px 0;
    }
    .order-r{
        color: #fff;
        border: 1px solid #eee;
        padding: 8px 10px;
        background: #ff6700;
        border-radius: 5px;
        text-align: center;
        float: right;
        vertical-align: middle;
    }
    .sever-item:nth-child(3),.sever-item:nth-child(6){
        margin-right: 0;
    }

</style>
