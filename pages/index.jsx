import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="min-h-screen mx-5 my-5">
        <button className="rounded-full bg-secondary2"></button>
      </div>
    </Layout>
  );
}
