<template>
  <el-container class="wrap">
    <el-header>
      <div class="header">
        <el-row type="flex" class="row-bg">
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
        <el-row type="flex" class="header-menu">
          <el-col class="header-menu_each">
            <h3>首页</h3>
          </el-col>
          <el-col class="header-menu_each">
            <h3>班课培优</h3>
          </el-col>
          <el-col class="header-menu_each">
            <h3>特色晚辅</h3>
          </el-col>
          <el-col class="header-menu_each">
            <h3>名师介绍</h3>
          </el-col>
          <el-col class="header-menu_each">
            <h3>资讯中心</h3>
          </el-col>
          <el-col class="header-menu_each">
            <h3>关于我们</h3>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
    export default {
        data() {
            return {
              current: ''
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>
<style lang="less" scoped>
@import "../styles/common.less";
.header{
  .header-menu{
    max-width:1200px;
    margin:0 auto;
    &_each{
      text-align: center;
      line-height: 56px;
      cursor: pointer;
      h3{
        color: @fontColor;
      }
    }
    &_each.active{
       background-color: @themeColor;
     }
  }
}
</style>
