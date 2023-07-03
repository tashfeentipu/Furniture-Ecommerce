const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'components',
      filename: 'remoteEntry.js',
      exposes: {
        './components': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}