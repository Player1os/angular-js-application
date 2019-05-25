# Reacted devstack

---

## About

This is a starter boilerplate app I've put together using the following technologies:
- Truly universal architecture
- code shared across platforms (browser, server, desktop)
- server side rendering or server-less pre-rendering to HTML files
- universal routing
- universal internationalization (with runtime language switching)
- universal crash reporting (via Sentry)
- universal data fetching
- universal forms with universal validation (universal ftw, yeah)
- Well tuned dev stack (OS X, Linux, Windows)
- Immutable app state
- Stateless functional UI components with JavaScript styles
- Flowtype
- Vanilla hot reloading makes everything hot reloadable
- Based on Este monorepo

## Libraries
- [react](http://facebook.github.io/react/)
- [redux](http://rackt.github.io/redux/)
- [babeljs](https://babeljs.io/)
- [immutablejs](http://facebook.github.io/immutable-js)
- [react-router](https://github.com/rackt/react-router)
- [react-router-redux](https://github.com/reactjs/react-router-redux)
- [react-intl](https://github.com/yahoo/react-intl)
- [redux-storage](https://github.com/michaelcontento/redux-storage)
- [webpack](http://webpack.github.io/)
- [expressjs](http://expressjs.com/)
- [eslint](http://eslint.org/)
- [formatjs](http://formatjs.io/) Universal internationalization.
- [react-helmet](https://github.com/nfl/react-helmet) A document head manager for React.
- [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)
- [chriso/validator.js](https://github.com/chriso/validator.js) For simple yet powerfull sync/async validation.
- [bluebird](https://github.com/petkaantonov/bluebird) Because it's better than native implementation.
- [AVA](https://github.com/avajs/ava) Futuristic JavaScript test runner.
- SASS or plain CSS with [autoprefixer](https://github.com/postcss/autoprefixer)
- [uuid](https://github.com/defunctzombie/node-uuid) Generate RFC-compliant UUIDs in JavaScript.
- [gulp](http://gulpjs.com/) Aren't NPM scripts better? [No](https://twitter.com/jaffathecake/status/700320306053935104).
- [raven-js](https://github.com/getsentry/raven-js) Crash reporting client for [Sentry](https://getsentry.com).
- [gulp-real-favicon](https://www.npmjs.com/package/gulp-real-favicon) Generate a multiplatform favicon with [RealFaviconGenerator](https://realfavicongenerator.net)
- [http-status](https://www.npmjs.com/package/http-status) - Once you require this module, you may call it with either an HTTP code or a message name. With an HTTP code, you will get the message name while with a message name you will get an HTTP code. Simple.

## Prerequisites

- [node.js](http://nodejs.org) Node 6 with NPM 3 is required.
- [gulp](http://gulpjs.com/) `npm install -g gulp`
- [git](https://git-scm.com/downloads) git cmd tool is required

## Installation

```bash
npm install
```


## Start Development

- run `gulp`
- point your browser to [localhost:3000](http://localhost:3000)
- build something beautiful

## Dev Tasks

- `gulp` run web app in development mode
- `gulp -p` run web app in production mode
- `gulp -f` run web app in development mode, but only browser source rebuilds on file changes
- `gulp ava` run ava unit tests
- `gulp ava-watch` continuous test running for TDD
- `gulp eslint` eslint
- `gulp eslint --fix` fix fixable eslint issues
- `gulp favicon` create universal favicon
- `gulp messages-extract` extract messages for translation
- `gulp messages-check` check missing and unused translations
- `gulp messages-clear` remove unused translations

## Production Tasks

- `gulp build -p` build app for production
- `npm test` run all checks and tests
- `node src/server` start app, remember to set NODE_ENV and SERVER_URL
- `gulp to-html` render app to HTML for static hosting
- `gulp deploy-heroku` deploy [Heroku](tributit.herokuapp.com/) app

## Customize Reacted App

- set name in `package.json`
- set locales, sentryUrl, etc. in `src/server/config.js`
- remove unused locale-data from `src/browser/index.js`
- change `src/common/app/favicons/original/favicon.png`, then `gulp favicon` and `gulp -p`
- remove unused reducers from `src/common/configureReducer.js`
- delete unused app features
- modify or delete your FB app_id

## Flow

- install [nuclide.io](https://nuclide.io/)
- go to Nuclide settings, enable "Use the Flow binary included in each project"

## Documentation

For absolute beginners, see: [react-howto](https://github.com/petehunt/react-howto).

## Links

- [wiki](https://github.com/este/este/wiki)
- [twitter.com/estejs](https://twitter.com/estejs)

## Windows

Use this if you are using JEST or another library, which has to be compiled.

- Install Python - Install version 2.7 of Python and add it to your path or/and create a PYTHONPATH environment variable.
- Install Visual Studio (Express Edition is fine) - We will need this for some of modules that are compiled when we are installing Este. [Download VS Express](https://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx), get one of the versions that has C++ - Express 2013 for Windows Desktop for example.
- Set Visual Studio Version Flags - We need to tell node-gyp (something that is used for compiling addons) what version of Visual Studio we want to compile with. You can do this either through an environment variable GYP_MSVS_VERSION. If you are using Express, you have to say GYP_MSVS_VERSION=2013e.

Thanks to [Ryanlanciaux](http://ryanlanciaux.github.io/blog/2014/08/02/using-jest-for-testing-react-components-on-windows/)

## Tips and Tricks

- Open developer console to check current app state.
- With functional programming ([SOLID: the next step is Functional](http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional)), we don't need DI containers. We can use plain old [Pure DI](http://blog.ploeh.dk/2014/06/10/pure-di/). Check `injectMiddleware` in `configureMiddleware`.
- Learn immutable.js, for example [Seq](https://github.com/facebook/immutable-js#lazy-seq). Handy even for native arrays and objects. For example, get object values: `Seq(RoomType).toSet().toJS()`
- Recommended editor is [Atom](https://atom.io). Check [settings](https://github.com/este/este/wiki/Recommended-Atom.io-Settings).

## Demo
[BuffPanel demo app](tributit.herokuapp.com/) deployed on herokuapp.com


## FAQ

## Roadmap


## Contributing

– Jakub Kontra, [@JakubKontra](https://twitter.com/JakubKontra)
– Este made by [Daniel Steigerwald](https://twitter.com/steida) and the community.
