<template>
  <div id="teacher">
    <UContainer>
      <UCarousel :bannerList="bannerList"></UCarousel>
      <div class="special-wrap">
        <h2 class="special-title" style="margin-top: 0">U能名师榜</h2>
        <ul class="special-wrap_container page-layout clearfix">
          <li class="teacher-li" v-for="item in 4" :key="item">{{item}}</li>
        </ul>
      </div>
    </UContainer>
  </div>
</template>
<script>
import UContainer from '../../components/UContainer'
import UCarousel from '../../components/UCarousel'
import bannerMixin from '../../mixins/bannerMixin'

export default {
  name: 'Teacher',
  components: {
    UContainer,
    UCarousel
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
.commonMix(@bg:#f9f2f2){
  background-color: @bg;
  padding: 20px 0;
  text-align: center;
}
h2.special-title {
  font-size: 36px;
  font-weight: bolder;
  margin: 40px 0 15px;
  color: #9ac94a;
}
.special-wrap{
  .commonMix();
  .special-wrap_container{
    text-align: left;
    .teacher-li{
      display: inline-block;
      width: calc( 100%/3 );
      padding: 0 20px 20px;
    }
  }
}
</style>
