import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink'
import styles from './Navbar.m.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation()

    return (
        <header className={classNames(styles.navbar, [className])}>
            <div className={classNames(styles.menu)}>
                <AppLink
                    variant={AppLinkVariant.INVERTED_PRIMARY}
                    className={classNames(styles.link)}
                    to="/"
                >
                    {t('главная')}
                </AppLink>
                <AppLink
                    variant={AppLinkVariant.INVERTED_PRIMARY}
                    className={classNames(styles.link)}
                    to="/about"
                >
                    {t('о_нас')}
                </AppLink>
            </div>
        </header>
    )
}
