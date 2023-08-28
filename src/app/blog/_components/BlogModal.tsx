'use client'

import { createContext, useContext } from 'react'
import { IconButton, Modal, Tag, useModal } from '~/src/components/common'
import { Arrow } from '~/src/components/icons'

type ModalActionContext = ReturnType<typeof useModal> | null
const ModalActionContext = createContext<ModalActionContext>(null)

const useModalContextValue = () => {
    const modalActionContext = useContext(ModalActionContext)

    if (modalActionContext === null) {
        throw new Error("<BlogModal>'s children components should calles inside of <BlogModal>{children}</BlogModal>")
    }
    return modalActionContext
}

const ModalActionProvider = ({ children }: React.PropsWithChildren) => {
    const { action, open } = useModal()

    return (
        <ModalActionContext.Provider
            value={{
                action,
                open,
            }}
        >
            {children}
        </ModalActionContext.Provider>
    )
}

const BlogModalContent = ({ children }: React.PropsWithChildren) => {
    const { action, open } = useModalContextValue()

    return (
        <Modal
            open={open}
            onOutsideClick={action.close}
            modalOpenClassName="scale-100 translate-y-0"
            modalCloseClassName="scale-0 translate-y-[25%]"
            transitionDuration="duration-500"
            blur="lg"
        >
            <div className="flex h-fit min-h-[25%] flex-col gap-4">
                {children}
                <div className="flex items-center justify-center">
                    <IconButton ariaLabel="close modal" twClass="w-6 h-6 md:hidden" onClick={action.close}>
                        <Arrow className="-rotate-90" />
                    </IconButton>
                </div>
            </div>
        </Modal>
    )
}

const BlogModalMainContent = ({ children, isType }: { children: React.ReactNode; isType: boolean }) => {
    const { action } = useModalContextValue()

    return (
        <div className="flex flex-col gap-3">
            {children}
            <div className="flex items-center justify-center">
                {isType && (
                    <IconButton ariaLabel="open modal" twClass="w-6 h-6 md:hidden" onClick={action.open}>
                        <Arrow className="rotate-90" />
                    </IconButton>
                )}
            </div>
        </div>
    )
}

export const BlogModal = ({ children }: React.PropsWithChildren) => {
    return <ModalActionProvider>{children}</ModalActionProvider>
}

BlogModal.ModalContent = BlogModalContent
BlogModal.MainContent = BlogModalMainContent
