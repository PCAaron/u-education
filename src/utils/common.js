/*
 * @Description: In User Settings Edit
 * @Author: your name
 */
// 配置域名
let prefixUrl

let pathName = 'udev'
switch (process.env.VUE_APP_TITLE) {
  case 'productiondev':
    pathName = 'udev'
    break
  case 'productionstb':
    pathName = 'ustb'
    break
  case 'productionpt':
    pathName = 'djypt'
    break
}
if (process.env.NODE_ENV.includes('production')) {
  console.log('线上环境前缀：', pathName)
}
if (process.env.NODE_ENV.includes('production')) {
  // 正式环境
  prefixUrl = `/${pathName}/api`
} else {
  // 本地环境
  prefixUrl = `/${pathName}/api`
}

export {
  prefixUrl,
  pathName
}
