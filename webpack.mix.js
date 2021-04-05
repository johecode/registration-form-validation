require('laravel-mix-clean')
const mix = require('laravel-mix')

mix.setPublicPath('dist').clean()

mix.copyDirectory('public', 'dist')

// set ressource for assets
mix.setResourceRoot('/')

// assets
mix.sass('src/scss/app.scss', 'css')
mix.js('src/scripts/app.js', 'js')
