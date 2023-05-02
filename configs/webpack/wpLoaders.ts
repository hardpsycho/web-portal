import webpack from 'webpack'

export function getWpLoaders(): webpack.RuleSetRule {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return {
        rules: [
            typescriptLoader
        ],
    }
}
