import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/authByUserName'
import { classNames } from 'shared/libs/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'
import styles from './Navbar.m.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    const [isModalAuth, seIsModalAuth] = useState<boolean>(false)

    const OnShowModal = () => {
        seIsModalAuth(true)
    }

    const OnCloseModal = () => {
        seIsModalAuth(false)
    }

    return (
        <header className={classNames(styles.navbar, [className])}>
            <Button
                className={classNames(styles.button)}
                onClick={OnShowModal}
                variant={ButtonVariant.CLEAR}
            >
                {t('войти')}
            </Button>
            <LoginModal isOpen={isModalAuth} onClose={OnCloseModal} />
        </header>
    )
}
