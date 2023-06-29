const packageJson = require('../package.json');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './auth': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}