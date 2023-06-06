import webpack from 'webpack'
import { getStyleLoader, getSvgLoader } from '../webpack/loaders'
import projectWebpackConfig from '../../webpack.config'

function isRegExp(reg: webpack.RuleSetRule['test']): reg is RegExp {
    if (reg && typeof reg === 'object' && 'test' in reg) {
        return true
    }
    return false
}

export default ({ config }: { config: webpack.Configuration }) => {
    const cfg = projectWebpackConfig({})
    if (config.resolve?.modules && cfg.resolve?.modules) {
        config.resolve.modules = cfg.resolve.modules
    }

    // убираем правило для css
    if (config.module?.rules) {
        config.module.rules = config.module.rules.filter((rule) => {
            if (
                rule !== '...' &&
                isRegExp(rule.test) &&
                rule.test.test('.css')
            ) {
                return false
            }
            return true
        })
    }

    // убираем правило для svg
    config.module?.rules?.forEach((rule) => {
        if (rule !== '...' && isRegExp(rule.test) && rule.test.test('.svg')) {
            rule.exclude = /\.svg$/
        }
    })

    // добавляем свое правило для стилей
    config.module?.rules?.push(getStyleLoader(true))

    // добавляем свое правило для svg
    config.module?.rules?.push(getSvgLoader())

    console.log(config.plugins)
    //добавляем definePlugin
    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: false
        })
    )

    console.log(config.plugins)

    return config
}
