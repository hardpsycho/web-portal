import { BuildOptions } from './types/config'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export function getWpPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: paths.html})
    ]
}
