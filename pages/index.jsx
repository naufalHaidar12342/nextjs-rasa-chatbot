import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { MdQuestionAnswer } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
export default function Home() {
	return (
		<Layout title="Home">
			<div
				className="relative h-screen overflow-hidden z-20 p-20 rounded-[32px] flex items-center flex-col"
				style={{
					backdropFilter: "saturate(100%) blur(20px)",
					background: "rgba(255, 255, 255, 0.25)",
				}}
			>
				<div className="text-[50px] font-medium">Learning Chatbot</div>
				<div className="text-[90px] font-bold">SMA LOYOLA</div>
				<div
					className="flex justify-center items-center space-x-11 space-y-3"
					title="Button organizer"
				>
					<div
						title="Help button"
						className="rounded-full w-40 h-40 flex flex-col justify-center items-center"
						style={{
							backdropFilter: "saturate(100%) blur(20px)",
							background: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<MdQuestionAnswer className="text-7xl" />
						<div className="text-3xl">Help</div>
					</div>
					<div
						title="Start button"
						className="rounded-full w-[300px] h-[300px] flex flex-col justify-center items-center"
						style={{
							backdropFilter: "saturate(100%) blur(20px)",
							background: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<div className="text-7xl">Start</div>
					</div>
					<div
						title="Report problem button"
						className="rounded-full w-40 h-40 flex flex-col justify-center items-center"
						style={{
							backdropFilter: "saturate(100%) blur(20px)",
							background: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<MdReportProblem className="text-7xl" />
						<div className="text-3xl">Report </div>
					</div>
				</div>
			</div>
			<Image
				src="/images/background.svg"
				style={{ objectFit: "cover" }}
				fill
				className="fixed z-0 left-0 top-0"
			/>
		</Layout>
	);
}
