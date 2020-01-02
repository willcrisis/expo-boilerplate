module.exports = function BabelConfig(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        assets: './assets',
                        components: './components',
                        config: './config',
                        contexts: './contexts',
                        hooks: './hooks',
                        screens: './screens',
                        services: './services',
                        theme: './theme',
                        types: './types'
                    }
                }
            ]
        ]
    };
};
