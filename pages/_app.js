import localFont from "next/font/local";
import "../styles/globals.css";

const weissenhof = localFont({
  src: "./WeissenhofGrotesk-Variable.woff2",
  variable: "--font-weissenhof",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${weissenhof.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
