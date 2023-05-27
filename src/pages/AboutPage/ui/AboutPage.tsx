import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
    const { t } = useTranslation('about-page')

    return (
        <>
            {t('о_нас')}
        </>
    )
}

export default AboutPage
