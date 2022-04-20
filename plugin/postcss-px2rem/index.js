'use strict'

var postcss = require('postcss')
var Px2rem = require('px2rem')
function transform(options, css, result) {
  const oldCssText = css.toString()
  const px2remIns = new Px2rem(options)
  const newCssText = px2remIns.generateRem(oldCssText)
  result.root = postcss.parse(newCssText)
  return
}
module.exports = postcss.plugin('postcss-px2rem-exclude', function (options) {
  return function (css, result) {
    if (options.exclude && css.source.input.file.match(options.exclude) !== null) {
      result.root = css
      return
    }
    if (options.include) {
      if (css.source.input.file.match(options.include) !== null) {
        transform(options, css, result)
      }
    } else {
      transform(options, css, result)
    }
  }
})
