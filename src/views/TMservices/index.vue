<template>
    <div class="TMservices">
        <navBar></navBar>
        <section class="banner">
            <img src="../../../static/images/TMservicesBanner.png" alt="商标服务">
        </section>
        <section class="clear-fixed price-wrap" style="margin-bottom: 200px;">
            <price></price>
        </section>
    </div>
</template>

<script>
    import navBar from '../components/navBar.vue'
    import price from './price.vue'
    export default {
        components: { navBar, price },
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
