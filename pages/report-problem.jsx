import Link from "next/link";
import Layout from "../components/Layout";

export default function ReportProblem() {
	return (
		<Layout title="Report problem">
			<div className="flex flex-col justify-center items-center">
				<h2 className="font-semibold leading-6" style={{ fontSize: "50px" }}>
					Tell us more about the problem!
				</h2>
				<form action="" method="post" className="form-control py-5 mt-5">
					<textarea
						placeholder="Tell us how you got the problem, how it started, etc.."
						className="textarea textarea-bordered bg-white text-primary rounded-[35px] w-[1055px] h-[516px] items-start px-8"
						style={{ fontSize: "40px" }}
					/>
				</form>
				<div className="flex">
					<Link
						href={"/"}
						className="flex justify-center items-center px-2 rounded-2xl w-[495px] h-20 bg-secondary2 mr-[65px] ml-[276px] leading-6 font-medium"
						style={{ fontSize: "43px" }}
					>
						Kembali
					</Link>
					<Link
						href={""}
						className="flex justify-center items-center px-2 rounded-2xl w-[495px] h-20 bg-darkerYellow mr-[276px] leading-6 font-medium"
						style={{ fontSize: "43px" }}
					>
						Send Report
					</Link>
				</div>
			</div>
		</Layout>
	);
}
