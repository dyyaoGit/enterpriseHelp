<template>
    <div class="banner mt_20 section">
        <sideBar></sideBar>
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <swiper-slide class="banner-item">
                <img src="../../../static/images/banner_qbb.png" alt="banner" class="banner-img">
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
    position: relative;
    margin: 15px auto;
    text-align: center;
    height: 331px;
}
.banner-item {
    overflow: hidden;
}
.banner-img {
    margin: 0 -100%;
}

</style>
