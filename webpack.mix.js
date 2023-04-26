const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .webpackConfig({
        resolve: {
            extensions: ['',".*",".wasm",".mjs",".js",".jsx",".json",".vue"],
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
            },
        },
    })
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false
    });

mix.disableSuccessNotifications();
