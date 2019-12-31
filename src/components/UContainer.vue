<template>
  <el-container class="wrap">
    <el-header class="header" height="auto">
      <div class="header-meta">
        <el-row type="flex" class="page-layout">
          <el-col :span="12">
            <h1 class="header-logo">
              Logo
            </h1>
          </el-col>
          <el-col :span="12">
            <h3 class="header-contract">
              phone
            </h3>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" class="page-layout header-menu">
        <el-col class="header-menu_each">
          <h3 @click="toPage(routeMap.index)">首页</h3>
        </el-col>
        <el-col class="header-menu_each">
          <h3>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                班课培优<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="math">数学</el-dropdown-item>
                <el-dropdown-item command="english">英语</el-dropdown-item>
                <el-dropdown-item command="chinese">语文</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </h3>
        </el-col>
        <el-col class="header-menu_each">
          <h3 @click="toPage(routeMap.guide)">特色晚辅</h3>
        </el-col>
        <el-col class="header-menu_each">
          <h3 @click="toPage(routeMap.teacher)">名师介绍</h3>
        </el-col>
        <el-col class="header-menu_each">
          <h3 @click="toPage(routeMap.information)">资讯中心</h3>
        </el-col>
        <el-col class="header-menu_each">
          <h3 @click="toPage(routeMap.about)">关于我们</h3>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <slot></slot>
    </el-main>
    <el-footer class="footer" height="auto">
      <el-row type="flex" class="page-layout footer-list">
        <el-col class="footer-each">
          <h3>关于我们</h3>
          <ul class="footer-menu">
            <li>企业简介</li>
            <li>企业文化</li>
            <li>发展历程</li>
            <li>联系我们</li>
          </ul>
        </el-col>
        <el-col class="footer-each">
          <h3>联系我们</h3>
          <ul class="footer-menu">
            <li>校区查询</li>
            <li>老师查询</li>
          </ul>
        </el-col>
        <el-col class="footer-each">
          <h3>小学</h3>
          <ul class="footer-menu">
            <li>小学学校</li>
            <li>习题试卷</li>
            <li>教育政策</li>
            <li>问答</li>
            <li>学习经验</li>
          </ul>
        </el-col>
        <el-col class="footer-each">
          <h3>小升初</h3>
          <ul class="footer-menu">
            <li>资讯</li>
            <li>招生信息</li>
            <li>学习经验</li>
            <li>习题试卷</li>
            <li>问答</li>
          </ul>
        </el-col>
        <el-col class="footer-each">
          <h3>初中</h3>
          <ul class="footer-menu">
            <li>初中学校</li>
            <li>习题试卷</li>
            <li>教育政策</li>
            <li>问答</li>
            <li>学习经验</li>
          </ul>
        </el-col>
        <el-col class="footer-each">
          <h3>中考</h3>
          <ul class="footer-menu">
            <li>资讯</li>
            <li>习题试卷</li>
            <li>招生信息</li>
            <li>问答</li>
            <li>学习经验</li>
          </ul>
        </el-col>
        <el-col class="footer-each">
          <h3>晚辅导</h3>
          <ul class="footer-menu">
            <li>课程特色</li>
            <li>习题试卷</li>
            <li>教育政策</li>
            <li>问答</li>
            <li>学习经验</li>
          </ul>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
  import { routeMap, windowOpenUrl } from '../utils/routerConfig'

  export default {
    data() {
      return {
        current: '',
        routeMap: routeMap
      }
    },
    components: {},
    mounted() {

    },
    methods: {
      toPage(page) {
        windowOpenUrl(page)
      },
      handleCommand(command) {
        windowOpenUrl(routeMap.guide, { type: command })
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../styles/common.less";

  @headerBg: #dadddd;
  @footerBg: #fff;
  @footerColor: #8b8b8c;

  /deep/ .el-header {
    padding: 0;
  }

  /deep/ .el-main {
    padding: 0;
  }

  /deep/ .el-footer {
    padding: 0;
  }

  /deep/ .el-dropdown {
    color: @fontColor;
    font-size: 18px;
  }

  /deep/ .el-dropdown-menu__item{
    padding: 0 40px;
  }

  /deep/ .el-dropdown-menu__item:focus, /deep/ .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #fff;
    color: @fontColor;
  }

  .header {
    .header-meta {
      background-color: @headerBg;
    }

    .header-menu {

      &_each {
        text-align: center;
        line-height: 56px;
        cursor: pointer;

        h3 {
          color: @fontColor;
          font-size: 18px;
        }
      }

      &_each.active {
        background-color: @themeColor;
      }
    }
  }

  .footer {
    background-color: @footerBg;
    color: @footerColor;

    h3 {
      margin-bottom: 20px;
    }

    .footer-each {
      text-align: center;
      border-right: 1px solid @footerColor;

      .footer-menu {
        line-height: 32px;
        cursor: pointer;
      }
    }
  }
</style>
