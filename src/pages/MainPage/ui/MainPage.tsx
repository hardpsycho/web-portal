import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const MainPage: FC = () => {
    const { t } = useTranslation('main-page')

    return (
        <>
            {t('главная_страница')}
        </>
    )
}

export default MainPage
