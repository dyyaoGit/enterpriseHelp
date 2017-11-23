<template>
    <div>
        <ul class="list-wrap">
            <li class="list" v-for="item in list">
                <dl>
                    <dt><img
                        :src="item.imgSrc">
                    </dt>
                    <dd>
                        <h3 class="list-title"><span class="mark" v-text="item.titleMark">【政策】</span>{{item.title}}</h3>
                        <div class="inforls">
                            <span>企帮宝</span>
                            <span class="diver">|</span>
                            <span v-text="item.time"></span>
                        </div>
                        <p class="desc" v-text="item.desc">
                            再次提醒 	“三证合一”或“五证合一”登记制度改革过渡期为2015年10月1日至2017年12月31日，过渡期结束后一律使用加载统一代码的营业执照，未换发的证照不再有效。2018年...
                        </p>
                    </dd>
                </dl>
            </li>
        </ul>
        <div class="page-pane">
            <Page :total="100" @on-change="change"></Page>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            list: {
                type: Array
            }
        },
        name: 'Article-list',
        data() {
            return {}
        },
        methods: {
            change(val) {
                console.log(val)
            }
        }
    }
</script>


<style scoped lang="scss">

    .list-wrap {
        border: 1px solid #f1f1f1;
        border-top: none;
        box-sizing: border-box;
        padding: 0 26px;
        margin-bottom: 15px;
        .list {
            height: 151px;
            padding: 20px 0;
            box-sizing: border-box;
            border-bottom: 1px dashed #39f;
        }
        .list:last-child {
            border-bottom: none;
            margin-bottom: 15px;
        }
    }

    .list {
        dt {
            width: 141px;
            height: 110px;
            overflow: hidden;
            float: left;
            img {
                width: 100%;
                height: 100%;
            }
        }
        dd {
            float: left;
            margin-left: 15px;
            width: 1016px;
            .mark {
                color: #39f;
            }
        }
    }

    .page-pane {
        text-align: center;
        margin: 0 auto;
        padding-bottom: 15px;
    }
</style>
