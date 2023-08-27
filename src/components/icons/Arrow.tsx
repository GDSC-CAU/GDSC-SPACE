import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={0} {...props}>
        <circle cx={8} cy={8} r={8} transform="rotate(90 8 8)" fill="#fff" />
        <path d="m7 4 3.646 3.646a.5.5 0 0 1 0 .708L7 12" stroke="#000" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
)
export default SvgArrow
