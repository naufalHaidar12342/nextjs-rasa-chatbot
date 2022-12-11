/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	theme: {
		extend: {},
		colors: {
			primary: "#003399",
			secondary2: "#D3D3D3",
			darkerYellow: "#C8940F",
			white: "#FFFFFF",
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
