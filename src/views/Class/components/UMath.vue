<template>
  <div class='UMath'>
    <div class="special-wrap">
      <h2 class="special-title"><span>课堂优势</span>分层教学定位更清晰</h2>
      <p class="special-desc">因材施教，针对分层教学体系，细分4个班型</p>
      <div class="special-wrap_container">
        <img src="../../../assets/images/class_bg_special.png">
        <p class="subdesc-1">
          适合基础扎实，思维敏捷的学生，适当的思维拓展体系，讲解多种解题方法，更偏重于思维拓展，培养具有学习和分析高端数学能力的学员。
        </p>
        <p class="subdesc-2">
          同步校内课程，巩固课本知识，汇总各单元题型的解题技巧与方法，同时进行一定的思维能力提升，课内外兼修。
        </p>
      </div>
    </div>
    <div class="class-wrap">
      <h2 class="special-title"><span>课堂体系</span>针对性教学根据考情进行提拔</h2>
      <el-row type="flex" class="page-layout" justify="center">
        <el-col :span="6">
          <div class="class-card">
            <h3 class="class-card_title">12人精品课</h3>
            <ul class="class-card_des">
              <li>针对性教学</li>
              <li>个性化培优</li>
              <li>精准把握每个学员的特点</li>
            </ul>
            <a class="class-card_btn">立即咨询</a>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="class-card">
            <h3 class="class-card_title">20人双师班</h3>
            <ul class="class-card_des">
              <li>民师专业授课</li>
              <li>助教实时跟进</li>
              <li>双师让课堂更高效</li>
            </ul>
            <a class="class-card_btn">立即咨询</a>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="class-card">
            <h3 class="class-card_title" style="margin-bottom: 25px">名师一对一</h3>
            <ul class="class-card_des">
              <li>量身定制的教学设计</li>
              <li>专属的学员提升方案</li>
            </ul>
            <a class="class-card_btn" style="margin-top: 37px;">立即咨询</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UMath',
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
    margin: 40px 0 28px;

    span {
      padding: 0 30px 0 0;
      color: #f08519;
    }
  }

  .special-wrap {
    .commonMix();

    p.special-desc {
      color: #332c2b;
      font-size: 26px;
      margin-bottom: 50px;

      span {
        padding: 0 30px;
      }
    }

    .special-wrap_container {
      display: inline-block;
      position: relative;
      color: #332c2b;
      font-weight: normal;
      font-size: 12px;

      .subdesc-1 {
        position: absolute;
        left: 80px;
        top: 52px;
        display: inline-block;
        width: 300px;
        line-height: 20px;
        text-align: left;
        text-indent: 2em;
      }

      .subdesc-2 {
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

  .class-wrap {
    .commonMix();

    .class-card {
      display: inline-block;
      margin: 0 auto;
      border: 1px solid #d0d0d0;
      padding: 20px 25px 10px;

      &_title {
        color: #10623f;
        font-size: 22px;
        line-height: 36px;
        margin-bottom: 10px;
      }

      &_des li {
        color: #332c2b;
        line-height: 32px;
        font-weight: bold;
        text-align: center;
      }

      &_btn {
        background-color: #83c034;
        color: #fff;
        border-radius: 12px;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        width: 175px;
        line-height: 36px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
</style>
