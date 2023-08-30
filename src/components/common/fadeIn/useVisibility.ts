'use client'

import { useEffect, useRef, useState } from 'react'

export interface UseVisibilityProps {
    observerOption?: IntersectionObserverInit
}
export const useVisibility = <TargetElement extends HTMLElement | SVGSVGElement>({
    observerOption = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    },
}: UseVisibilityProps = {}) => {
    const visibilityRef = useRef<TargetElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observeTarget = visibilityRef.current

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        }, observerOption)

        if (!observeTarget) return

        if (isVisible) {
            observer.unobserve(observeTarget)
        } else {
            observer.observe(observeTarget)
        }

        return () => {
            if (observeTarget) {
                observer.unobserve(observeTarget)
            }
        }
    }, [isVisible, observerOption])

    return {
        setVisibilityRef: visibilityRef,
        isVisible,
    }
}
