import Layout from "../components/Layout";
import { MdQuestionAnswer } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { LazyMotion, motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
	return (
		<Layout title="Home">
			<motion.div
				className="flex flex-col items-center"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
			>
				<div className="text-[50px] font-medium">Learning Chatbot</div>
				<div className="text-[90px] font-bold">SMA LOYOLA</div>
				<div
					className="flex justify-center items-center space-x-11 space-y-3"
					title="Button organizer"
				>
					<LazyMotion features={domAnimation}>
						<m.div
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 0.9 }}
							transition={{ type: "spring", bounce: 0.7 }}
						>
							<Link
								href={"/help"}
								title="Help button"
								className="rounded-full w-48 h-48 flex flex-col justify-center items-center"
								style={{
									backdropFilter: "saturate(100%) blur(20px)",
									background: "rgba(255, 255, 255, 0.25)",
								}}
							>
								<MdQuestionAnswer className="text-7xl" />
								<div className="text-3xl font-medium">Help</div>
							</Link>
						</m.div>
						<m.div
							whileTap={{ scale: 0.8 }}
							whileHover={{ scale: 0.9 }}
							transition={{
								type: "spring",
								bounce: 0.7,
							}}
						>
							<Link
								href={"/choose-topic"}
								title="Start button"
								className="rounded-full w-[300px] h-[300px] flex flex-col justify-center items-center bg-darkerYellow"
							>
								<div className="text-7xl font-semibold">Start!</div>
							</Link>
						</m.div>
						<m.div
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 0.9 }}
							transition={{
								type: "spring",
								bounce: 0.7,
							}}
							animate={{ transitionDuration: 5 }}
						>
							<Link
								href={"/report-problem"}
								title="Report problem button"
								className="rounded-full w-48 h-48 flex flex-col justify-center items-center"
								style={{
									backdropFilter: "saturate(100%) blur(20px)",
									background: "rgba(255, 255, 255, 0.25)",
								}}
							>
								<MdReport className="text-7xl" />
								<div className="text-3xl font-medium">Report </div>
							</Link>
						</m.div>
					</LazyMotion>
				</div>
			</motion.div>
		</Layout>
	);
}
