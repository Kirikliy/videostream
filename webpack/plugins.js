import HtmlWebpackPlugin from'html-webpack-plugin';
import Dotenv from'dotenv-webpack';
import ReactRefreshWebpackPlugin from'@pmmmwh/react-refresh-webpack-plugin';
import CopyWebpackPlugin from'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {development} from './define.js';

const PLUGINS = [
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html',
		title: 'VideoStream'
	}),
	new Dotenv(),
	new ReactRefreshWebpackPlugin({
		overlay: false,
	})
];

if (development) PLUGINS.push(new CopyWebpackPlugin({
	patterns: [
		{ from: 'src/msw/mockServiceWorker.js' }
	]
}))

export default PLUGINS
