const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map'
	// devtool: false // use this if you want 30% faster builds but no sourcemap
});
