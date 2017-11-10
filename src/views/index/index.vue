<template>
    <div class="index-content">
        <navBar></navBar>
        <banner></banner>
    </div>
</template>

<script>
    import navBar from '../components/navBar.vue'
    import banner from '../components/banner.vue'
    export default {
        components: {
            navBar,
            banner
        },
        name: 'index',
        data() {
            return {}
        }
    }
</script>


<style scoped>


</style>
