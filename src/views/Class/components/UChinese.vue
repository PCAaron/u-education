<template>
  <div class='UChinese'>
    <div class="special-wrap">
      <h2 class="special-title"><span>针对性教学</span>个性化培优</h2>
      <p class="title-sub">——精准把握每个学员的特点</p>
    </div>
    <div class="second-wrap">
      <h2 class="special-title"><span>课堂优势</span>整体感知，局部理解，挖掘中心思想</h2>
      <p class="title-sub">《阅读与写作》采用两者相交叉的教学方法</p>
      <img src="../../../assets/images/class_bg_ch.png">
    </div>
    <div class="third-wrap">
      <h2 class="special-title"><span>课堂设计</span>教学服务全流程把控</h2>
      <img src="../../../assets/images/class_bg_ch2.png">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UChinese',
    data() {
      return {}
    },
    components: {},
    mixins: [],
    created() {

    },
    mounted() {

    },
    methods: {}
  }
</script>
<style scoped lang='less'>
  @import "../../../styles/common.less";

  .commonMix(@bg:#f9f2f2) {
    background-color: @bg;
    padding: 20px 0;
    text-align: center;
  }

  h2.special-title {
    font-size: 36px;
    font-weight: bolder;
    margin: 40px 0 15px;

    span {
      padding: 0 30px 0 0;
      color: #f08519;
    }
  }
  p.title-sub{
    color: #332c2b;
    font-size: 26px;
    margin-bottom: 30px;
  }

  .special-wrap{
    .commonMix()
  }
  .second-wrap{
    .commonMix(#edeaea)
  }
  .third-wrap{
    .commonMix()
  }
</style>
