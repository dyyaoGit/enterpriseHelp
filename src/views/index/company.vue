<template>
    <div class="company-wrapper">
        <div class="company">
            <div class="rec-server-title">
                <h2>
                    <i class="iconfont icon-kehu fz"></i>
                    我们的客户
                    <span>专业塑就口碑，超过10000个企业客户紧密合作</span>
                </h2>
            </div>
            <div class="company-icons w">
                <ul class="item-wrapper">
                    <li class="company-item" v-for="item in 16">
                        <img src="../../../static/images/company.jpg" alt="company">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'company',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">

    .company {
        width: 1226px;
        margin: 0 auto;
        h2 {
            font-size: 18px;
            span {
                font-size: 14px;
            }
        }
    }

    .fz {
        font-size: 32px;
        vertical-align: middle;
    }

    .company-item {
        float: left;
        width: 153px;
        box-sizing: border-box;
        border: 1px solid #eee;
        border-bottom: none;
        border-right: none;
    }

    .item-wrapper {
        border-bottom: 1px solid #eee;
        overflow: hidden;
        border-right: 1px solid #eee;
    }

    .company-item img {
        width: 100%;
        display: block;
    }
</style>
