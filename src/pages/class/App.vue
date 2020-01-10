<template>
  <div class='math'>
    <UContainer @changeType="changeHandler">
      <UCarousel :bannerList="bannerList"></UCarousel>
      <UMath v-if="lesson == 'math'"/>
      <UEnglish v-if="lesson == 'english'"/>
      <UChinese v-if="lesson == 'chinese'"/>
      <div class="teacher-wrap">
        <h2 class="special-title"><span>名师出高徒</span>整体感知，局部理解，挖掘中心思想</h2>
        <div class="teacher-list page-layout clearfix">
          <div class="teacher-list_tab">
            <div class="teacher-tab" :class="teacherIdx == index ? 'active' : ''" v-for="(item,index) in teacherList" :key="index" @click="teacherIdx = index">
              <img :src="item.tlogo">
              {{item.tname}}老师
            </div>
          </div>
          <div class="teacher-list_desc">
            <div class="teacher-desc" :class="teacherIdx == index ? 'active' : ''" v-for="(item,index) in  teacherList" :key="index">
              <img class="teacher-desc_logo" :src="item.tBlogo">
              <div class="teacher-desc_main">
                <h3 class="teacher-desc_title"><span>{{item.tname}}</span>{{item.description.class}}</h3>
                <ul class="teacher-desc_detail">
                  <li>
                    <h4>个人见解</h4>
                    <p>{{item.description.desc}}</p>
                  </li>
                  <li>
                    <h4>教学风格：</h4>
                    <p>{{item.description.type}}</p>
                  </li>
                </ul>
                <a class="teacher-desc_btn">立即咨询</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="room-wrap">
        <h2 class="special-title" :class="lesson == 'english' ? 'star' : ''"><span>U能特色</span>加入U能，你一定能！</h2>
        <div class="room-wrap-container page-layout">
          <img src="../../assets/images/class_bg_contract.png">
          <div class="room-desc_1">
            <h4 class="room-desc_title">家校服务专业</h4>
            <ul>
              <li class="room-desc_li">U能家长会，名师答疑</li>
              <li class="room-desc_li">综合能力检测</li>
              <li class="room-desc_li">学习重点预览</li>
              <li class="room-desc_li">学习资讯分享</li>
            </ul>
            <a class="contract"></a>
          </div>
          <div class="room-desc_2">
            <h4 class="room-desc_title">学科分班授课</h4>
            <ul>
              <li class="room-desc_li">分年级、分时段</li>
              <li class="room-desc_li">提高学科知识</li>
              <li class="room-desc_li">拓展逻辑思维</li>
            </ul>
            <a class="contract"></a>
          </div>
          <div class="room-desc_3">
            <h4 class="room-desc_title">公开课堂</h4>
            <ul>
              <li class="room-desc_li">让家长了解孩子课堂表现</li>
              <li class="room-desc_li">促进孩子全面发展</li>
              <li class="room-desc_li">充分发挥家校合力</li>
            </ul>
            <a class="contract"></a>
          </div>
          <div class="room-desc_4">
            <h4 class="room-desc_title">师资力量雄厚</h4>
            <ul>
              <li class="room-desc_li">教师团队层层筛选</li>
              <li class="room-desc_li">周期性教学技能培训</li>
              <li class="room-desc_li">专注中小学全面培优</li>
            </ul>
            <a class="contract"></a>
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
  import UMath from './components/UMath'
  import UEnglish from './components/UEnglish'
  import UChinese from './components/UChinese'
  import bannerMixin from '../../mixins/bannerMixin'
  import { queryString } from '../../utils'

  export default {
    name: 'Math',
    data() {
      return {
        lesson: '',
        teacherIdx: 0,
        teacherList: [
          {
            tlogo: require('../../assets/images/logo.png'),
            tname: '白冰',
            tBlogo: require('../../assets/images/student.png'),
            description: {
              class: '五到六年级数学',
              desc: '华南理工大学硕士，五年小升初经验、三年中考经验，熟悉小学和初中数学教学体系，\n' +
                '                      能够准确把握学科重难点。培训过的多名学员参报数学竞赛并获奖，多名优秀学员考入华英、南实、\n' +
                '                      南外和黄岐石门的重点班并获取奖学金。',
              type: '幽默诙谐且爱探究，力求让学生“知其然且知其所以然”，注重思维引导和培养学生的自主\n' +
                '                      思考与流畅表达的能力。',
              qq: ''
            }
          },
          {
            tlogo: require('../../assets/images/logo.png'),
            tname: '白冰1',
            tBlogo: require('../../assets/images/student.png'),
            description: {
              class: '五到六年级数学',
              desc: '华南理工大学硕士，五年小升初经验、三年中考经验，熟悉小学和初中数学教学体系，\n' +
                '                      能够准确把握学科重难点。培训过的多名学员参报数学竞赛并获奖，多名优秀学员考入华英、南实、\n' +
                '                      南外和黄岐石门的重点班并获取奖学金。',
              type: '幽默诙谐且爱探究，力求让学生“知其然且知其所以然”，注重思维引导和培养学生的自主\n' +
                '                      思考与流畅表达的能力。',
              qq: ''
            }
          }
        ]
      }
    },
    components: {
      UContainer,
      UCarousel,
      UMap,
      UMath,
      UEnglish,
      UChinese,
      USwiper
    },
    mixins: [bannerMixin],
    created() {

    },
    mounted() {
      this.lesson = queryString('type')
    },
    methods: {
      changeHandler(lesson) {
        this.lesson = lesson
      }
    }
  }
</script>
<style scoped lang='less'>
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
    &.star{
      background: url("../../assets/images/star-line_icon.png") no-repeat center;
    }
    span{
      padding:0 30px 0  0;
      color: #f08519;
    }
  }

  .image-wrap{
    .commonMix(#edeaea);
  }
  .teacher-wrap{
    .commonMix(#d5e2b8);
    .teacher-list{
      .teacher-list_tab{
        float: right;
        background-color: #d7e8b6;
        .teacher-tab{
          &.active{
            background-color: #acd176;
          }
          padding:10px 20px;
          font-weight: bold;
          color: #332c2b;
          cursor: pointer;
          &:not(:last-child){
            border-bottom: 1px solid #fff;
          }
          img{
            width: 45px;
            object-fit: cover;
            vertical-align: middle;
            border-radius: 50%;
            border: 2px solid #83c034;
          }
        }
      }
      .teacher-list_desc{
        float: right;
        .teacher-desc.active{
          display: block;
        }
        .teacher-desc{
          position: relative;
          display: none;
          .teacher-desc_logo{
            position: absolute;
            left: -210px;
            bottom:-20px;
          }
          .teacher-desc_main{
            display: inline-block;
            width: 680px;
            padding: 30px 20px 10px 10px;
            text-align: left;
            h3{
              font-weight: normal;
              font-size:18px;
              line-height: 36px;
              border-bottom: 2px solid #83c034;
              span{
                font-weight: bold;
                font-size: 32px;
                padding-bottom: 7px;
                border-bottom:2px solid #e57721;
              }
            }
            .teacher-desc_detail{
              padding: 15px 0 10px;
              li{
                background-color: #acd176;
                padding: 10px;
                line-height: 24px;
                h4{

                }
                p{
                  font-size: 14px;
                  text-indent: 4em;
                }

              }
              li+li{
                margin-top: 5px;
              }
            }
            .teacher-desc_btn{
              display: inline-block;
              line-height: 26px;
              text-align: center;
              border-radius: 12px;
              background-color: #e57721;
              color:#fff;
              font-size: 14px;
              padding: 0 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .room-wrap{
    .commonMix(#edeaea);
    .room-wrap-container{
      position: relative;
      color:#545148;
      a.contract{
        display: inline-block;
        padding: 16px;
        margin-top: 5px;
        cursor: pointer;
      }
      h4.room-desc_title{
        color:#332c2b;
        margin-bottom: 10px;
      }
      li.room-desc_li{
        line-height: 22px;
        font-size: 14px;
      }
      .room-desc_1{
        position: absolute;
        width: 168px;
        left: 160px;
        top: 192px;
      }
      .room-desc_2{
        position: absolute;
        width: 168px;
        left: 394px;
        top: 192px;
        a{
          margin-top: 28px;
        }
      }
      .room-desc_3{
        position: absolute;
        width: 168px;
        right: 395px;
        top: 192px;
        a{
          margin-top: 28px;
        }
      }
      .room-desc_4{
        position: absolute;
        width: 168px;
        right: 160px;
        top: 192px;
        a{
          margin-top: 28px;
        }
      }
    }
  }
  .map-wrap {
    padding: 50px 0 30px;
    background-color: #f9f2f2;
  }
</style>
