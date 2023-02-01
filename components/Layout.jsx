import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Footer from "./Footer";
import BlurLayer from "./BlurLayer";
export default function Layout({ children, title = "" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className="relative px-[156px] py-[84px] min-h-screen">
				<BlurLayer>
					{children}
					<motion.div
						className="flex flex-col items-center"
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0.5 }}
						transition={{
							duration: 0.8,
							delay: 0.5,
							ease: [0, 0.71, 0.2, 1.01],
						}}
					>
						<Footer />
					</motion.div>
				</BlurLayer>
				<Image
					src="/images/chatbot-background-vXV1z5J8N-transformed.png"
					style={{ objectFit: "cover" }}
					fill
					className="fixed z-0 left-0 top-0  "
				/>
			</main>
		</div>
	);
}
