'use client'

import { createContext, useContext } from 'react'
import { IconButton, Modal, useModal } from '~/components/common'
import { Close, Plus } from '~/components/icons'
import { BenefitCard, BenefitCardProps } from './benefitCard/BenefitCard'

type ModalActionContext = ReturnType<typeof useModal> | null
const ModalActionContext = createContext<ModalActionContext>(null)

const useModalContextValue = () => {
    const modalActionContext = useContext(ModalActionContext)

    if (modalActionContext === null) {
        throw new Error(
            "<BenefitModal>'s children components should called inside of <BenefitModal>{children}</BenefitModal>"
        )
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

const BenefitModalContent = ({ children }: React.PropsWithChildren) => {
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
            <div className="relative flex h-fit min-h-[50%] w-[calc(100%-26rem)] min-w-[50%] flex-col items-start justify-center gap-4 rounded-xl border border-neutral-900 bg-black p-7">
                {children}
                <IconButton ariaLabel="open modal" twClass="absolute top-5 right-5" onClick={action.close}>
                    <Close className="scale-95" />
                </IconButton>
            </div>
        </Modal>
    )
}

const BenefitModalMainContent = ({ children, ...benefitCardProps }: React.PropsWithChildren<BenefitCardProps>) => {
    const { action } = useModalContextValue()

    return (
        <BenefitCard {...benefitCardProps} twClass={`${benefitCardProps?.twClass} relative`}>
            {children}
            <IconButton ariaLabel="open modal" twClass="absolute bottom-5 right-5" onClick={action.open}>
                <Plus className="scale-110" />
            </IconButton>
        </BenefitCard>
    )
}

export const BenefitModal = ({ children }: React.PropsWithChildren) => {
    return <ModalActionProvider>{children}</ModalActionProvider>
}

BenefitModal.ModalContent = BenefitModalContent
BenefitModal.MainContent = BenefitModalMainContent
