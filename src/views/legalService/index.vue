<template>
    <div>
        <navBar></navBar>
        <div class="banner">
            <img src="../../../static/images/legal.png" alt="法律服务">
        </div>
        <section class="price-wrap clear-fixed">
            <price></price>
        </section>
        <descImg></descImg>
        <!--<section class="desc-img-wrap">-->
            <!--&lt;!&ndash;<tabBar></tabBar>&ndash;&gt;-->
            <!--<img src="../../../static/images/20171117174650_59438.jpg" alt="desc">-->
        <!--</section>-->
    </div>
</template>

<script>
    import navBar from '~views/components/navBar'
    import price from './price.vue'
    import descImg from '~views/components/descImg'
//    import tabBar from '../regCompany/tabBar.vue'
    export default {
        name: 'legalService',
        components: {navBar, price, descImg},
        data() {
            return {}
        }
    }
</script>


<style scoped>
    .banner img{
        width: 100%;
    }
    .price-wrap {
        width: 1226px;
        margin: 0 auto;
    }


</style>
