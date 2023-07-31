import * as React from 'react'
import { SVGProps } from 'react'

const SvgGdsc = (props: SVGProps<SVGSVGElement>) => (
    <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 192"
        width={150}
        height={150}
        {...props}
    >
        <path
            d="M46.36 96.68 77 79a15.06 15.06 0 1 0-15.09-26.09L9 83.45Z"
            style={{
                fill: '#ea4335',
            }}
        />
        <path
            d="M69.43 142.11A15.07 15.07 0 0 0 77 114L24.07 83.45A15.06 15.06 0 0 0 9 109.54l52.9 30.54a15 15 0 0 0 7.53 2.03Z"
            style={{
                fill: '#4285f4',
            }}
        />
        <path
            d="M122.05 142.11a15 15 0 0 0 7.52-2l52.9-30.54-36.88-13.52L114.5 114a15.07 15.07 0 0 0 7.55 28.12Z"
            style={{
                fill: '#fbbc04',
            }}
        />
        <path
            d="M174.92 111.56a15.06 15.06 0 0 0 7.55-28.11l-52.9-30.54A15.06 15.06 0 0 0 114.5 79l52.9 30.54a15 15 0 0 0 7.52 2.02Z"
            style={{
                fill: '#0f9d58',
            }}
        />
    </svg>
)
export default SvgGdsc
