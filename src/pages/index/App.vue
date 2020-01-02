<template>
  <div id="index">
    <UContainer>
      <UCarousel :bannerList="bannerList"></UCarousel>
      <div class="map-wrap">
        <UMap :styleObj="{width: '1200px',margin: '0 auto'}"></UMap>
      </div>
    </UContainer>
  </div>
</template>
<script>
import UContainer from '../../components/UContainer'
import UCarousel from '../../components/UCarousel'
import UMap from '../../components/UMap'
export default {
  name: 'Index',
  components: {
    UContainer,
    UCarousel,
    UMap
  },
  data() {
    return {
      bannerList: [
        {
          cover: require('../../assets/images/banner1.png'),
          title: '寒春新生报到'
        },
        {
          cover: require('../../assets/images/banner2.png'),
          title: '特色晚辅导'
        },
        {
          cover: require('../../assets/images/banner3.png'),
          title: '班课培优'
        }
      ]
    }
  },
  filters: {
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="less">
@import "../../styles/common.less";
.map-wrap{
  padding: 50px 0 30px;
}
</style>
