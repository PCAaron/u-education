<template>
  <div class='UCarousel'>
    <el-carousel :interval="5000" arrow="always">
      <template v-if="mold == 'banner'">
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <h3>
            <img :src="item.cover" :alt="item.title">
          </h3>
        </el-carousel-item>
      </template>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    props: {
      mold: {
        type: String,
        default: 'banner'
      },
      bannerList: {
        type: Array
      }
    },
    name: 'UCarousel',
    data() {
      return {
        carouselList: this.bannerList
      }
    },
    watch: {
      bannerList(list) {
        this.carouselList = list
      }
    },
    mixins: [],
    mounted() {

    },
    methods: {}
  }
</script>
<style scoped lang='less'>
  @import "../styles/common.less";
  /deep/ .el-carousel--horizontal{
    overflow-y: hidden;
  }


</style>
