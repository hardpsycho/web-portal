import webpack from 'webpack'

export function getWpLoaders(): webpack.RuleSetRule {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const styleLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return {
        rules: [
            typescriptLoader,
            styleLoaders
        ],
    }
}
