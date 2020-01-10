<template>
  <div id="information">
    <UContainer>
      <UCarousel :bannerList="bannerList"></UCarousel>
      <div class="special-wrap">
        <ul class="special-wrap_container page-layout clearfix">
          <li class="info-li" v-for="item in 4" :key="item">{{item}}</li>
        </ul>
      </div>
      <div class="image-wrap">
        <h2 class="special-title"><span>U能特色</span>加入U能，你一定能！</h2>
        <div class="page-layout">
          <p class="title-sub">舒适环境<span>健康学习</span></p>
          <USwiper/>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<script>
  import UContainer from '../../components/UContainer'
  import UCarousel from '../../components/UCarousel'
  import USwiper from '../../components/USwiper'
  import bannerMixin from '../../mixins/bannerMixin'

export default {
  name: 'Information',
  components: {
    UContainer,
    UCarousel,
    USwiper
  },
  data() {
    return {

    }
  },
  mixins: [bannerMixin],
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="less">
@import "../../styles/common.less";
@import "../../styles/common.less";
.commonMix(@bg:#f9f2f2){
  background-color: @bg;
  padding: 20px 0;
  text-align: center;
}
h2.special-title{
  font-size: 36px;
  font-weight: bolder;
  margin: 40px 0 28px;
  background: url("../../assets/images/star-line_icon.png") no-repeat center;
  span{
    padding:0 30px 0  0;
    color: #f08519;
  }
}
p.title-sub{
  color:#332c2b;
  margin:20px 0 15px;
  font-size: 24px;
  span{
    padding: 0 30px;
  }
}

.special-wrap{
  .commonMix();
  .special-wrap_container{
    text-align: left;
    .info-li{
      display: inline-block;
      width: calc( 100%/2 );
      padding: 0 20px 20px;
    }
  }
}
.image-wrap{
  .commonMix(#edeaea);
  padding: 20px 0 100px;
}
</style>
