const packageJson = require('../package.json');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'homeMS',
      filename: 'remoteEntry.js',
      exposes: {
        './HomeMS': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}