import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Footer from "./Footer";
export default function Layout({ children, title = "" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<main className="relative px-[156px] py-[84px] h-screen">
				<div
					className="relative overflow-hidden z-20 p-20 rounded-[32px] flex items-center flex-col"
					style={{
						backdropFilter: "saturate(100%) blur(20px)",
						background: "rgba(255, 255, 255, 0.25)",
					}}
				>
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
				</div>

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
