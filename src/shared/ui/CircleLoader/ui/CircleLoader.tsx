import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './CircleLoader.m.scss'

export const CircleLoaderVariant = {
    BG_COLOR: 'bg-color',
    INVERTED_COLOR: 'inverted-bg-color'
} as const

export type CircleLoaderVariant =
    (typeof CircleLoaderVariant)[keyof typeof CircleLoaderVariant]

interface CircleLoaderProps {
    className?: string
    variant?: CircleLoaderVariant
}

export const CircleLoader: FC<CircleLoaderProps> = (props) => {
    const { className = '', variant = CircleLoaderVariant.BG_COLOR } = props

    return (
        <div
            className={classNames(styles.loaderWrapper, [
                className,
                styles[variant]
            ])}
        >
            <div className={classNames(styles.ldsRing)}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
