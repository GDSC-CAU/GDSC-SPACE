import * as React from 'react'
import { SVGProps } from 'react'
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x={1.4} y={1.066} width={14} height={14} rx={2.333} stroke="#000" strokeWidth={1.167} />
        <path
            d="M11.747 8.066c0 2.016-1.577 3.617-3.481 3.617-1.905 0-3.482-1.601-3.482-3.617 0-2.015 1.577-3.616 3.482-3.616 1.904 0 3.48 1.6 3.48 3.616Z"
            stroke="#000"
            strokeWidth={1.167}
        />
        <ellipse cx={12.916} cy={3.633} rx={0.677} ry={0.7} fill="#000" />
    </svg>
)
export default SvgInstagram
