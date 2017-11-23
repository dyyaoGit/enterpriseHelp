<template>
    <Tabs value="name1">
        <TabPane label="最新文章" name="name1">
            <list :list="demoList"></list>
        </TabPane>
        <TabPane label="公司注册" name="name2">
            <list :list="demoList"></list>
        </TabPane>
    </Tabs>
</template>

<script>
    import list from './list-item.vue'
    export default {
        components: {
            list
        },
        name: '',
        data() {
            return {
                demoList: [
                    {
                        imgSrc: 'http://source.qibangbang.com/imgs/d/front/201711/22/e15ac8868d914c2489968385e573891b.png_o_s_180x140.png',
                        title: '年底必须办完！纳税人千万注意啦',
                        titleMark: '【政策】',
                        time: '2017-11-27 11:07',
                        desc: '“三证合一”或“五证合一”登记制度改革过渡期为2015年10月1日至2017年12月31日，过渡期结束后一律使用加载统一代码的营业执照，未换发的证照不再有效。2018年...'
                    }
                ],
                demoList2: [
                    {
                        imgSrc: 'http://source.qibangbang.com/imgs/d/front/201711/02/b69c088aed9f4a489a938e0f52acc5e7.jpg_o_s_180x140.jpg',
                        title: '为什么朝阳区孵化器不让注册公司了?',
                        titleMark: '【公司注册】',
                        time: '2017-11-27 11:07',
                        desc: '对于无力租赁办公区的初创企业来说，入驻租金低廉、宽带网络、公共软件使用便捷、工商注册便捷的众创空间，可能是不错的选择。但以后，要入驻众创空间可能不那么容易了。 昨日（11月1日）...'
                    }
                ]
            }
        },
        mounted() {
            for(let i = 0; i<9; i++){
                this.demoList.push(this.demoList[0])
                this.demoList2.push(this.demoList2[0])
            }
        }
    }
</script>

<style lang="scss">
    @import '../../style/overwriteIview';
</style>
<style scoped lang="scss">
    .list-wrap {
        padding: 0 27px;
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

    }

</style>
