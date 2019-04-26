module.exports = {
  // 获取浏览器信息
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
  // 验证xml文件格式
  validateXML(xmlContent) {
    //errorCode 0是xml正确，1是xml错误，2是无法验证
    var xmlDoc, errorMessage, errorCode = 0;
    // code for IE
    if (window.ActiveXObject) {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(xmlContent);

      if (xmlDoc.parseError.errorCode != 0) {
        errorMessage = "错误code: " + xmlDoc.parseError.errorCode + "\n";
        errorMessage = errorMessage + "错误原因: " + xmlDoc.parseError.reason;
        errorMessage = errorMessage + "错误位置: " + xmlDoc.parseError.line;
        errorCode = 1;
      } else {
        errorMessage = "格式正确";
      }
    }
    // code for Mozilla, Firefox, Opera, chrome, safari,etc.
    else if (document.implementation.createDocument) {
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString(xmlContent, "text/xml");
      var error = xmlDoc.getElementsByTagName("parsererror");
      if (error.length > 0) {
        if (xmlDoc.documentElement.nodeName == "parsererror") {
          errorCode = 1;
          errorMessage = xmlDoc.documentElement.childNodes[0].nodeValue;
        } else {
          errorCode = 1;
          errorMessage = xmlDoc.getElementsByTagName("parsererror")[0].innerHTML;
        }
      } else {
        errorMessage = "格式正确";
      }
    } else {
      errorCode = 2;
      errorMessage = "浏览器不支持验证，无法验证xml正确性";
    }
    return {
      "msg": errorMessage,
      "error_code": errorCode
    }
  },

  // 加载动画
  loading(vue, paras = {
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  }) {
    return vue.$loading(paras)
  },

  getSize() {
    let size = 'medium'
    let width = $(window).width()
    if (width > 1600) size = 'medium'
    else if (width <= 1600 && width > 1300) size = 'small'
    else size = 'mini'
    return size
  }
}
