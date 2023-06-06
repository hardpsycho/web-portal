import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

export function getStyleLoader(isDev = true): RuleSetRule {
    return {
        test: /\.s?[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev
                            ? '[path]/[local]__[hash:base64:3]'
                            : '[hash:base64:6]',
                        auto: /\.(module|m)\.\w+$/i,
                        // in Components camelCase, but in scss and css with dash
                        exportLocalsConvention: 'camelCase'
                    }
                }
            },
            'sass-loader'
        ]
    }
}
