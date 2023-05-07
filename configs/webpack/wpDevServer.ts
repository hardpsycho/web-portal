import { BuildOptions } from './types/config'
import { Configuration } from 'webpack-dev-server'

export function getWpDevServer(options: BuildOptions): Configuration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true
    }
}
