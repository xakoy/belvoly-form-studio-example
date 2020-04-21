const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

const plugins = []
plugins.push(
    new MonacoWebpackPlugin({
        languages: ['javascript', 'css', 'html', 'json'],
        features: ['coreCommands', 'find']
    })
)

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: plugins
    }
}
