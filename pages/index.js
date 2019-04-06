import { Component } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import GarageSales from "../components/GarageSales";
import Head from "next/head";
import { getGarageSales } from "../api/sales";

export default class Index extends Component {
  static async getInitialProps() {
    return {
      sales: await getGarageSales()
    };
  }

  render() {
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
          <Map sales={this.props.sales} />
          <GarageSales sales={this.props.sales} />
        </section>
      </main>
    );
  }
}
