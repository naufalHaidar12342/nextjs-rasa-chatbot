import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";

export default function ChooseTopic() {
	return (
		<Layout title="Choose topic">
			<motion.div
				className="flex flex-col items-center"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
			>
				<h2
					className="text-[50px] font-medium linear-gradient-text text-center"
					style={{ fontWeight: 600 }}
				>
					Which topic do you want to learn today?
				</h2>
				<div className="flex flex-col justify-center items-center space-y-5 pt-6">
					<LazyMotion features={domAnimation}>
						<m.div whileHover={{ scale: 1.2 }} transition={{ type: "spring" }}>
							<Link
								href={`/topic-technology-information`}
								className="rounded-2xl w-[700px] h-40 p-5 flex justify-center items-center"
								style={{
									background: "rgba(255, 255, 255, 0.55)",
								}}
							>
								<div
									className="text-6xl text-center leading-tight"
									style={{
										WebkitTextFillColor: "#012363",
										fontWeight: 500,
									}}
								>
									Information&nbsp;Technology
								</div>
							</Link>
						</m.div>
						<m.div
							className="pt-5"
							style={{ fontWeight: 500 }}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.75 }}
						>
							<Link
								href={"/"}
								className="rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow"
							>
								<div className="text-5xl flex justify-center ">
									<h5 className="px-4">Back to home</h5>
								</div>
							</Link>
						</m.div>
					</LazyMotion>
				</div>
			</motion.div>
		</Layout>
	);
}
