import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <main>
      <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Rubik:400,400i,700" rel="stylesheet" />
        <title>Waukee Garage Sale Day - April 27, 2019</title>
      </Head>
      <Header />
      <section>{children}</section>
      <style jsx global>{`
        :root {
          --color-gray: #555;
          --color-orange: orange;
        }

        html {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Rubik", sans-serif;
        }

        html *,
        html *::before,
        html *::after {
          box-sizing: inherit;
        }

        .wrapper {
          padding: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin-top: 0;
        }

        label {
          display: block;
          font-size: 0.8em;
          text-transform: uppercase;
          margin-bottom: 0.5em;
        }

        .field {
          display: block;
          padding: 0.5em 0;
        }

        input,
        textarea {
          appearance: none;
          border: 1px solid #ccc;
          background: #fff;
          font-family: inherit;
          padding: 0.5em;
          width: 100%;
          font-size: 1em;
        }
      `}</style>
    </main>
  );
}
