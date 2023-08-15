'use client'

import { useMemo, useState } from 'react'

/**
 * Modal state managing hook
 */
export const useModal = () => {
    const [open, setOpen] = useState(false)

    const modalAction = useMemo(() => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false),
            toggle: () => setOpen((prev) => !prev),
        }
    }, [])

    return {
        action: modalAction,
        open,
    }
}
