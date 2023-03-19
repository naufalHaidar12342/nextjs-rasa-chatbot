import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { MdMic } from "react-icons/md";
import DummyChat from "../data/dummy-chat.json";
import { FaRobot } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { domAnimation, LazyMotion, m } from "framer-motion";

const sendData = (ws, data) => {
	ws.send(
		JSON.stringify({
			data,
		})
	);
};
const data = [
	{
		created_at: 1,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 2,
		user_id: 2,
		name: "Doe",
		text: "world",
	},
	{
		created_at: 3,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 4,
		user_id: 1,
		name: "John",
		text: "hello",
	},
	{
		created_at: 5,
		user_id: 1,
		name: "John",
		text: "ini baru",
	},
];

export default function Chat() {
	const handleSubmit = () => {};

	function compare(a, b) {
		if (a.created_at > b.created_at) {
			return -1;
		}
		if (a.created_at < b.created_at) {
			return 1;
		}
		return 0;
	}

	function compareID(firstID, secondID) {
		if (firstID.id > secondID.id) {
			return -1;
		}
		if (firstID.id < secondID.id) {
			return 1;
		}
		return 0;
	}

	const voiceParse = () => {};

	return (
		<Layout title="Chat Screen">
			<style jsx global>{`
				/* width */
				.scroll::-webkit-scrollbar {
					width: 16px;
					background-color: transparent;
				}

				/* Track */
				.scroll::-webkit-scrollbar-track {
					box-shadow: inset 0 0 5px grey;
					border-radius: 10px;
				}

				.scroll::-webkit-scrollbar-thumb {
					background: #d3d3d3;
					border-radius: 16px;
				}
			`}</style>
			<LazyMotion features={domAnimation}>
				<m.div
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{
						duration: 0.8,
						delay: 0.09,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="flex"
				>
					<h2 className="text-[50px] font-semibold text-center">
						Topic selected : {}
					</h2>
				</m.div>
			</LazyMotion>
			<div className=" bg-white p-4 w-full text-black rounded-2xl">
				<div className="scroll flex flex-col-reverse overflow-y-scroll h-[400px]">
					{DummyChat.sort(compareID).map((item) => {
						return (
							<div
								key={item.id}
								className={`chat px-4 ${
									item.role === "ROBOT" ? "chat-start" : "chat-end"
								}`}
							>
								<div className="chat-image avatar">
									<div className="w-16 rounded-full">
										<Image
											src={`${
												item.role === "ROBOT"
													? "/images/student.png"
													: "/images/student-raise-hand.png"
											}`}
											width={64}
											height={64}
											placeholder={`/vercel.svg`}
										/>
									</div>
								</div>
								<div className="chat-header text-lg">
									{item.name}
									<time className="text-base opacity-50 px-2">12:45</time>
								</div>
								<div
									className={`chat-bubble text-2xl ${
										item.role === "ROBOT"
											? "chat-bubble-primary"
											: "chat-bubble-info"
									}`}
								>
									{item.message}
								</div>
							</div>
						);
					})}
				</div>
				<div
					id="input"
					className="rounded-2xl bg-secondary2 p-5 bottom-0 mt-5 h-24 flex flex-row space-x-3 space-y-1 items-center"
				>
					<form onSubmit={handleSubmit} className="h-full w-full">
						<input
							type="text"
							name=""
							id=""
							className="w-full h-full rounded-2xl text-2xl p-5 bg-white focus:outline-none"
						/>
					</form>
					<LazyMotion features={domAnimation}>
						<m.button
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 0.9 }}
							transition={{
								type: "spring",
								bounce: 0.7,
							}}
							className={"rounded-full bg-primary text-4xl p-4 text-white"}
							onClick={voiceParse}
						>
							<MdMic />
						</m.button>
					</LazyMotion>
				</div>
			</div>
			<LazyMotion features={domAnimation}>
				<m.div
					style={{ fontWeight: 500 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.75 }}
					className="pt-5"
				>
					<Link
						href={"/choose-topic"}
						className="pt-2 rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow"
					>
						<h4 className="text-4xl px-4 font-semibold">Change Topic</h4>
					</Link>
				</m.div>
			</LazyMotion>
		</Layout>
	);
}
