module.exports = {
  "plugins": [
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('cssnano')({
      removeComments: {
        removeAll: true
      },
      reduceIdents: {
        keyframes: false
      },
      discardUnused: {
        keyframes: false
      }
    })
  ]
}
