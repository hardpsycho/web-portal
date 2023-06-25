import { type FC } from 'react'
import { classNames } from 'shared/libs/classNames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginMaodalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginMaodalProps> = ({
    className = '',
    ...otherProps
}) => {
    return (
        <Modal {...otherProps} className={classNames('', [className])}>
            <LoginForm />
        </Modal>
    )
}
