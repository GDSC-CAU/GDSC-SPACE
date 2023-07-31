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
                },
            },
        },
    },
    plugins: [],
}
