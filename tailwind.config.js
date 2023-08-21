/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx,md}'],
    theme: {
        extend: {
            fontFamily: {
                eng: ['var(--poppins)'],
                kor: ['var(--pretendard)'],
            },
            fontSize: {
                '8xl': '6rem',
                '6xl': '3.75rem',
                '5xl': '3rem',
                '3xl': '1.875rem',
                '2xl': '1.5rem',
                xl: '1.25rem',
            },
            width: {
                88: '23rem',
                100: '28rem',
            },
            colors: {
                theme: {
                    background: '#18181B',
                    font: '#D9D9D9',
                },
                primary: {
                    yellow: '#FFE247',
                    hotpink: '#FF3C76',
                    teal: '#00ECC1',
                    blue: '#1753F1',
                    purple: '#946AFE',
                    darkgray: '#18181B',
                    whitegray: '#D9D9D9',
                },
            },
            keyframes: {
                rise: {
                    '0%': { top: 40 },
                    '100%': { top: 0 },
                },
            },
            animation: {
                rise: 'rise 1s',
            },
            blur: {
                '4xl': '5rem',
                '5xl': '6rem',
            },
        },
    },
    plugins: [require('tailwindcss-3d'), require('tailwind-scrollbar-hide')],
}
