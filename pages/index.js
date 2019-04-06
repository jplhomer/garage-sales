import Link from "next/link";
import Header from "../components/Header";
import Map from "../components/Map";
import Head from "next/head";

function Index() {
  return (
    <main>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <section>
        <Map />
        <h2>Garage Sales Near Me</h2>
      </section>
    </main>
  );
}

export default Index;
