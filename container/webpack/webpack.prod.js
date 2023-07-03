const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        home: `home@${{ domain }}/remoteEntry.js`,
        auth: `auth@${{ domain }}/remoteEntry.js`,
        components: `components@${{ domain }}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}