module.exports = function(api) {
  api.cache(true);

  const presets = [['@babel/env', { modules: 'commonjs' }]];
  const plugins = [
    [
      'add-module-exports',
      {
        addDefaultProperty: true
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
