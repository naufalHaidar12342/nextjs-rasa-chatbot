import Head from "next/head";
import Image from "next/image";
import BlurLayer from "./BlurLayer";
import Footer from "./Footer";
export default function Layout({ children, title = "" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<main className="relative px-[156px] py-[84px] h-screen">
				<BlurLayer>
					{children}
					<Footer />
				</BlurLayer>

				<Image
					src="/images/background.svg"
					style={{ objectFit: "cover" }}
					fill
					className="fixed z-0 left-0 top-0"
				/>
			</main>
		</div>
	);
}
