import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
	rules: [
		{
			exclude: /node_modules/,
			test: /\.tsx?$/,
			loader: 'ts-loader',
			options: {
				transpileOnly: true
			}
		},
		{
			test: /\.(js|ts)x?$/,
			exclude: [/node_modules/],
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
					  "@babel/preset-env",
					  "@babel/preset-typescript"
					],
				  },
			}
		},
		{
			test: /\.scss$/i,
			use: [
				MiniCssExtractPlugin.loader,
			  "css-loader",
			  "sass-loader",
			],
		  },
	]
};
