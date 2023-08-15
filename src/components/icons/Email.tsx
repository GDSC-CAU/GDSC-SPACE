import * as React from 'react'
import { SVGProps } from 'react'
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x={1.4} y={0.6} width={14} height={14} rx={2.333} stroke="#000" strokeWidth={1.167} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.383 1.908 9.641 8.755a1.75 1.75 0 0 1-2.701-.024L1.416 1.9l.907-.734 5.524 6.832c.23.285.665.289.9.008l5.742-6.848.894.75Z"
            fill="#000"
        />
    </svg>
)
export default SvgEmail
