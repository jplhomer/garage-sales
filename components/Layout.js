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
        :root {
          --color-gray: #555;
          --color-orange: orange;
        }

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

        .wrapper {
          padding: 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin-top: 0;
        }
      `}</style>
    </main>
  );
}
