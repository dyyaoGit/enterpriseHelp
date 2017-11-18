<template>
    <div class="price-header fixed-box">
        <div class="ori-pri">
            <div class="order-wrap">
                <div class="order-num">
                    <div class="number">
                        9898人
                    </div>
                    <div class="suc">
                        预定成功
                    </div>
                </div>
                <dl class="order-price">
                    <dt>企帮宝价：</dt>
                    <dd><slot></slot></dd>
                </dl>
            </div>
            <div class="btns-wrap">
                <div class="btns">
                    <span class="btn-default buy-button" @click="buy">立即预订</span>
                    <span class="btn-default ask-button">咨询客服</span>
                </div>
                <div class="service-protect">
                    <i class="iconfont icon-zhongqingdianxinicon01"></i>
                    网上交易保障中心
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            buy() {
                this.$emit
            }
        }
    }
</script>


<style scoped lang="scss">

    .price-header .ori-pri {
        overflow: hidden;
        background: #fff;
        height: 100%;
    }
    .order-wrap {
        margin: 34px 0 0 29px;
        float: left;
        vertical-align: middle;
    .order-num {
        display: inline-block;
        vertical-align: middle;
        height: 76px;
        width: 76px;
        padding-top: 14px;
        border: 2px solid #6392c8;
        border-radius: 50%;
        color: #888;
        text-align: center;
    .number {
        font-size: 15px;
        font-weight: 700;
    }
    }
    .order-price {
        display: inline-block;
        margin-left: 34px;
    dt {
        display: inline-block;
        font-weight: bold;
        font-size: 14px;
        color: #333;
        text-align: left;
        vertical-align: middle;
    }
    dd {
        display: inline-block;
        font-size: 32px;
        color: #f96a3e;
        font-family: Arial;
        font-weight: 700;
        vertical-align: middle;
        line-height: 1;
    }
    dd::before {
        content: '￥';
        color: #f96a3e;
        font-size: 28px;
    }
    }
    }

    .btns-wrap {
        float: right;
        margin-top: 32px;

    .btn-default {
        display: inline-block;
        border-radius: 4px;
        width: 202px;
        text-align: center;
        line-height: 43px;
        color: #fff;
        font-size: 16px;
        margin-right: 32px;
    }

    .buy-button {
        background: #88b2f5;
    }
    .buy-button:hover{
        background: #409EFF;
    }

    .ask-button {
        background: #ff764e;
    }
    .ask-button:hover{
        background: #ff6700;
    }

    .service-protect {
        margin-top: 10px;
        margin-right: 32px;
        text-align: right;
    }
    .icon-zhongqingdianxinicon01 {
        color: #8d85fd;
        font-size: 20px;
    }


    }
    .fixed-box {
        position: fixed;
        z-index: 998;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;
        border-top: 1px solid #f1f1f1;
        background: #f5f5f5;
        box-shadow: 0 -1px 1px 1px rgba(0,0,0,.2) inset;
        height: 144px;
    }
    .fixed-box .ori-pri {
        width: 1226px;
        margin: 0 auto;
    }
</style>
