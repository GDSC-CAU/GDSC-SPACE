import * as React from 'react'
import { SVGProps } from 'react'
const SvgEarthEye = (props: SVGProps<SVGSVGElement>) => (
    <svg width={101} height={80} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M36.718 45.533c-1.909 7.563-5.288 13.964-9.179 18.203-3.909 4.258-8.221 6.228-12.044 5.263-3.822-.965-6.683-4.745-8.103-10.349-1.413-5.577-1.35-12.815.56-20.378 1.909-7.563 5.288-13.964 9.179-18.203 3.909-4.258 8.222-6.228 12.044-5.263 3.822.964 6.683 4.745 8.103 10.348 1.413 5.578 1.35 12.816-.56 20.379Z"
            fill="#fff"
            stroke="#000"
            strokeWidth={1.16}
        />
        <path
            d="M62.342 52c-1.91 7.563-5.288 13.964-9.18 18.203-3.908 4.258-8.221 6.228-12.044 5.263-3.822-.965-6.683-4.746-8.102-10.349-1.414-5.578-1.35-12.815.559-20.378 1.909-7.563 5.288-13.964 9.179-18.203 3.909-4.258 8.222-6.228 12.044-5.264 3.822.965 6.683 4.746 8.103 10.35 1.413 5.577 1.35 12.815-.56 20.378Z"
            fill="#fff"
            stroke="#000"
            strokeWidth={1.16}
        />
        <ellipse
            cx={19.206}
            cy={41.215}
            rx={11.01}
            ry={20.419}
            transform="rotate(14.166 19.206 41.215)"
            fill="#18181B"
        />
        <ellipse
            cx={44.825}
            cy={47.682}
            rx={11.01}
            ry={20.419}
            transform="rotate(14.166 44.825 47.682)"
            fill="#18181B"
        />
        <circle cx={28.975} cy={24.996} transform="rotate(14.166 28.975 24.996)" fill="#fff" r={2.302} />
        <g filter="url(#earth-eye_svg__a)">
            <circle cx={54.21} cy={31.365} transform="rotate(14.166 54.21 31.365)" fill="#fff" r={2.302} />
        </g>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M91.184 9.225c.32.024.544.3.502.618-.488 3.68-.419 6.765.495 8.967.452 1.09 1.108 1.957 2.004 2.582.897.625 2.065 1.028 3.575 1.142a.54.54 0 0 1 .503.62.621.621 0 0 1-.654.53c-2.286-.172-4.243.367-5.8 2.03-1.579 1.69-2.828 4.619-3.474 9.407l-.012.095a.621.621 0 0 1-.717.524.54.54 0 0 1-.44-.61l.013-.096c.624-4.79.169-7.848-.936-9.739-1.088-1.863-2.865-2.684-5.15-2.856a.54.54 0 0 1-.503-.62.621.621 0 0 1 .653-.53c1.51.113 2.761-.108 3.805-.586 1.042-.478 1.912-1.23 2.642-2.231 1.474-2.023 2.352-5.036 2.84-8.716a.621.621 0 0 1 .654-.531Zm-.88 6.64c-.45 1.223-1.003 2.317-1.68 3.246-.837 1.148-1.869 2.053-3.134 2.633a7.573 7.573 0 0 1-.972.367c1.106.541 2.044 1.369 2.744 2.567.673 1.152 1.11 2.621 1.282 4.462.653-1.778 1.467-3.154 2.43-4.182 1-1.07 2.136-1.74 3.362-2.106a6.64 6.64 0 0 1-.858-.506c-1.087-.758-1.862-1.798-2.38-3.048-.42-1.012-.674-2.167-.794-3.432Z"
            fill="#fff"
        />
        <path
            d="M68.436 24.429c3.137.938 5.002 2.836 3.763 6.976M79.178 27.642c-3.138-.94-5.738-.378-6.977 3.763"
            stroke="#fff"
            strokeWidth={1.16}
            strokeLinecap="round"
        />
        <path
            d="M75.414 20.666c-.939 3.138-2.836 5.002-6.977 3.764"
            stroke="#fff"
            strokeWidth={1.16}
            strokeLinecap="round"
        />
        <path
            d="M75.414 20.666c-.939 3.138-.377 5.738 3.764 6.977"
            stroke="#fff"
            strokeWidth={1.16}
            strokeLinecap="round"
        />
        <rect width={21.62} height={5.205} rx={2.602} transform="rotate(33.249 9.71 36.318)" fill="#18181B" />
        <rect
            x={45.022}
            y={13.371}
            width={21.62}
            height={5.205}
            rx={2.602}
            transform="rotate(-5.302 45.022 13.371)"
            fill="#18181B"
        />
        <defs>
            <filter
                id="earth-eye_svg__a"
                x={50.36}
                y={29.063}
                width={7.699}
                height={7.699}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={1.547} />
                <feGaussianBlur stdDeviation={0.773} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_750_2351" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_750_2351" result="shape" />
            </filter>
        </defs>
    </svg>
)
export default SvgEarthEye
