<template>
    <div class="setMeal">
        <nav-bar></nav-bar>
        <section class="banner">
            <img src="../../../static/images/setMeal.png" alt="banner">
        </section>
        <section class="function-box clear-fixed">
            <price></price>
        </section>
    </div>
</template>

<script>
    import price from './price.vue'
    export default {
        components: {price},
        name: '',
        data() {
            return {}
        }
    }
</script>


<style lang="scss" scoped>
    .banner  img{
        width: 100%;
    }
    .function-box {
        width: 1226px;
        margin: 0 auto;
    }


</style>
