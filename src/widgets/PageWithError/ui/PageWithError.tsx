import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { Button } from 'shared/ui/Button'
import styles from './PageWithError.m.scss'

interface PageWithErrorProps {
    className?: string
}

export const PageWithError: FC<PageWithErrorProps> = ({ className = '' }) => {
    const { t } = useTranslation()

    function reload() {
        location.reload()
    }

    return (
        <div className={classNames(styles.pageWithError, [className])}>
            <h1>{t('страница_с_ошибкой')}</h1>
            <Button className={styles.refreshButton} onClick={reload}>
                {t('обновить')}
            </Button>
        </div>
    )
}
