require('laravel-mix-clean')
require('mix-html-builder')
const mix = require('laravel-mix')

mix.setPublicPath('dist').clean()

// mix.copyDirectory('public', 'dist')
mix.html({
  htmlRoot: './public/index.html',
  output: '',
  partialRoot: './public/partials',
  minify: {
    removeComments: true,
    collapseWhitespace: true
  }
})

// set ressource for assets
mix.setResourceRoot('/')

// assets
mix.sass('src/scss/app.scss', 'css')
mix.js('src/scripts/app.js', 'js')

/**
 * enable browser sync
 *
 * npm i browser-sync --save-dev
 * npm i browser-sync-webpack-plugin --save-dev
 *
 * https://laravel-mix.com/docs/5.0/browsersync
 * https://browsersync.io/docs/options/
 */

// mix.browserSync({
//   injectChanges: false,
//   files: [
//     "css/*.css",
//     "js/*.js"
//   ]
// })
