/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B1C2D", // Midnight Blue
                minight: "#0B1C2D",
                accent: "#2DE2E6", // Electric Cyan
                secondary: "#6C5CE7", // Royal Purple
                highlight: "#00BFA6", // Soft Teal
                surface: "#F7F9FC", // Off-white
                glass: "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
