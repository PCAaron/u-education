/*
 * @Descripttion: u-education
 * @Author: Aaron
 * @Date: 14:15
 */

// 校验邮箱
export function validateEmail(val) {
  const emailRegExp=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  return emailRegExp.test(val)
}

// 格式化时间
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['一', '二', '三', '四', '五', '六', '日'][value - 1] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 校验是否符合图片格式
export function validImage(file, callback){
  const fileName = file.name;
  const fileExt = '|' + fileName.substr(fileName.lastIndexOf('.') + 1, fileName.length - 1) + '|';
  if ('|jpg|png|gif|bmp|tif|jpeg|JPG|PNG|GIF|BMP|TIF|JPEG|'.indexOf(fileExt) >= 0) {
    if (callback) {
      return callback();
    } else {
      return true;
    }
  }
  this.$message({ type: 'error', message: '上传文件格式不符合' });
  return false;
}

// 自定义判断元素类型JS
export function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
export function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (this.toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (this.toType(o[key]) === 'object') {
      o[key] = this.filterNull(o[key])
    } else if (this.toType(o[key]) === 'array') {
      o[key] = this.filterNull(o[key])
    }
  }
  return o
}

// 获取url key对应的value
export function queryString(key) {
  let name; let value = '';
  const href = location.href; // 取得整个地址栏
  let num = href.indexOf('?')
  const str = href.substr(num + 1); // 取得所有参数   stringvar.substr(start [, length ]
  const arr = str.split('&'); // 各个参数放到数组里
  arr.forEach(item => {
    num = item.indexOf('=')
    if (num > 0) {
      name = item.substring(0, num);
      if (name == key) {
        value = item.substr(num + 1);
      }
    }
  })
  return value
}

// 异步加载js
export function loadScript(url, callback) {
  const script = document.createElement('script')
  script.type = 'text/javascript';
  script.src = url;
  document.body.appendChild(script);
  if (script.readyState) { // IE
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function() {
      callback();
    };
  }
}

// 动态加载地图
export function TMap(key) {
  return new Promise(function(resolve, reject) {
    window.init = function() {
      resolve(qq)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://map.qq.com/api/js?v=2.exp&callback=init&key=' + key
    script.onerror = reject
    document.head.appendChild(script)
  })
}
