// TODO: Add flow comment.

// Load app modules.
import makeWebpackConfig from '../webpack.config.babel';

// Load npm modules.
import express from 'express';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';

export default ({ gulp }) => {
	gulp.task('hot-frontend', () => {
		if (process.env.NODE_ENV === 'production') {
			throw new Error(
				'Do not start webpack hot reload server in production environment.'
				+ ' You are likely using wrong npm start script');
		}

		const app = express();

		const webpackConfig = makeWebpackConfig({ isDevelopment: true });
		const compiler = webpack(webpackConfig);

		app.use(webpackDev(compiler, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
			},
			noInfo: true,
			publicPath: webpackConfig.output.publicPath,
		}));

		app.use(webpackHot(compiler));

		app.listen(webpackConfig.hotPort);
	});
};
