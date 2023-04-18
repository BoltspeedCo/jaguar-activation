import "@/styles/globals.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
// import {} from "";
const jaguarModern = localFont({
  src: [
    {
      path: "../public/fonts/JaguarModernWeb-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/JaguarModernWeb-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-alt",
});
const proximaNova = localFont({
  src: "../public/fonts/ProximaNova-Regular.woff2",
  weight: "400",
  variable: "--font-body",
});
const rebelton = localFont({
  src: "../public/fonts/REBELTON-Medium.woff2",
  weight: "500",
  variable: "--font-heading",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={clsx(
        proximaNova.className,
        jaguarModern.variable,
        proximaNova.variable,
        rebelton.variable
      )}
    >
      <Component {...pageProps} />
    </div>
  );
}
