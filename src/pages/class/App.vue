<template>
  <div class='math'>
    <UContainer>
      <UCarousel :bannerList="bannerList"></UCarousel>
      <div class="special-wrap">
        <h2 class="special-title"><span>课堂优势</span>分层教学定位更清晰</h2>
        <p class="special-desc">因材施教，针对分层教学体系，细分4个班型</p>
        <div class="special-wrap_container">
          <img src="../../assets/images/class_bg_special.png">
          <p class="subdesc-1">
            适合基础扎实，思维敏捷的学生，适当的思维拓展体系，讲解多种解题方法，更偏重于思维拓展，培养具有学习和分析高端数学能力的学员。
          </p>
          <p class="subdesc-2">
            同步校内课程，巩固课本知识，汇总各单元题型的解题技巧与方法，同时进行一定的思维能力提升，课内外兼修。
          </p>
        </div>
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
  import bannerMixin from '../../mixins/bannerMixin'
  import { queryString } from '../../utils'

  export default {
    name: 'Math',
    data() {
      return {
        lesson: ''
      }
    },
    components: {
      UContainer,
      UCarousel,
      UMap
    },
    mixins: [bannerMixin],
    created() {

    },
    mounted() {
      this.lesson = queryString('type')
    },
    methods: {}
  }
</script>
<style scoped lang='less'>
  @import "../../styles/common.less";
  .special-wrap{
    background-color: #f9f2f2;
    padding: 20px 0;
    text-align: center;
    h2.special-title{
      font-size: 36px;
      font-weight: bolder;
      margin: 40px 0 28px;
      span{
        padding:0 30px 0  0;
        color: #f08519;
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
      font-weight: normal;
      font-size:12px;
      .subdesc-1{
        position: absolute;
        left: 80px;
        top: 52px;
        display: inline-block;
        width: 300px;
        line-height: 20px;
        text-align: left;
        text-indent: 2em;
      }
      .subdesc-2{
        position: absolute;
        left: 10px;
        bottom: 72px;
        display: inline-block;
        width: 315px;
        line-height: 20px;
        text-align: left;
        text-indent: 2em;
      }
    }
  }
  .map-wrap {
    padding: 50px 0 30px;
    background-color: #edeaea;
  }
</style>
