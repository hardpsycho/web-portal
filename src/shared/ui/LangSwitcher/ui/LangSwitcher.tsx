import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'
import styles from './LangSwitcher.m.scss'


interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
    const { t, i18n } = useTranslation()

    const changeTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button 
            className={classNames(styles.langSwitcher, [className])}
            variant={ButtonVariant.CLEAR}
            onClick={changeTranslate}
        >
            {t('язык')}
        </Button>
    )
}