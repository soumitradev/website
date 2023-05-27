import Head from "next/head";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>cruX</title>
        <meta
          name="description"
          content="cruX: The programming and computing club of BITS Pilani, Hyderabad Campus"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-cr flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
