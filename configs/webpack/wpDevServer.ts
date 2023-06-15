import { Configuration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function getWpDevServer(options: BuildOptions): Configuration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true
    }
}
