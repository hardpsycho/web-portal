import webpack from 'webpack'

export function getWpResolves(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
