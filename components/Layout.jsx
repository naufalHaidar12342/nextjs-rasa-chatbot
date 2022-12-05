import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Layout({ children, title = "" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="mt-16">{children}</main>
      <Footer />
    </div>
  );
}
