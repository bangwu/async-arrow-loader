module.exports = function (source) {
  var reg = new RegExp(/async[\(\s\)=\>a-zA-Z\.\,]*[\{]{1}[\(\s\)=\>a-zA-Z\.\,\{]*[\s\}]*[\}]{1}/gm)
  var asyncFun = source.match(reg)
  if (asyncFun) {
    return source.replace(reg, `(${asyncFun[0]}).bind(this)`)
  } else {
    return source
  }
}
