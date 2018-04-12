
const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'node_modules/sass-mq/mq'
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
