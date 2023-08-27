import * as React from 'react'
import { SVGProps } from 'react'
const SvgEventRound = (props: SVGProps<SVGSVGElement>) => (
    <svg width={1360} height={1332} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#event-round_svg__a)">
            <circle cx={680} cy={652} r={680} fill="#5A5757" fillOpacity={0.05} />
        </g>
        <g filter="url(#event-round_svg__b)">
            <circle cx={694} cy={616} r={449} fill="#5A5757" fillOpacity={0.05} />
        </g>
        <defs>
            <filter
                id="event-round_svg__a"
                x={-175}
                y={-203}
                width={1710}
                height={1710}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={87.5} />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1120_16" />
                <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1120_16" result="shape" />
            </filter>
            <filter
                id="event-round_svg__b"
                x={70}
                y={-8}
                width={1248}
                height={1248}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={87.5} />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1120_16" />
                <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1120_16" result="shape" />
            </filter>
        </defs>
    </svg>
)
export default SvgEventRound
