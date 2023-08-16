import * as React from 'react'
import { SVGProps } from 'react'
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
    <svg width={15} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="m4.4 6.978 2.211 2.518 4.762-5.23"
            stroke="#000"
            strokeWidth={1.167}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export default SvgCheck
