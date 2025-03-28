import {build, production, mode, src} from './define.js';
import loaders  from'./loaders.js';
import plugins from'./plugins.js';
import path from 'path';

export default {
	entry: production ? './src/index.tsx' : './src/index.dev',
	devServer: {
		historyApiFallback: {
			disableDotRule: true
		},
		client: {
			overlay: true
		},
		open: true,
		port: 3000
	},
	mode,
	module: loaders,
	optimization: {
		minimize: production,
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve(build),
		publicPath: '/',
		clean: true
	},
	plugins,
	resolve: {
		alias: {
			'~': src,
		},
		extensions: ['.ts', '.tsx', '.js'],
		modules: ['node_modules']
	},
	watchOptions: {
		ignored: /node_modules/,
	},
};
