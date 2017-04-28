const wpConfig = require('webpack-config-helper');
function customizer(config) {
  config
  .entry('./src/index.jsx', 'bundle')
  .entryAndCommonsChunk('vendor')
  .output('build')
  .addRuleForBabel()
  .addHtmlWebpackPlugin()
  .addRuleForExtractCssModules()
  .echo();
}
module.exports = wpConfig.generate(customizer);
