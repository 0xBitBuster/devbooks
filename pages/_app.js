import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";


const workSansFont = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSansFont.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
