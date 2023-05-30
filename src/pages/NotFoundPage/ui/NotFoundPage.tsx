import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import styles from './NotFoundPage.m.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.notFoundPage, [className])}>
            {t('страница_не_найдена')}
        </div>
    )
}
