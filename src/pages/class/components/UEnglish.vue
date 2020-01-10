<template>
  <div class='UEnglish'>
    <div class="special-wrap">
      <h2 class="special-title"><span>课堂优势</span>“先输入，再输出”</h2>
      <p class="title-sub">以生动有趣的方式，培养学生对英语的学习兴趣，核心技能</p>
      <img src="../../../assets/images/class_bg_eng.png">
    </div>
    <div class="class-wrap">
      <h2 class="special-title"><span>课堂设计</span>“先输入，再输出”</h2>
      <div class="class-wrap_container">
        <img src="../../../assets/images/class_bg_en.png">
        <p class="class-com class-1">练习总结以及课堂表现反馈</p>
        <p class="class-com class-2">重拾三四年纪单词，巩固复习校内课本内容</p>
        <p class="class-com class-3">从听，说，读，写方面考察学生掌握情况</p>
        <p class="class-com class-4">对课本知识点、语法点进行剖析，配合练习，灵活运用</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UEnglish',
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
    background: url("../../../assets/images/star-line_icon.png") no-repeat center;

    span {
      padding: 0 30px 0 0;
      color: #f08519;
    }
  }
  p.title-sub{
    margin-bottom: 15px;
  }

  .special-wrap{
    .commonMix();
  }
  .class-wrap{
    .commonMix();
    .class-wrap_container{
      position: relative;
      display: inline-block;
      .class-com{
        position: absolute;
        width: 195px;
        font-size: 22px;
        line-height: 38px;
        text-align: left;
      }
      .class-1{
        top: 37px;
        left: 95px;
      }
      .class-2{
        width: 235px;
        top: 78px;
        right: 5px;
      }
      .class-3{
        width: 230px;
        bottom: 97px;
        left: 26px;
      }
      .class-4{
        width: 235px;
        bottom: 5px;
        right: 65px;
      }
    }
  }
</style>
