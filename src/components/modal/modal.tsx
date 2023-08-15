'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const blurLevel = {
    none: 'backdrop-blur-none',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
} as const
type BlurLevel = keyof typeof blurLevel
type TransitionDuration =
    | 'duration-50'
    | 'duration-75'
    | 'duration-100'
    | 'duration-150'
    | 'duration-200'
    | 'duration-300'
    | 'duration-500'
    | 'duration-700'
    | 'duration-1000'

interface ModalViewProps {
    open: boolean
    onOutsideClick?: () => void
    blur?: BlurLevel
    transitionDuration?: TransitionDuration
    modalCloseClassName?: string
    modalOpenClassName?: string
}
export const ModalView = ({
    children,
    open,
    blur = 'none',
    modalCloseClassName,
    modalOpenClassName,
    transitionDuration,
    onOutsideClick,
}: React.PropsWithChildren<ModalViewProps>) => {
    const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const isModalContentClicked = e.target !== e.currentTarget
        if (isModalContentClicked) return

        onOutsideClick?.()
    }
    return (
        <div
            className={`fixed left-0 top-0 h-full w-full overflow-hidden bg-black/5 transition ${transitionDuration} ${
                blurLevel[blur]
            } ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <div
                className={`flex h-full w-full transform-gpu items-center justify-center transition ${transitionDuration} ${
                    open ? `opacity-100 ${modalOpenClassName}` : `opacity-0 ${modalCloseClassName}`
                }`}
                onClick={handleOutsideClick}
            >
                {children}
            </div>
        </div>
    )
}

export const Modal = (modalViewProps: React.PropsWithChildren<ModalViewProps>) => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient ? (
                createPortal(<ModalView {...modalViewProps} />, document.getElementById('modal-root') as HTMLDivElement)
            ) : (
                <div />
            )}
        </>
    )
}
