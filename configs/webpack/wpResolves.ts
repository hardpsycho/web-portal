import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function getWpResolves(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        alias: {}
    }
}
