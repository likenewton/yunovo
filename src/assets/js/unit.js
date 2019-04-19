module.exports = {
  browser() {
    let u = navigator.userAgent
    return {
      versions: {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, // 是否iPad
        mac: u.indexOf('Mac') > -1, // 是否mac
        webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
        qq: u.match(/\sQQ/i) === ' QQ' || u.indexOf('mqqbrowser') > -1 // 是否QQ浏览器 QQApp端亦可以用此判断
      }
    }
  },
  // 复制一个数组
  mutiCopyArr(para, count = 10) {
    let result = []
    for(let i = 0; i < count; i++) {
      para.code++
      result.push(para)
    }
    return result
  }
}
