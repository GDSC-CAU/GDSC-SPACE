'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const BASE_STEP_FILTER = 10

type Coord = {
    x: number
    y: number
}
interface TiltProps {
    /**
     * @description tilt amplitude level
     */
    tiltLevel?: number
    /**
     * @description shadow blur level
     */
    shadowBlurLevel?: number
    /**
     * @description shadow tilt amplitude level
     */
    shadowTiltLevel?: number
    /**
     * @description rollback transition duration time, unit is `second`
     */
    rollbackTransitionDuration?: number
    /**
     * @description initial tilt position
     */
    initialCoord?: Coord
    /**
     * @description shadow color
     */
    shadowColor?: string
}
interface TiltController<TiltElement extends HTMLElement | SVGElement> {
    /**
     * @description tilt `stylesheet`, attach to target tilt element
     */
    style: React.CSSProperties
    /**
     * @description listeners for tilt element, attach events to target component. Target component does not need to be tilt target element. It can be any element that triggers tilt target element to active. Should be same component depth with `setTiltRef`
     * @example
     * ```tsx
     * import { TargetTiltComponent } from "~/child"
     * const ParentComponent = () => {
     *    const { listeners, style, setTiltRef } = useTilt<HTMLDivElement>({ tiltLevel: 1 })
     *    return (
     *      <div ref={setTiltRef} {...listeners}>
     *          <div>
     *              <TargetTiltComponent style={style} />
     *          </div>
     *      </div>
     *    )
     * }
     * ```
     */
    listeners: {
        onPointerMove: (e: React.MouseEvent<TiltElement, MouseEvent>) => void
        onPointerEnter: () => void
        onPointerLeave: () => void
    }
    /**
     * @description tilt target element `ref`, attach to target component. Target component does not need to be tilt target element. It can be any element that triggers tilt target element to active. Should be same component depth with `listeners`
     * @example
     * ```tsx
     * import { TargetTiltComponent } from "~/child"
     * const ParentComponent = () => {
     *    const { listeners, style, setTiltRef } = useTilt<HTMLDivElement>({ tiltLevel: 1 })
     *    return (
     *      <div ref={setTiltRef} {...listeners}>
     *          <div>
     *              <TargetTiltComponent style={style} />
     *          </div>
     *      </div>
     *    )
     * }
     * ```
     */
    setTiltRef: React.RefObject<TiltElement>
}
export const useTilt = <TiltElement extends HTMLElement | SVGSVGElement>({
    tiltLevel = 1,
    shadowBlurLevel = 1,
    shadowTiltLevel = 1,
    rollbackTransitionDuration = 1,
    initialCoord = {
        x: 0,
        y: 0,
    },
    shadowColor = '#000',
}: TiltProps): TiltController<TiltElement> => {
    const [coord, setCoord] = useState<Coord>(initialCoord)
    const [isTiltStart, setIsTiltStart] = useState(false)
    useEffect(() => {
        const triggerCondition = isTiltStart === false && coord.x !== initialCoord.x && coord.y !== initialCoord.y

        if (triggerCondition) {
            setCoord(initialCoord)
        }
    }, [isTiltStart, coord, initialCoord])

    const tiltRef = useRef<TiltElement>(null)
    const shadowBlurTransitionDepth = (shadowBlurLevel * Math.sqrt(coord.x ** 2 + coord.y ** 2)) / BASE_STEP_FILTER
    const tiltStyle: React.CSSProperties = {
        transitionTimingFunction: 'ease-out',
        transitionProperty: 'transform, filter',
        transitionDuration: isTiltStart ? '0s' : `${rollbackTransitionDuration}s`,

        transform: `rotateX(${-coord.y * tiltLevel}deg) rotateY(${-coord.x * tiltLevel}deg)`,
        filter: `drop-shadow(${coord.x * shadowTiltLevel}px ${
            coord.y * shadowTiltLevel
        }px ${shadowBlurTransitionDepth}px ${shadowColor})`,
    }

    const handlePointerMove = useCallback((e: React.MouseEvent<TiltElement, MouseEvent>) => {
        const { left, top, width, height } = tiltRef.current?.getBoundingClientRect() as DOMRect
        const x = e.clientX - left - width / 2
        const y = e.clientY - top - height / 2
        const filteredX = -x / BASE_STEP_FILTER
        const filteredY = -y / BASE_STEP_FILTER

        setCoord({ x: filteredX, y: filteredY })
    }, [])

    const tiltController: TiltController<TiltElement> = {
        setTiltRef: tiltRef,
        style: tiltStyle,
        listeners: {
            onPointerMove: handlePointerMove,
            onPointerEnter: () => setIsTiltStart(true),
            onPointerLeave: () => setIsTiltStart(false),
        },
    }

    return tiltController
}
