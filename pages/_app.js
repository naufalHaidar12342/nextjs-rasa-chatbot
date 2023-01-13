import "../styles/globals.css";
import { Poppins, Space_Grotesk } from "@next/font/google";
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["italic", "normal"],
	display: "swap",
	subsets: ["devanagari", "latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
	weight: ["300"],
	style: ["normal"],
	display: "swap",
	subsets: ["latin", "latin-ext", "vietnamese"],
});
function MyApp({ Component, pageProps }) {
	return (
		<main className={poppins.className}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
