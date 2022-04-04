module.exports = module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.(js|tsx?)$/,
        use: {

            loader: 'babel-loader',

        },
    });

    return config;
};