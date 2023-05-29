import { BuildOptions } from './types/config'
import webpack from 'webpack'

export function getWpResolves(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        alias: {}
    }
}
