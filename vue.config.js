module.exports = {
  pages: {
    'product-list': {
      entry: 'src/pages/product/list/main.js',
      template: 'public/index.html',
      filename: 'product/list.html',
      title: '商品列表'
    },
    'product-detail': {
      entry: 'src/pages/product/detail/main.js',
      template: 'public/index.html',
      filename: 'product/detail.html',
      title: '商品详情'
    }
  },
  devServer: {
    disableHostCheck: true
  }
}