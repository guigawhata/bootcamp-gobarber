const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'root-import',
    {
      rootPathPrefix: '@',
      rootPathSuffix: 'src',
    },
  ]),
);
