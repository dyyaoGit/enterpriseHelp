<template>
    <div class="TMservices">
        <navBar></navBar>
        <section class="banner">
            <img src="../../../static/images/TMservicesBanner.png" alt="商标服务">
        </section>
        <section class="clear-fixed price-wrap">
            <price></price>
        </section>
        <section>
            <tabBar></tabBar>
        </section>
    </div>
</template>

<script>
    import navBar from '../components/navBar.vue'
    import price from './price.vue'
    import tabBar from '../regCompany/tabBar.vue'
    export default {
        components: { navBar, price, tabBar },
        name: 'TMservices',
        data() {
            return {}
        }
    }
</script>


<style scoped lang="scss">
    .banner {
        img {
            text-align: center;
            width: 100%;
        }
    }

</style>
<style>
    .price-wrap {
        width: 1226px;
        margin: 0 auto;
    }
</style>
