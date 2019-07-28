module.exports = function(api) {
  api.cache(true);

  const presets = [['@babel/env', { modules: 'commonjs' }]];
  const plugins = ['add-module-exports', 'transform-es2015-modules-commonjs'];

  return {
    presets,
    plugins
  };
};
