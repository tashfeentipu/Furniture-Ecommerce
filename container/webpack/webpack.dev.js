const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        homeMS: 'homeMS@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
}