import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
