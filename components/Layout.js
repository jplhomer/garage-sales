import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <main>
      <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Rubik:400,400i,700" rel="stylesheet" />
      </Head>
      <Header />
      <section>{children}</section>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Rubik", sans-serif;
        }

        html *,
        html *::before,
        html *::after {
          box-sizing: inherit;
        }
      `}</style>
    </main>
  );
}
