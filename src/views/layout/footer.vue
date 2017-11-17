<template>
    <div class="footer">
        <div class="footer-content clear-fixed w">
            <div class="footer-left fll">
                <dl>
                    <dt>关于企帮宝</dt>
                    <dd>
                        <a>关于企帮宝</a>
                        <a>联系我们</a>
                    </dd>
                </dl>

                <dl>
                    <dt>服务指南</dt>
                    <dd>
                        <a>下单流程</a>
                        <a>索取发票</a>
                    </dd>
                </dl>

                <dl>
                    <dt>售后服务</dt>
                    <dd>
                        <a>售后流程</a>
                        <a>售后政策</a>
                        <a>取消订单</a>
                    </dd>
                </dl>

                <dl>
                    <dt>商家服务</dt>
                    <dd>
                        <a>入驻标准</a>
                        <a>合作加盟</a>
                    </dd>
                </dl>
            </div>

            <div class="footer-right flr">
                <div class="wx fll">
                    <img src="http://www.itenbo.com/Content/img/index/sprict-msg.jpg" alt="wx">
                    <span class="wx-desc">
                        官方微信
                    </span>
                </div>

                <div class="our-sev-phone fll">
                    <div class="phone-400">
                        400-820-9899
                    </div>
                    <div class="work-time">
                        周一至周五 9:00 -18:00
                    </div>
                    <a class="call-phone" href="#">
                        <i class="iconfont icon-phone-copy-copy"></i>
                        服务热线
                    </a>
                </div>
            </div>

        </div>

        <div class="friend-link w">

            <span style="font-weight: bold;margin-right:  20px;font-size: 13px;">
                友情链接:
            </span>
            <a href="#">
                腾博国际
                <i>/</i>
            </a>
            <a href="#">
                国内公司注册
                <i>/</i>
            </a>
            <a href="#">
                境外公司注册
                <i>/</i>
            </a>
            <a href="#">
                公司变更
                <i>/</i>
            </a>
            <a href="#">
                商标注册
                <i>/</i>
            </a>
            <a href="#">
                专利
                <i>/</i>
            </a>
            <a href="#">
                著作权
                <i>/</i>
            </a>
        </div>
        <div class="copyright">
            <!--COPYRIGHT ©2017 腾博智慧云商 版权所有 粤ICP备16012323号-4 联系方式： 4006-788-989-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {}
        }
    }
</script>


<style scoped>
    .fll {
        float: left;
    }
    .flr {
        float: right;
    }
    .w {
        width: 1226px;
        margin: 0 auto;
    }
    .footer{
        padding: 65px 0 0 10px;
        background: #f6f6f6;
        overflow: hidden;
    }
    .footer .footer-left{
        overflow: hidden;
        width: 820px;
        border-right: 1px solid #ddd;
    }

    .footer-content dl{
        float: left;
        width: 205px;
    }
    .footer-content dl dt{
        font-size: 18px;
        font-weight: 700;
    }
    .footer-content dl dd{
        margin-top: 10px;
    }
    .footer-content dl dd a{
        color: #666;
        display: block;
        line-height: 25px;
    }

    .footer-right .wx{
        text-align: center;
        width: 150px;
    }
    .footer-right .wx img{
        display: block;
        font-size: 12px;
        width: 100%;
    }
    .our-sev-phone{
        margin-left: 50px;
    }
    .our-sev-phone .phone-400{
        font-size: 24px;
        color: #333333;
    }
    .work-time{
        font-size: 14px;
        color: #aaa;
    }
    .call-phone{
        box-sizing: border-box;
        width: 110px;
        display: block;
        margin-top: 17px;
        border-radius: 2px;
        background: #f00;
        font-weight: 500;
        padding: 4px 10px;
        text-align: right;
        color: #fff!important;
    }
    .icon-phone-copy-copy{
        margin-right: 8px;
        /*font-size: 20px!important;*/

    }
    .friend-link{
        margin-top: 15px;
        border-top: 1px solid #ddd;
        padding-top: 15px;
        font-size: 12px;
    }
    .friend-link i{
        text-align: center;
        width: 30px;
        display: inline-block;
    }
    .copyright{
        height: 30px;
        font-size: 12px;
        color: #aaa;
        margin-top: 25px;
        text-align: center;
    }

    /*页脚*/


</style>
