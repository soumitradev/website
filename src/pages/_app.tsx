import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Flex, JetBrains_Mono } from "next/font/google";

// const customMaterialIconFont = localFont({
//   src: "../styles/CustomMaterialIcons.woff2",
//   variable: "--font-custom-material-icons",
//   display: "swap",
// });

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${robotoFlex.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
