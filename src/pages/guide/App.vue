<template>
  <div id="guide">
    <UContainer>
      <UCarousel :bannerList="bannerList"></UCarousel>
      <div class="special-wrap">
        <h2 class="special-title" style="margin-top: 0">教学目标<span>——</span>“以一带六”</h2>
        <el-row type="flex" justify="center">
          <el-col :span="16">
            <p class="title-sub">提供放学后的专业高效的课业辅导，督促学生完成家庭作业、养成良好学习
              习惯。同时，为学有余力的学生补充专项的学科培训以及提供优秀的阅读书籍等。</p>
          </el-col>
        </el-row>
        <div class="special-wrap_container">

        </div>
      </div>
      <div class="second-wrap">
        <h2 class="special-title" style="margin-top: 0">学生专属<span>——</span>“五大特色”</h2>
        <div class="second-wrap_container">
          <img src="../../assets/images/class_bg_guide2.png">
          <div class="time-line">
            <p class="time-com line1">五、六年级分题型、分科目学习、小升初知识、全面备战</p>
            <p class="time-com line2">帮学生整理好每单元重点短语、句型、抓好学生英语基础、渗入语法讲解</p>
            <p class="time-com line3">根据学生作业错题，有针对性地巩固知识</p>
            <p class="time-com line4">及时帮助学生查缺补漏</p>
            <p class="time-com line5">巩固一周所学知识</p>
          </div>
        </div>
      </div>
      <div class="image-wrap">
        <h2 class="special-title" style="margin-top: 0">舒适环境<span></span>健康学习</h2>
        <div class="page-layout">
          <USwiper/>
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
import USwiper from '../../components/USwiper'
import bannerMixin from '../../mixins/bannerMixin'

export default {
  name: 'Guide',
  components: {
    UContainer,
    UCarousel,
    USwiper,
    UMap
  },
  mixins: [bannerMixin],
  data() {
    return {

    }
  },
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
  color: #00a2e9;

  span {
    color: #00a2e9;
  }
}
p.title-sub{
  text-indent: 2em;
  text-align: left;
  line-height: 28px;
}

.special-wrap{
  .commonMix(#edf5fb);

}
.second-wrap{
  .commonMix();
  .second-wrap_container{
    margin-top: 40px;
    display: inline-block;
    position: relative;
    .time-line{
      .time-com{
        position: absolute;
        bottom:174px;
        width: 185px;
        height: 84px;
        color:#332c2b;
        line-height: 28px;
      }
      .line1{
        left: 20px;
      }
      .line2{
        left: 263px;
      }
      .line3{
        right:510px;
      }
      .line4{
        right: 264px;
      }
      .line5{
        right: 24px;
      }
    }
  }
}
.image-wrap{
  .commonMix(#edf5fb);
  padding: 30px 0 0;
}
.map-wrap {
  padding: 50px 0 30px;
  background-color: #edf5fb;
}
</style>
