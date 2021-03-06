// 配置页面菜单
const routeMap = {
  index: 'index.html', // 首页
  class: 'class.html', // 班课培优
  guide: 'guide.html', // 晚间辅导
  teacher: 'teacher.html', // 名师介绍
  information: 'information.html', // 资讯中心
  about: 'about.html' // 关于我们
}

// 接受route：路径，params：参数，参数以对象形式,open:默认当前页面打开
function windowOpenUrl(route, params, open = true) {
  if (!params) {
    if (!open) {
      window.open(route)
      return
    }
    window.location.href = route
  } else {
    if (typeof params === 'object') {
      let query = ''
      Object.keys(params).forEach((k, index) => {
        if (index == 0) {
          query += k + '=' + params[k]
        } else {
          query += '&' + k + '=' + params[k]
        }
      })
      if (route.includes('#/')) {
        if (!open) {
          window.open(route + '?' + query)
          return
        }
        window.location.href = route + '?' + query
        return;
      } else {
        if (!open) {
          window.open(route + '#/?' + query)
          return
        }
        window.location.href = route + '#/?' + query
      }
    }
  }
}

export {
  routeMap,
  windowOpenUrl // 格式化url并打开页面
}
