/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{svelte,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'aero-apply-blue': '#23a566'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [],
    // HACK: HMR doesn't work for Tailwind classes in content scripts
    // https://github.com/crxjs/chrome-extension-tools/issues/671#issuecomment-1712695919
    safelist: process.env.NODE_ENV === "development" ? [{ pattern: /./ }] : [],
};
