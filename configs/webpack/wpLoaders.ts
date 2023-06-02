import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { BuildOptions } from './types/config'

export function getWpLoaders({ isDev }: BuildOptions): webpack.RuleSetRule {
    const typescriptLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: isDev
            ? {
                  getCustomTransformers: () => ({
                      before: [ReactRefreshTypeScript()]
                  })
              }
            : undefined
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const styleLoaders = {
        test: /\.s[ac]ss$/i,
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

    return {
        rules: [imageLoader, svgLoader, typescriptLoader, styleLoaders]
    }
}
