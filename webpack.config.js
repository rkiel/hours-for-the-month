const wpConfig = require('webpack-config-helper');
function customizer(config) {
  config
  .entry('./src/index.jsx', 'bundle')
  .addRuleForBabel()
  .addHtmlWebpackPlugin()
  .echo();
}
module.exports = wpConfig.generate(customizer);
