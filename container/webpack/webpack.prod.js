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
        home: `home@${domain}/home/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        components: `components@${domain}/components/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}