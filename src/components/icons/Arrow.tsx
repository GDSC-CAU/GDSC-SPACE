import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M4.312 11.17 8.4 7.082a.318.318 0 0 0 0-.45L4.312 2.545"
            stroke="#000"
            strokeWidth={0.955}
            strokeLinecap="round"
        />
    </svg>
)
export default SvgArrow
