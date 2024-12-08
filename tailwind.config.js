/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/index.html"],
    theme: {
        extend: {
            screens: {
                    'sm': '280px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1280px',
                    '2xl': '1536px',
                    'fxl': '1920px',
                },
        },
    },
    plugins: [],
}