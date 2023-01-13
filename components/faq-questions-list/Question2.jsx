export default function SecondQuestion() {
	return (
		<div className="collapse collapse-plus rounded-box mb-5">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-2xl font-semibold bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				Apakah harus pakai <i>monitor touchscreen</i> untuk menggunakan{" "}
				<i>chatbot</i> ?
			</div>
			<div className="collapse-content text-xl bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				<p>
					Tidak harus, kok! <i>Chatbot</i> ini tetap dapat digunakan pada
					komputer dengan <i>monitor</i> tanpa layar sentuh/<i>touchscreen</i>
				</p>
			</div>
		</div>
	);
}
