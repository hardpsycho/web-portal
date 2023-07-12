import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/authByUserName/model/slice/loginSlice'
import { getLoginState } from 'features/authByUserName/model/selectors/getLoginState/getLoginState'
import { classNames } from 'shared/libs/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text, TextMode } from 'shared/ui/Text'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import styles from './LoginForm.m.scss'
interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
    const { t } = useTranslation('login-form')
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    function onChangeUsername(value: string) {
        dispatch(loginActions.setUsername(value))
    }

    function onChangePassword(value: string) {
        dispatch(loginActions.setPassword(value))
    }

    function login() {
        dispatch(loginByUsername({}))
    }

    return (
        <form className={classNames(styles.loginForm, [className])}>
            {error && <Text mode={TextMode.ERROR}>{error}</Text>}
            <div className={styles.inputWrapper}>
                <p className={styles.inputLabel}>{t('your name')}</p>
                <Input onChange={onChangeUsername} value={username} />
            </div>
            <div className={styles.inputWrapper}>
                <p className={styles.inputLabel}>{t('password')}</p>
                <Input onChange={onChangePassword} value={password} />
            </div>
            <div className={styles.buttonWrapper}>
                <Button disabled={isLoading} onClick={login}>
                    {t('login')}
                </Button>
            </div>
        </form>
    )
}
