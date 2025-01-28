/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: "Poppins",
				OpenSans: "Open Sans",
				MontSerrat: "Montserrat",
				Italianno: "Italianno",
				pacifico: "Pacifico",
			},
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-in-right": {
					"0%": { opacity: "0", transform: "translateX(100%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-in-left": {
					"0%": { opacity: "0", transform: "translateX(-100%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
		},
		animation: {
			"fade-in": "fade-in 1s ease-in-out",
			"fade-in-right": "fade-in-right 1s ease-in-out",
			"fade-in-left": "fade-in-left 1s ease-in-out",
		},
		backgroundColor: {
			primary: "#FBF5DD", // Light beige
			secondary: "#16404D", // Dark teal
			accent: "#212121", // Dark gray
		},
	},
	plugins: [], // Add plugins here if needed
};
