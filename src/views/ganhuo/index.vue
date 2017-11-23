<template>
    <div>
        <nav-bar></nav-bar>
        <section class="banner">
            <img src="../../../static/images/ganhuo.png" alt="干货文章">
        </section>
        <section class="tab-bar-wrap">
            <tabBar></tabBar>
        </section>
    </div>
</template>

<script>
    import tabBar from './ganhuoTabBar.vue'
    export default {
        components: { tabBar },
        name: 'ganhuo',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .tab-bar-wrap {
        width: 1226px;
        margin: 15px auto 0;
    }

</style>
