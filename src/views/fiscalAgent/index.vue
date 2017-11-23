<template>
    <div>
        <navBar></navBar>
        <div class="banner">
            <img src="http://www.qibangbang.com/images/qbb/dlcw_banner.png" alt="财务代理">
        </div>
        <section class="function-box clear-fixed">
            <price></price>
        </section>
        <desc-img></desc-img>
    </div>
</template>

<script>
    import navBar from '~views/components/navBar'
    import price from './price.vue'
    import tabBar from '../regCompany/tabBar.vue'
    export default {
        components: {
            navBar,
            price,
            tabBar
        },
        name: '',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .banner {
        img {
            width: 100%;
        }
    }
    .function-box {
        width: 1226px;
        margin: 0 auto;
    }

</style>
