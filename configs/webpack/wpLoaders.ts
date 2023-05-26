import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function getWpLoaders(options: BuildOptions): webpack.RuleSetRule {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    }

    const styleLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: options.isDev
                            ? '[path]/[local]__[hash:base64:3]'
                            : '[hash:base64:6]',
                        auto: /\.(module|m)\.\w+$/i,
                        exportLocalsConvention: 'camelCase' // in Components camelCase, but in scss and css with dash
                    }
                }
            },
            'sass-loader'
        ],
    }

    return {
        rules: [
            imageLoader,
            svgLoader,
            typescriptLoader,
            styleLoaders
        ]
    }
}
