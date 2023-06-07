import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/ui/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink'
import styles from './Sidebar.m.scss'
import { AppRoutes } from 'shared/config/router/config/routerConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const toggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(styles.sidebar, [className], {
                [styles.collapsed]: collapsed
            })}
            data-testid="sidebar"
        >
            <div className={styles.items}>
                <AppLink
                    variant={AppLinkVariant.INVERTED_PRIMARY}
                    className={classNames(styles.item)}
                    to={AppRoutes.MAIN}
                >
                    <div className={styles.linkIcon}>
                        <HomeIcon />
                    </div>
                    {collapsed ? (
                        ''
                    ) : (
                        <div className={styles.linkText}>{t('главная')}</div>
                    )}
                </AppLink>
                <AppLink
                    variant={AppLinkVariant.INVERTED_PRIMARY}
                    className={classNames(styles.item)}
                    to={AppRoutes.ABOUT}
                >
                    <div className={styles.linkIcon}>
                        <AboutIcon />
                    </div>
                    {collapsed ? (
                        ''
                    ) : (
                        <div className={styles.linkText}>{t('о_нас')}</div>
                    )}
                </AppLink>
            </div>
            <Button
                onClick={toggle}
                className={styles.collapsedBtn}
                variant={ButtonVariant.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={styles.langSwitcher}
                />
            </div>
        </div>
    )
}
