import Layout from "../components/Layout";

export default function TopicSelected() {
	return <Layout title={{}}></Layout>;
}
export async function getStaticPaths() {
	const paths = 2;
}
export async function getStaticProps({ params: { slug } }) {
	return {
		props: {},
	};
}
