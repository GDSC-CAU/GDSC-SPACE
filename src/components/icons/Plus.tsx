import * as React from 'react'
import { SVGProps } from 'react'
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" strokeWidth={0} xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx={8} cy={8} r={8} transform="rotate(90 8 8)" />
        <path d="M12.242 8H3.757M8 12.242V3.757" stroke="#000" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
)
export default SvgPlus
