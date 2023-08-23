import * as React from 'react'
import { SVGProps } from 'react'
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
    <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 1v16M17 9H1" stroke="#000" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
)
export default SvgPlus
