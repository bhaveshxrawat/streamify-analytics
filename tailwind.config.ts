import type { Config } from "tailwindcss";
import plugin from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "87.5rem",
			},
		},
		screens: {
			"md-max": { max: "48rem" },
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#64748B",
					foreground: "#FFFFFF",
				},
				secondary: {
					DEFAULT: "#F8FAFC",
					foreground: "#1A1F2C",
				},
				accent: {
					DEFAULT: "#FB7185",
					foreground: "#FFFFFF",
				},
				muted: {
					DEFAULT: "#F1F5F9",
					foreground: "#64748B",
				},
				card: {
					DEFAULT: "#FFFFFF",
					foreground: "#1A1F2C",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				counter: {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				counter: "counter 0.5s ease-out forwards",
				"fade-in": "fade-in 0.5s ease-out forwards",
			},
		},
	},
	plugins: [plugin],
} satisfies Config;
