import Link from "next/link";

export default function ThirdQuestion() {
	return (
		<div className="collapse peer collapse-plus rounded-box mb-5 ">
			<div className="collapse-title text-2xl font-semibold bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content text-xl font-medium bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				<p>
					Langkah-langkah dalam memakai chatbot bisa dilihat pada halaman
					sebelumnya. Klik tombol{" "}
					<Link href={"/help"} className="rounded-2xl text-2xl bg-white">
						Bantuan
					</Link>{" "}
					untuk melihat lebih lengkap panduannya.
				</p>
			</div>
		</div>
	);
}
