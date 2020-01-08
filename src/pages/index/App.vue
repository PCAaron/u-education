<template>
  <div id="index">
    <UContainer>
      <UCarousel :bannerList="bannerList"></UCarousel>
      <div class="special-wrap">
        <h2 class="special-title">全力教育<span>关注进步</span></h2>
        <p class="special-desc">以“独特”激发学生兴趣<span>以“旁听”获得家长信任</span></p>
        <div class="special-wrap_container">
          <img src="../../assets/images/index_bg_special.png">
          <div class="subdesc-1">
            <p>名师专业授课</p>
            <p>助教实时跟进</p>
            <p>双师让课堂更高效</p>
          </div>
          <div class="subdesc-2">
            <p>针对性教学</p>
            <p>个性化培优</p>
            <p>精准把握每个学员的特点</p>
          </div>
          <div class="subdesc-3">
            <p>量身定制的教学设计</p>
            <p>专属的学员提升方案</p>
          </div>
        </div>
      </div>
      <div class="join-wrap">
        <div class="join-wrap_container">
          <img src="../../assets/images/index_bg_join.png">
          <img class="qrcode-icon" src="../../assets/images/index_qrcode.png">
        </div>
      </div>
      <div class="heart-wrap">
        <img src="../../assets/images/index_bg_heart.png">
      </div>
      <div class="map-wrap">
        <UMap :styleObj="{width: '1200px',margin: '0 auto',padding:'20px',backgroundColor:'#fff'}"></UMap>
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
        },
        {
          cover: require('../../assets/images/banner4.png'),
          title: '特色晚辅导'
        },
        {
          cover: require('../../assets/images/banner5.png'),
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
.special-wrap{
  background-color: #f9f2f2;
  padding: 20px 0;
  text-align: center;
  h2.special-title{
    color: #f08519;
    font-size: 36px;
    font-weight: bolder;
    margin: 40px 0 28px;
    span{
      padding:0 30px;
    }
  }
  p.special-desc{
    color:#332c2b;
    font-size: 26px;
    margin-bottom: 50px;
    span{
      padding: 0 30px;
    }
  }
  .special-wrap_container{
    display: inline-block;
    position: relative;
    color: #332c2b;
    font-weight: bold;
    font-size:22px;
    .subdesc-1{
      position: absolute;
      left:10px;
      top:40px;
      line-height: 32px;
    }
    .subdesc-2{
      position: absolute;
      right:30px;
      top:75px;
      line-height: 32px;
    }
    .subdesc-3{
      position: absolute;
      left:10px;
      bottom:50px;
      line-height: 32px;
    }
  }
}
.join-wrap{
  background-color: #edeaea;
  padding: 20px 0;
  text-align: center;
  .join-wrap_container{
    display: inline-block;
    position: relative;
    .qrcode-icon{
      position: absolute;
      bottom:20px;
      left: 60px;
    }
  }
}
.heart-wrap{
  background-color: #f9f2f2;
  padding: 20px 0;
  text-align: center;
}
.map-wrap{
  padding: 50px 0 30px;
  background-color: #edeaea;
}
</style>
