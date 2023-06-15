import {
    MouseEvent,
    useState,
    useRef,
    type FC,
    useEffect,
    useCallback
} from 'react'
import { classNames } from 'shared/libs/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import styles from './Modal.m.scss'

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose?: () => void
}

const CLOSE_DELAY = 300

export const Modal: FC<ModalProps> = ({
    className = '',
    children,
    isOpen,
    onClose
}) => {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    const clickContentHandler = (event: MouseEvent) => {
        event.stopPropagation()
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, CLOSE_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
                window.removeEventListener('keydown', onKeyDown)
            }
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(styles.modal, [className], mods)}>
                <div
                    className={classNames(styles.modalOverlay)}
                    onClick={closeHandler}
                >
                    <div
                        className={classNames(styles.modalContent)}
                        onClick={clickContentHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
