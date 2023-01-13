import Link from "next/link";

export default function FifthQuestion() {
	return (
		<div className="collapse collapse-plus rounded-box mb-5">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-2xl font-semibold bg-primary text-white peer-checked:bg-white peer-checked:text-primary ">
				Apakah <i>chatbot</i> dapat dibuka lewat <i>smartphone</i> ?
			</div>
			<div className="collapse-content text-xl bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				<p>
					Untuk saat ini, <i>chatbot</i> tidak bisa tampil dengan baik pada{" "}
					<i>mobile device</i>.
				</p>
			</div>
		</div>
	);
}
