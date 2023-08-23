import { useEffect, useRef, useState } from 'react'

interface UseVisibilityProps {
    observerOption?: IntersectionObserverInit
}
export const useVisibility = <TargetElement extends HTMLElement | SVGSVGElement>({
    observerOption = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    },
}: UseVisibilityProps) => {
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

        if (observeTarget) {
            observer.observe(observeTarget)
        }

        return () => {
            if (observeTarget) {
                observer.unobserve(observeTarget)
            }
        }
    }, [observerOption])

    return {
        setVisibilityRef: visibilityRef,
        isVisible,
    }
}
