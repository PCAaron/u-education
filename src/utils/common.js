/*
 * @Description: In User Settings Edit
 * @Author: your name
 */
// 配置域名
let fileURL, faceImageUrl, webURL, prefixUrl, prefixUrlAjax
import Vue from 'vue'

let proviceDeptId = '89A240A632E43B3FE0530100007F93C6' // 生产环境省组织id

let pathName = 'djydev'
switch (process.env.VUE_APP_TITLE) {
  case 'productiondev':
    proviceDeptId = 'af62f81f9231453abbd0fa3a949916aa' // sit
    pathName = 'djydev'
    break
  case 'productionsit':
    pathName = 'djysit'
    proviceDeptId = 'af62f81f9231453abbd0fa3a949916aa'
    break
  case 'productionuat':
    pathName = 'djyuat'
    proviceDeptId = 'af62f81f9231453abbd0fa3a949916aa' // uat
    break
  case 'productionpt':
    pathName = 'djypt'
    proviceDeptId = '89A240A632E43B3FE0530100007F93C6' // pt
    break
  case 'productiondjy':
    pathName = 'gddjy'
    proviceDeptId = '89A240A632E43B3FE0530100007F93C6' // 生产环境
    break
}
if (process.env.NODE_ENV.includes('production')) {
  console.log('线上环境前缀：', pathName)
}
if (process.env.NODE_ENV.includes('production')) {
  // 正式环境
  fileURL = location.origin + `/${pathName}` // SIT 文件路径
  webURL = location.protocol + '//' + location.host // 协议+主机+端口 ajax路径
  faceImageUrl = `/${pathName}/api` // SIT 表情文件路径前缀
  prefixUrl = `/${pathName}/api` // SIT
  prefixUrlAjax = `${pathName}/api/` //  SIT
} else {
  // 本地环境
  fileURL = `https://cssg.gddj.gov.cn/${pathName}` // 文件路径
  webURL = 'http://210.76.74.37:8082' // ajax路径
  faceImageUrl = `/${pathName}/api` // 腾讯开发 表情文件路径前缀
  prefixUrl = `/${pathName}/api` // 腾讯开发
  prefixUrlAjax = `/${pathName}/api` // 腾讯开发
}
Vue.prototype.fileURL = fileURL

export {
  webURL,
  fileURL,
  faceImageUrl,
  prefixUrl,
  prefixUrlAjax,
  pathName,
  proviceDeptId
}
