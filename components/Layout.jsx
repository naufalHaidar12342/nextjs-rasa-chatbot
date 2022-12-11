import Head from "next/head";
export default function Layout({ children, title = "" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<main className="relative px-[156px] ">{children}</main>
		</div>
	);
}
