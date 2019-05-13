const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    webpack(config, options) {
        // Further custom configuration here
        config.module.rules.push({
            test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file-loader',
        });
        return config;
    },
});
