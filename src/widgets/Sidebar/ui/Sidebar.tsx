import { type FC, useState } from 'react'
import { classNames } from 'shared/libs/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import styles from './Sidebar.m.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(styles.sidebar, [className], {
                [styles.collapsed]: collapsed
            })}
        >
            <button onClick={toggle}>toggle</button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    )
}
