const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
};
