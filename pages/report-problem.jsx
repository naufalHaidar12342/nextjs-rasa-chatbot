import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

export default function ReportProblem() {
	const [reportProblem, setReportProblem] = useState("");
	const [validationError, setValidationError] = useState({});
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);
	const handleSubmittedProblem = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();
		if (isValidForm) {
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					reportedProblem: reportProblem,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});
			const { errors } = await res.json();
			if (errors) {
				console.log(errors);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				console.log("does email failed to sent? = ", showFailureMessage);
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			console.log("does email sent successfully? = ", showSuccessMessage);
			console.log("masalah yang dilaporkan: " + reportProblem);
		}
	};

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (reportProblem.length <= 0) {
			tempErrors["report-problem"] = true;
			isValid = false;
		}
		setValidationError({ ...tempErrors });
		console.log("errors:", validationError);
		return isValid;
	};
	return (
		<Layout title="Report problem">
			<div className="flex flex-col justify-center items-center">
				<h2 className="font-semibold leading-6" style={{ fontSize: "50px" }}>
					Tell us more about the problem!
				</h2>
				<form
					method="post"
					className="form-control py-5 mt-5"
					onSubmit={handleSubmittedProblem}
				>
					<textarea
						name="report-problem"
						placeholder="Tell us how you got the problem, how it started, etc.."
						className="textarea textarea-bordered bg-white text-primary rounded-[35px] w-[1055px] h-[516px] items-start px-8"
						style={{ fontSize: "40px" }}
						required
						value={reportProblem}
						onChange={(e) => {
							setReportProblem(e.target.value);
						}}
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
					<button
						type="submit"
						className="flex justify-center items-center px-2 rounded-2xl w-[495px] h-20 bg-darkerYellow mr-[276px] leading-6 font-medium"
						style={{ fontSize: "43px" }}
					>
						Send Report
					</button>
				</div>
			</div>
		</Layout>
	);
}
