import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/libs/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }) => {
    const { t, i18n } = useTranslation()

    const changeTranslate = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', [className])}
            variant={ButtonVariant.CLEAR}
            onClick={changeTranslate}
        >
            {t('язык')}
        </Button>
    )
}
