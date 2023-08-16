import * as React from 'react'
import { SVGProps } from 'react'
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
    <svg width={17} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect
            y={0.825}
            width={5.24}
            height={8.735}
            rx={2.62}
            transform="rotate(45 4.852 15.507)"
            stroke="#FFF"
            strokeWidth={1.167}
        />
        <rect
            y={0.825}
            width={5.24}
            height={8.735}
            rx={2.62}
            transform="rotate(45 -2.884 12.3)"
            stroke="#FFF"
            strokeWidth={1.167}
        />
    </svg>
)
export default SvgLink
