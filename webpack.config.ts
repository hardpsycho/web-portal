import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './configs/webpack/buildWebpackConfig'
import { BuildOptions } from './configs/webpack/types/config'

const mode = 'development'

const isDev = mode === 'development'

const options: BuildOptions = {
    mode: 'development',
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    isDev
}

const config: webpack.Configuration = buildWebpackConfig(options)

export default config