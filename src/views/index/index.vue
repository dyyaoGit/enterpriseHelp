<template>
    <div class="index-content">
        <navBar></navBar>
        <banner></banner>
        <section>
            <askUs></askUs>
            <recSev></recSev>
            <company></company>
            <hotNews></hotNews>
        </section>
    </div>
</template>

<script>
    import navBar from '../components/navBar.vue'
    import banner from '../components/banner.vue'
    import askUs from './askUs.vue'
    import recSev from './recSev.vue'
    import company from './company.vue'
    import hotNews from './hotNews.vue'
    export default {
        components: {
            navBar,
            banner,
            askUs,
            recSev,
            company,
            hotNews
        },
        name: 'index',
        data() {
            return {}
        }
    }
</script>


<style scoped>


</style>
