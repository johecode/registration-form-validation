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
