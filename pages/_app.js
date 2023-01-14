import "../styles/globals.css";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
	subsets: ["latin", "devanagari", "latin-ext"],
	weight: ["400", "500", "600", "700"],
});
function MyApp({ Component, pageProps }) {
	return (
		<main className={poppins.className}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
