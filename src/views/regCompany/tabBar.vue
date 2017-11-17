<template>
    <div class="tabBar">
        <ul class="tab-header clear-fixed" ref="tabHeader" :class="{'fixed-top': fixed}">
            <li :class="{active: activeIndex === 1}" @click="activeIndex = 1" v-show="$route.name === '公司注册'">服务介绍</li>
            <li :class="{active: activeIndex === 2}" @click="activeIndex = 2">常见问题</li>
            <li :class="{active: activeIndex === 3}" @click="activeIndex = 3" v-show="$route.name === '公司注册'">售后服务</li>
            <li :class="{active: activeIndex === 4}" @click="activeIndex = 4">企帮宝简介</li>
        </ul>
        <div class="tab-all">
            <div class="tab-item" v-if="activeIndex === 1" v-show="$route.name === '公司注册'">
                <div class="desc-box desc-box1">
                    <img src="http://caishui.zbjimg.com/caishui%2Fcaishui%2F53a3b1ea-2b6f-4b72-9901-82463f32ade8.bmp%2Forigine%2F44569a7a-9169-409b-82d9-cf955b12d64a" alt="企帮宝注册公司服务介绍">
                </div>
            </div>
            <div class="tab-item" v-if="activeIndex === 2">
                <div class="desc-box desc-box2">
                    <img src="http://caishui.zbjimg.com/caishui%2Fcaishui%2F0b039080-dd47-423d-99c0-106374d6c1a2.png%2Forigine%2F5612b35e-a71a-4d31-89c6-d1a8e8c8339a" alt="常见问题">
                </div>
            </div>
            <div class="tab-item" v-if="activeIndex === 3" v-show="$route.name === '公司注册'">
                <div class="desc-box desc-box3">
                    <img src="http://caishui.zbjimg.com/caishui%2Fcaishui%2F2c70bdc6-ba4e-47f4-b035-95bd1cd1b441.png%2Forigine%2F9e1a8cc3-c848-4e75-b802-e682a27fd065" alt="售后服务">
                </div>
            </div>
            <div class="tab-item" v-if="activeIndex === 4">
                <div class="desc-box desc-box4">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'tabBar',
        data() {
            return {
                activeIndex: 1,
                fixed: false
            }
        },
        mounted() {
            if(this.$route.name === '财务代理'){
                this.activeIndex = 2
            }
            else if(this.$route.name === '商标服务'){
                this.activeIndex = 2;
            }
            this.$nextTick(() => {
                let _this = this;
                const Top = _this.$refs.tabHeader.offsetTop
                window.addEventListener('scroll',() => {
                    if(Top <= (document.documentElement.scrollTop)){
                        _this.fixed = true;
                    }
                    else{
                        _this.fixed = false
                    }
                })
            })
        }
    }
</script>


<style lang="scss">
    .tabBar {
        width: 1226px;
        margin: 0 auto;
        margin-bottom: 20px;
        border: 1px solid #dadada;
        border-top: none;
        padding-bottom: 15px;
    }
    .tab-header {
        border: 1px solid #dadada;
        border-right: none;
        border-left: none;
        background: #f6f6f6;
    }
    .tab-header>li {
        float: left;
        padding: 0 36px;
        line-height: 48px;
        cursor: pointer;
    }
    .tabBar .tab-header .active {
        color: #fff;
        background-color: #3d92f2;
        font-weight: 700;
    }
    .tabBar .tab-all .active {

    }
    .fixed-top {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        margin: 0 auto;
        width: 1226px;
    }
    /*.desc-box1 {*/
        /*height: 783px;*/
        /*background: url(http://a.zbjimg.com/static/account/widget/business/content/img/why_select_4f78bdc.jpg) no-repeat;*/
        /*-webkit-background-size:  100% 100%;*/
        /*background-size:  100% 100%;*/
    /*}*/
    /*.desc-box2 {*/
        /*height: 1500px;*/
        /*background: url(http://caishui.zbjimg.com/caishui%2Fcaishui%2F0b039080-dd47-423d-99c0-106374d6c1a2.png%2Forigine%2F5612b35e-a71a-4d31-89c6-d1a8e8c8339a) no-repeat;*/
        /*-webkit-background-size: 100%;*/
        /*background-size: 100%;*/
    /*}*/
    .desc-box {
        img {
            width: 100%;
        }
    }
</style>
