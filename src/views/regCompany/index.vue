<template>
    <div class="reg-company">
        <navBar></navBar>
        <div class="banner">
            <img src="../../../static/images/reg.png" alt="财务代理banner">
        </div>
        <section class="function-box clear-fixed">
            <price></price>
        </section>
        <descImg></descImg>
    </div>
</template>

<script>
    import navBar from '../components/navBar.vue'
    import price from './price.vue'
//    import tabBar from './tabBar.vue'
    import descImg from '~views/components/descImg'


    export default {
        name: 'regCompany',
        components: {
            navBar,
            price,
            descImg
        },
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>


<style scoped>
    .function-box {
        width: 1226px;
        margin: 0 auto;
    }

    .banner img{
        width: 100%;
    }

</style>
