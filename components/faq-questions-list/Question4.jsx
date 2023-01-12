import Link from "next/link";

export default function FourthQuestion() {
	return (
		<div
			tabindex="0"
			className="collapse collapse-plus  bg-primary rounded-box mb-5"
		>
			<div className="collapse-title text-2xl font-medium ">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content  text-xl">
				<p>
					Langkah-langkah dalam memakai chatbot bisa dilihat pada halaman
					sebelumnya. Klik tombol
					<Link className="btn mx-2" href={"/help"}>
						Bantuan
					</Link>
					untuk melihat lebih lengkap panduannya.
				</p>
			</div>
		</div>
	);
}
