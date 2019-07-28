const path = require('path');
const glob = require('glob');

const entryArray = glob.sync('./utils/**/index.js', {
  ignore: ['**/node_modules/**', '**/dist/**']
});
const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace('/index.js', '');
  acc[name] = item;
  return acc;
}, {});

module.exports = {
  entry: entryObject,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '.'),
    library: '@emplodies/[name]',
    libraryTarget: 'umd',
    filename: '[name]/dist/main.js'
  }
};
