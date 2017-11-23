<template>
    <div class="banner mt_20 section">
        <sideBar></sideBar>
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <swiper-slide class="banner-item">
                <img src="../../../static/images/banner1img.jpg" alt="banner" class="banner-img">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import sideBar from './sideBar.vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: { swiper, swiperSlide, sideBar },
        name: 'banner',
        data() {
            return {
                notNextTick: false,
                swiperOption: {

                }
            }
        }
    }
</script>


<style scoped>
.banner {
    width: 100%;
    position: relative;
    margin: 15px auto;
    text-align: center;
    height: 381px;
}
.banner-item {
    height: 381px;
    overflow: hidden;
}

.banner-img {
    /*width: 100%;*/
    margin: 0 -100%;
}

</style>
