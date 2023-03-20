import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "regenerator-runtime/runtime";
const poppins = Poppins({
	subsets: ["latin", "devanagari", "latin-ext"],
	weight: ["400", "500", "600", "700"],
});
function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const currentPath = router.pathname;
	const generatePageTitle = (pathname) => {
		switch (pathname) {
			case "/":
				return "Home";
			case "/choose-topic":
				return "Choose Topic";
			case "/help":
				return "Help Page";
			case `/technology-and-information`:
				return `Chat Room`;
			case "/help":
				return "Help Page";
			case "/report-problem":
				return "Report Problem";
			case "/frequently-asked-question":
			default:
				return "Cipa: Chatbot Pendamping Belajar";
		}
	};
	return (
		<main className={poppins.className}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
