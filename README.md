# registration-form-validation
Frontend-Coding-challenge-Feb-2020-RegistrationForm

Using laravel-mix for bundling
[laravel-mix](https://laravel-mix.com/docs/6.0/examples)

Simple Form Demo
- dynamic input validators
- responsive grid using flex

[DEMO](http://demo.joheco.de/registration-form-validation/)

## Installation

```sh
git clone https://github.com/johecode/registration-form-validation.git
cd registration-form-validation
npm install
```

### Build

```sh
npm run build
```

### Watch

```sh
npm run watch
```

to enable browser sync

- [laravel-mix integration](https://laravel-mix.com/docs/5.0/browsersync)
- [browsersync.io - docs](https://browsersync.io/docs/options/)

install:
```sh
npm i browser-sync --save-dev
npm i browser-sync-webpack-plugin --save-dev
```

and add following to your webpack config

```sh
mix.browserSync({
  injectChanges: false,
  files: [
    "css/*.css",
    "js/*.js"
  ]
})
```

## License

[MIT](https://github.com/johecode/registration-form-validation/blob/main/README.md)