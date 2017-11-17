<template>
    <div class="hot-wrapper">
        <div class="hot mt_20">
            <h2 class="hot-title">
                资讯热点
                <span>
                    Hot News
                </span>
            </h2>
            <div class="hot-content">
                <a href="#" class="fll news-left">
                    <dl style="overflow: hidden;">
                        <dt class="fll">
                            <img src="../../../static/images/战狼.jpg" alt="战狼">
                        </dt>
                        <dd class="flr">
                            <h3>
                                俄专家：美国欲利用阿富汗作对抗中俄的桥头堡
                            </h3>
                            <div class="desc">
                                当地时间21日晚9时，美国总统特朗普在弗吉尼亚州阿林顿迈尔堡军事基地宣布，他已经改变了在阿富汗战争上的立场：今后美军将加大在阿富汗的存在，而不是撤出。对于特朗普执政以来第一次就国家安全战略发表的全国讲话，美国媒体普遍表示失望，认为他的新战略“与前任奥巴马的差别不大”。阿富汗塔利班发言人随后发出警告称：如果美国拒绝从阿富汗撤军，阿富汗不久后将变成美国“21世纪的另一座坟场”。阿富汗新闻网站“TOLO”22日指出，美军介入阿富汗迄今已16年，而塔利班如今占领的地盘比16年前还要多。
                            </div>
                        </dd>
                    </dl>
                </a>

                <div class="news-right clear-fixed flr">
                    <div class="news-title clear-fixed">
                        <div class="title fll">
                            热点文章
                            <span class="news-right-En">
                            ARTICLE
                        </span>
                        </div>

                        <ul class="flr news-nav">
                            <li class="nav-item" :class="{
                            'active': active == 1}" @mouseover=" active = 1">
                                日榜
                            </li>
                            <li class="nav-item" :class="{
                            'active': active == 2 }" @mouseover=" active = 2">
                                周榜
                            </li>
                            <li class="nav-item" :class="{
                            'active':  active == 3}" @mouseover=" active = 3">
                                月榜
                            </li>
                        </ul>

                    </div>

                    <div class="news-right-bottom">
                        <a href="#" class="photoNews fll">
                            <div class="photo-desc">
                                阿里前CEO卫哲： 我特别反对无人便利店
                            </div>
                            <!--这里放热门文章图片的新闻-->
                        </a>

                        <!--这里放榜单文章-->
                        <div class="Article">
                            <div class="news-box" :class="{
                            'active': active == 1}">
                                <h3 class="strong">
                                    <a href="#">
                                        习近平：我很想和每一位代表握手
                                    </a>
                                </h3>
                                <ul class="list">
                                    <li v-for="item in 4"><a href="#">习近平来到体育代表中间 有一种坚持让人肃然起敬</a></li>
                                </ul>
                            </div>


                            <div class="news-box" :class="{
                            'active': active == 2}">
                                <h3 class="strong">
                                    <a href="#">
                                        福彩中心原主任鲍学全、原副主任王云戈被双开
                                    </a>
                                </h3>
                                <ul class="list">
                                    <li v-for="item in 4"><a href="#">中央纪委驻财政部纪检组组长莫建成接受组织审查</a></li>
                                </ul>
                            </div>

                            <div class="news-box" :class="{
                            'active': active == 3}">
                                <h3 class="strong">
                                    <a href="#">
                                        教师因"鸡汤文"成网红:从不崇拜所谓的高考状元
                                    </a>
                                </h3>
                                <ul class="list">
                                    <li v-for="item in 4"><a href="#">教师因"鸡汤文"成网红:从不崇拜所谓的高考状元</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 1
            }
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

    .hot-wrapper {
        margin-top: 20px;
    }
    .hot {
        width: 1226px;
        margin: 0 auto;
    }
    .hot-title{
        font-size: 20px;
        font-weight: 700;
        color: #333;
        padding: 10px 0;
        border-top: 2px solid #999;
        border-bottom: 1px solid #dee2e6;
        line-height: 26px;
    }
    .hot-title>span{
        position: relative;
        top: 1px;
        padding-right: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        text-transform: uppercase;
        color: #999;
    }
    .hot-content{
        padding-bottom: 50px;
        border-bottom: 1px solid #f1f1f1;
        position: relative;
        overflow: hidden;
    }
    .hot-content:after{
        content: '';
        position: absolute;
        width: 1px;
        height: 80%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #eee;
    }
    .hot-content dl{
        width: 500px;
    }
    .hot-content dd{
        color: #000000!important;
        margin-left: 10px;
        height: 140px;
        width: 300px;
        overflow: hidden;
    }
    .hot-content .news-left{
        margin-top: 50px;
    }
    .desc{
        font-size: 12px;

        text-overflow: ellipsis;
        text-indent: 2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
    }
    .news-right{
        margin-top: 10px;
        width: 600px;
    }
    .news-right .news-right-En{
        position: relative;
        top: 1px;
        padding-left: 5px;
        font: 500 12px/18px arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #999;
    }
    .photoNews{
        background-position: center;
        background-size: cover;
        width: 240px;
        position: relative;
        height: 160px;
        display: block;
        background: url( http://c.hiphotos.baidu.com/news/q%3D100/sign=53165afa3a4e251fe4f7e0f89787c9c2/0eb30f2442a7d933dab71cb3a74bd11372f001d6.jpg) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .news-right-bottom{
        padding-top: 10px;
    }
    .news-title{
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        /*border-left: 4px solid #ff0000;*/
        border-bottom: 1px solid #eee;
    }
    .photo-desc{
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.6);
        color: #fff;
        padding: 3px 5px 5px;
        box-sizing: border-box;
        font: 400 12px/20px \5B8B\4F53;
    }
    .photo-desc:hover{
        background: rgba(0,0,0,0.9);
    }
    .news-nav{
        position: relative;
        background: #fff;
        overflow: hidden;
        z-index: 999;
        top: -1px;
        font-size: 14px;
        color: #888;
        /*background: skyblue;*/
    }
    .news-nav .nav-item{
        font-weight: 400;
        float: left;
        width: 100px;
        border: 1px solid #eee;
        border-right: none;
        height: 38px;
        box-sizing: border-box;
    }
    .news-nav .nav-item:last-child{
        border-right: 1px solid #eee;
    }
    .news-nav>li.active{
        border-bottom: 1px solid #fff;
        color: #333;
    }
    /*资讯热点*/

    /*热门文章*/
    .Article{
        float: left;
        margin-left: 50px;
        margin-top: 10px;
    }
    .Article a{
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
        overflow: hidden;
    }
    .Article .news-box{
        margin-top: 10px;
        display: none;
    }
    .Article div.active{
        display: block;
    }
    .Article .list>li{
        position: relative;
    }
    .Article .list>li a{
        font-size: 14px;
        position: relative;
        color: #000;
    }
    .Article .strong a{
        font-weight: 700;
        color: #000;
        font-size: 16px;
    }
    .Article .strong{
        position: relative;

    }
    .Article .strong::after{
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        left: -12px;
        top: 50%;
        transform: translate(0,-3px);
        background: #ff0000;
    }
    .Article .list>li::before{
        content: '';
        width: 4px;
        height: 4px;
        position: absolute;
        left: -12px;
        top: 50%;
        transform: translate(0,-2px);
        background: orangered;
    }

    /*热门文章*/

</style>
