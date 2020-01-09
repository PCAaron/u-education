<template>
  <div class='USwiper'>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <div class="u-swiper">
          <div class="u-swiper_cover">
            <img :src="slide.cover">
          </div>
          <p class="u-swiper_desc">{{slide.desc}}</p>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'USwiper',
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          /* slidesPerGroup: 4,*/
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
         /* navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }*/
        },
        swiperSlides: [
          {
            cover: require('../assets/images/banner1.png'),
            desc: '学校前台'
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mixins: [],
    created() {

    },
    mounted() {

    },
    methods: {}
  }
</script>
<style scoped lang='less'>
  @import "../styles/common.less";
  /deep/ .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  .u-swiper{
    border:1px solid #d4d5d5;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    overflow: hidden;
    .u-swiper_cover{
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p{
      background-color: #fefefe;
      line-height: 36px;
      color: #7f7a7a
    }
  }
</style>
