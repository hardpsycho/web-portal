import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { LoginModal } from 'features/authByUserName'
import { classNames } from 'shared/libs/classNames'
import { getUserAuth, userStateActions } from 'entities/user'
import { Button, ButtonVariant } from 'shared/ui/Button'
import styles from './Navbar.m.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    const [isModalAuth, seIsModalAuth] = useState<boolean>(false)
    const dispatch = useDispatch()
    const isAuth = useSelector(getUserAuth)

    const OnShowModal = () => {
        seIsModalAuth(true)
    }

    const OnCloseModal = () => {
        seIsModalAuth(false)
    }

    function logout() {
        dispatch(userStateActions.logout())
    }

    if (isAuth) {
        return (
            <header className={classNames(styles.navbar, [className])}>
                <Button
                    className={classNames(styles.button)}
                    onClick={logout}
                    variant={ButtonVariant.CLEAR}
                >
                    {t('logout')}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(styles.navbar, [className])}>
            <Button
                className={classNames(styles.button)}
                onClick={OnShowModal}
                variant={ButtonVariant.CLEAR}
            >
                {t('login')}
            </Button>
            <LoginModal isOpen={isModalAuth} onClose={OnCloseModal} />
        </header>
    )
}
