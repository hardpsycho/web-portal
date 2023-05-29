import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { getWpDevServer } from './wpDevServer'
import { getWpLoaders } from './wpLoaders'
import { getWpPlugins } from './wpPlugins'
import { getWpResolves } from './wpResolves'

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name]_[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: getWpPlugins(options),
        module: getWpLoaders(options),
        resolve: getWpResolves(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? getWpDevServer(options) : undefined
    }
}
