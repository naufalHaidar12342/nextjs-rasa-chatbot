import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { MdMic } from "react-icons/md";
import DummyChat from "../data/dummy-chat.json";
import { FaRobot } from "react-icons/fa";
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
	const ENDPOINT = "ws://";
	const [ws, setWs] = useState();
	const [messages, setMessages] = useState(data);

	// // koneksi websocket
	// useEffect(() => {
	// 	if (!ws) {
	// 		// init ws
	// 		const websocket = new WebSocket("");

	// 		// simpan ws ke state kalo udah konek
	// 		setWs(websocket);
	// 	}
	// }, [ws]);

	// // add eventlistener
	// useEffect(() => {
	// 	ws.addEventListener("open", (event) => {
	// 		sendData(ws, { message: "hello" });
	// 	});
	// }, []);

	// useEffect(() => {
	// 	if (ws) {
	// 		ws.onmessage = (message) => {
	// 			const messageData = JSON.parse(message.data);

	// 			if (messageData.type === "new-message") {
	// 				setMessages([...messages, messageData.message]);
	// 			}
	// 		};
	// 	}
	// });

	const mydId = 1;

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

			<h2 className="text-[50px] font-medium top-0" style={{ fontWeight: 600 }}>
				Topic selected : {}
			</h2>
			<div className=" bg-white p-4 w-full text-black rounded-2xl">
				<div className="scroll flex flex-col-reverse overflow-y-scroll h-[400px]">
					{DummyChat.sort(compareID).map((item) => {
						return (
							<div
								key={item.id}
								class={`chat px-4 ${
									item.role === "ROBOT" ? "chat-start" : "chat-end"
								}`}
							>
								<div class="chat-image avatar">
									<div class="w-16 rounded-full">
										<img
											src={`${
												item.role === "ROBOT"
													? "/images/student.png"
													: "/images/student-raise-hand.png"
											}`}
										/>
									</div>
								</div>
								<div class="chat-header text-lg">
									{item.name}
									<time class="text-base opacity-50 px-2">12:45</time>
								</div>
								<div class="chat-bubble text-2xl">{item.message}</div>
								<div class="chat-footer opacity-50">Delivered</div>
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
					<button
						onClick={voiceParse}
						className="rounded-full bg-primary text-4xl p-4 text-white"
					>
						<MdMic />
					</button>
				</div>
			</div>
		</Layout>
	);
}
