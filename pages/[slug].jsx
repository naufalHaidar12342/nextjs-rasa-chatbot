import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const sendData = (ws, data) => {
	ws.send(
		JSON.stringify({
			data,
		})
	);
};

export default function Chat() {
	const ENDPOINT = "ws://";
	const [ws, setWs] = useState();

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

	return (
		<Layout title="Chat Screen">
			<div className=""></div>
		</Layout>
	);
}
