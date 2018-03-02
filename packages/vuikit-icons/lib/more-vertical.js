// icon-more-vertical
module.exports = {
  functional: true,
  render: function (h, ctx) {
    var props = ctx.props
    var ratio = props.ratio || 1
    var width = props.width || 20
    var height = props.height || 20
    var viewBox = props.viewBox || '0 0 20 20'

    if (ratio !== 1) {
      width = width * ratio
      height = height * ratio
    }

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'icon-more-vertical ratio-' + ratio,
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle cx="10" cy="3" r="2" /><circle cx="10" cy="10" r="2" /><circle cx="10" cy="17" r="2" />'
      }
    })
  }
}
