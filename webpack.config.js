const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name, version } = require('./package.json');

module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
        title: `${name} (${version})`,
      }),
    ],
};
