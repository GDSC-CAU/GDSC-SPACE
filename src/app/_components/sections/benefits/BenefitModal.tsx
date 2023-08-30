'use client'

import { createContext, useContext } from 'react'
import { IconButton, type IconButtonProps, Modal, useModal } from '~/components/common'
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
            <div className="relative flex h-fit w-[calc(100%-4rem)] flex-col items-start justify-center gap-4 rounded-xl bg-black px-10 py-14 md:min-h-[25%] md:w-[calc(100%-10rem)] md:min-w-[50%] md:px-14 md:py-7 lg:w-[calc(100%-26rem)]">
                {children}
                <IconButton ariaLabel="open modal" twClass="absolute top-5 right-5" onClick={action.close}>
                    <Close />
                </IconButton>
            </div>
        </Modal>
    )
}

interface BenefitCardPropsWithChildren extends BenefitCardProps {
    iconButtonProps?: IconButtonProps
}
const BenefitModalMainContent = ({
    children,
    iconButtonProps,
    ...benefitCardProps
}: React.PropsWithChildren<BenefitCardPropsWithChildren>) => {
    const { action } = useModalContextValue()

    return (
        <BenefitCard {...benefitCardProps} twClass={`${benefitCardProps?.twClass} relative`}>
            {children}
            <IconButton
                {...iconButtonProps}
                ariaLabel="open modal"
                twClass="absolute top-5 right-5 md:top-[unset] md:bottom-5 md:right-5"
                onClick={action.open}
            >
                <Plus className={iconButtonProps?.gray ? 'fill-primary-whitegray' : 'fill-white'} />
            </IconButton>
        </BenefitCard>
    )
}

export const BenefitModal = ({ children }: React.PropsWithChildren) => {
    return <ModalActionProvider>{children}</ModalActionProvider>
}

BenefitModal.ModalContent = BenefitModalContent
BenefitModal.MainContent = BenefitModalMainContent
