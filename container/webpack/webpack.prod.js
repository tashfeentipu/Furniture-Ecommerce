const webpack = require('webpack')
const packageJson = require('../package.json');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}