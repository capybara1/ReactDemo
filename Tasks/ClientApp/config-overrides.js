const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    webpack: function(config, env) {
        if (env === 'production') {
            config = removePlugin(config, 'GenerateSW');
            const workboxConfigProd = {
              swSrc: path.join(__dirname, 'public', 'service-worker.js'),
              swDest: 'service-worker.js',
              importWorkboxFrom: 'local'
            };
            config.plugins.push(new InjectManifest(workboxConfigProd));
        }
        return config;
    }, 
    // jest: function(config) {
    //     return config;
    // },
    // devServer: function(configFunction) {
    //     console.log(configFunction.toString());
    //     return function (proxy, allowedHost) {
    //         console.log(proxy, allowedHost);
    //         const config = configFunction(proxy, allowedHost);
    //         return config;
    //     }
    // }
}

function removePlugin(config, name) {
    const pluginIndex = config.plugins.findIndex((element) => {
        return element.constructor.name === name;
    })
    if (pluginIndex !== -1) {
        config.plugins.splice(pluginIndex, 1);
    }
    return config;
}