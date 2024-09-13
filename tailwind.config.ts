import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				'font-meta': '#5e5e5e',
				'font-link': '#4287f5',
				'line-gray': '#c9c9c9'
			},
			boxShadow: {
				base: '0 0 4px rgba(0,0,0,.1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
