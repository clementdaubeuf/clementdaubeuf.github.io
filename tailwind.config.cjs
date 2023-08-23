/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    config: {
        applyBodyStyles: false,
    },
    theme: {
        extend: {
            fontFamily: {
                gtamerica: ['"GT America"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
