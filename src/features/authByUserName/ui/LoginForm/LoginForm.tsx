import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import styles from './LoginForm.m.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
    const { t } = useTranslation('login-form')

    return (
        <form className={classNames(styles.loginForm, [className])}>
            <div className={styles.inputWrapper}>
                <p className={styles.inputLabel}>{t('your_name')}</p>
                <Input />
            </div>
            <div className={styles.inputWrapper}>
                <p className={styles.inputLabel}>{t('password')}</p>
                <Input />
            </div>
            <div className={styles.buttonWrapper}>
                <Button>{t('login')}</Button>
            </div>
        </form>
    )
}
