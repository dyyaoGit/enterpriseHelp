<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import './style/init.css';
    #app {
        width: 100%;
        margin: 0 auto;
        min-width: 1226px;
    }

</style>
