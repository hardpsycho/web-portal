import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
    // монтируем в апп чтобы были стили у модалки
    const root = document.getElementsByClassName('app')
    if (root.length) {
        return createPortal(children, root[0])
    }
    return createPortal(children, element)
}
