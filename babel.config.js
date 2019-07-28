module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = ['add-module-exports', { addDefaultProperty: true }];

  return {
    presets,
    plugins
  };
};
