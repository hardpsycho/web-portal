import webpack from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { BuildOptions } from './types/config'
import { getStyleLoader } from './loaders/styleLoader'
import { getSvgLoader } from './loaders/svgLoader'

export function getWpLoaders({ isDev }: BuildOptions): webpack.RuleSetRule {
    const styleLoader = getStyleLoader(isDev)
    const svgLoader = getSvgLoader()

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

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return {
        rules: [imageLoader, svgLoader, typescriptLoader, styleLoader]
    }
}
