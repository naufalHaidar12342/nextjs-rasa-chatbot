import Image from "next/image";

export default function Modal({ children }) {
	let modal = document.getElementById("modal");
	let modalImage = document.getElementById("modal-img");
	const showImageAsModal = (imageSrc) => {
		modal.classList.remove("hidden");
		modalImage = 2;
	};
	const closeModal = () => {
		modal.classList.add("hidden");
	};
	return (
		<div
			id="modal"
			className="hidden fixed top-0 left-0 z-50 w-screen h-screen bg-black/70 flex justify-center items-center"
		>
			<a
				className="fixed z-[90] top-6 right-8 text-white text-5xl font-bold"
				href="javascript:void(0)"
			></a>
		</div>
	);
}
