<template>
    <div class="container">
        <headerBar></headerBar>
        <router-view/>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import headerBar from './header.vue'
    import footerBar from './footer.vue'
    export default {
        name: 'layout',
        components: {
            headerBar,
            footerBar
        },
        data() {
            return {}
        }
    }
</script>


<style scoped>

</style>
