import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'
import { Modal } from 'shared/ui/Modal'
import styles from './Navbar.m.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { t } = useTranslation()
    const [isModalAuth, seIsModalAuth] = useState<boolean>(false)

    return (
        <header className={classNames(styles.navbar, [className])}>
            <Button
                className={classNames(styles.button)}
                onClick={() => seIsModalAuth(true)}
                variant={ButtonVariant.CLEAR}
            >
                {t('войти')}
            </Button>
            <Modal isOpen={isModalAuth} onClose={() => seIsModalAuth(false)}>
                <form>
                    <input type={'text'} placeholder={t('имя')} />
                    <input type={'password'} placeholder={t('пароль')} />
                </form>
            </Modal>
        </header>
    )
}
