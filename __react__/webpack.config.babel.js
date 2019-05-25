// TODO: Add flow comment.

// Load app modules.
import config from './src/server/config';

// Load npm modules.
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import autoprefixer from 'autoprefixer';
import ip from 'ip';
import webpack from 'webpack';
import * as plugin from 'webpack-isomorphic-tools/plugin';

// Load node modules.
import path from 'path';

// Initialize the assets.
const webpackIsomorphicAssets = {
	assets: {
		images: {
			extensions: ['gif', 'jpg', 'png', 'ico'],
			parser: plugin.url_loader_parser,
		},
		fonts: {
			extensions: ['eot', 'ttf', 'woff', 'woff2'],
			parser: plugin.url_loader_parser,
		},
		svg: {
			extension: 'svg',
			parser: plugin.url_loader_parser,
		},
		styles: {
			extensions: ['css', 'less', 'sass', 'scss', 'styl'],
			filter(module, regex, options, log) {
				return options.development
					? plugin.style_loader_filter(module, regex, options, log)
					: regex.test(module.name);
			},
			path(module, options, log) {
				return options.development
					? plugin.style_loader_path_extractor(module, options, log)
					: module.name;
			},
			parser(module, options, log) {
				return options.development
					? plugin.css_modules_loader_parser(module, options, log)
					: module.source;
			},
		},
	},
};

// Load constants.
const ABSOLUTE_BASE = path.normalize(path.join(__dirname));

const constants = Object.freeze({
	ABSOLUTE_BASE,
	NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, 'node_modules'),
	BUILD_DIR: path.join(ABSOLUTE_BASE, 'build'),
	DIST_DIR: path.join(ABSOLUTE_BASE, 'dist'),
	SRC_DIR: path.join(ABSOLUTE_BASE, 'src'),
	ASSETS_DIR: path.join(ABSOLUTE_BASE, 'assets'),
	HOT_RELOAD_PORT: process.env.HOT_RELOAD_PORT || 8008,
});

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicAssets);

// github.com/facebookincubator/create-react-app/issues/343#issuecomment-237241875
// You may want "cheap-module-source-map" instead if you prefer source maps.
const devtools = 'eval';

const loaders = {
	css: '',
	// Why not LESS or Stylus? The battle is over, let's focus on inline styles.
	scss: '!sass-loader',
	sass: '!sass-loader?indentedSyntax',
};

const serverIp = config.remoteHotReload
	? ip.address() // Dynamic IP address enables hot reload on remote devices.
	: 'localhost';

const makeConfig = (options) => {
	const { isDevelopment } = options;

	const stylesLoaders = Object.keys(loaders).map((ext) => {
		const prefix = 'css-loader!postcss-loader';
		const extLoaders = prefix + loaders[ext];
		const loader = isDevelopment
			? `style-loader!${extLoaders}`
			: ExtractTextPlugin.extract('style-loader', extLoaders);
		return {
			loader,
			test: new RegExp(`\\.(${ext})$`),
		};
	});

	return {
		hotPort: constants.HOT_RELOAD_PORT,
		cache: isDevelopment,
		debug: isDevelopment,
		devtool: isDevelopment ? devtools : '',
		entry: {
			app: isDevelopment ? [
				`webpack-hot-middleware/client?path=http://${serverIp}:${constants.HOT_RELOAD_PORT}/__webpack_hmr`,
				path.join(constants.SRC_DIR, 'browser/index.js'),
			] : [
				path.join(constants.SRC_DIR, 'browser/index.js'),
			],
		},
		module: {
			loaders: [
				{
					loader: 'url-loader?limit=10000',
					test: /\.(gif|jpg|png|svg)$/,
				}, {
					loader: 'url-loader?limit=1',
					test: /favicon\.ico$/,
				}, {
					loader: 'url-loader?limit=100000',
					test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				}, {
					test: /\.js$/,
					exclude: constants.NODE_MODULES_DIR,
					loader: 'babel',
					query: {
						cacheDirectory: true,
						presets: ['es2015', 'react', 'stage-1'],
						plugins: [
							['transform-runtime', {
								helpers: false,
								polyfill: false,
								regenerator: false,
							}],
						],
						env: {
							production: {
								plugins: [
									'transform-react-constant-elements',
								],
							},
						},
					},
				},
				...stylesLoaders,
			],
		},
		output: isDevelopment ? {
			path: constants.BUILD_DIR,
			filename: '[name].js',
			chunkFilename: '[name]-[chunkhash].js',
			publicPath: `http://${serverIp}:${constants.HOT_RELOAD_PORT}/build/`,
		} : {
			path: constants.BUILD_DIR,
			filename: '[name]-[hash].js',
			chunkFilename: '[name]-[chunkhash].js',
			publicPath: '/assets/',
		},
		plugins: (() => {
			const plugins = [
				new webpack.DefinePlugin({
					'process.env': {
						IS_BROWSER: true, // Because webpack is used only for browser code.
						IS_SERVERLESS: JSON.stringify(process.env.IS_SERVERLESS || false),
						NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
						SERVER_URL: JSON.stringify(process.env.SERVER_URL || ''),
					},
				}),
			];
			if (isDevelopment) {
				plugins.push(
					new webpack.optimize.OccurrenceOrderPlugin(),
					new webpack.HotModuleReplacementPlugin(),
					new webpack.NoErrorsPlugin(),
					webpackIsomorphicToolsPlugin.development()
				);
			} else {
				plugins.push(
					// Render styles into separate cacheable file to prevent FOUC and
					// optimize for critical rendering path.
					new ExtractTextPlugin('app-[hash].css', {
						allChunks: true,
					}),
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.OccurrenceOrderPlugin(),
					new webpack.optimize.UglifyJsPlugin({
						compress: {
							screw_ie8: true, // eslint-disable-line camelcase
							warnings: false, // Because uglify reports irrelevant warnings.
						},
					}),
					new webpack.SourceMapDevToolPlugin({
						filename: '[file].map',
					}),
					webpackIsomorphicToolsPlugin,
					new CopyWebpackPlugin([{
						from: './src/common/app/favicons/',
						to: 'favicons',
					}], {
						ignore: ['original/**'],
					})
				);
			}
			return plugins;
		})(),
		postcss: () => {
			return [autoprefixer({ browsers: 'last 2 version' })];
		},
		resolve: {
			extensions: ['', '.js'], // .json is ommited to ignore ./firebase.json
			modulesDirectories: ['src', 'node_modules'],
			root: constants.ABSOLUTE_BASE,
			alias: {
				react$: require.resolve(path.join(constants.NODE_MODULES_DIR, 'react')),
			},
		},
	};
};

/*
const nodeEnv = process.env.NODE_ENV;
const deployName = process.env.APP_DEPLOY_NAME;
const deployPath = process.env.APP_DEPLOY_PATH;

const paths = {
	assets: path.resolve(__dirname, 'assets'),
	src: path.resolve(__dirname, 'src'),
	output: {
		local: path.resolve(__dirname, 'dist'),
		staging: '//kedata/data1/B2B_Channel_Management/OfferTools/Test/',
		production: '//kedata/data1/B2B_Channel_Management/OfferTools/',
	},
};

const webpackConfig = {
	entry: path.join(paths.src, 'index.js'),
	output: {
		path: paths.output[deployPath],
		filename: 'index.js',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(nodeEnv),
				'APP_DEPLOY_NAME': JSON.stringify(deployName),
			},
		}),
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react'],
			},
		}, {
			test: /\.css$/,
			include: /node_modules/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
		}],
	},
};

if (deployName !== 'development') {
	webpackConfig.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true,
			},
		})
	);
	if (deployName !== 'production') {
		webpackConfig.devtool = 'cheap-eval-module-source-map';
	}
	if (deployPath === 'local') {
		webpackConfig.watch = true;
	}
} else {
	webpackConfig.devServer = {
		contentBase: paths.assets,
		inline: true,
		port: 8080,
		colors: true,
	};
}
*/

export default makeConfig;
