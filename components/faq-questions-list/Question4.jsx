import Link from "next/link";

export default function FourthQuestion() {
	return (
		<div className="collapse collapse-plus rounded-box mb-5">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-2xl bg-primary text-white font-semibold peer-checked:bg-white peer-checked:text-primary">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content text-xl bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
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
