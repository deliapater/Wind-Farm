const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .postCss("resources/css/app.css", "public/css", [
            require("tailwindcss"),
          ])
    .options({
        processCssUrls: false
    });

mix.disableSuccessNotifications();