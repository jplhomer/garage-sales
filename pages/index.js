import { Component } from "react";
import Map from "../components/Map";
import GarageSales from "../components/GarageSales";
import { getGarageSales } from "../api/sales";
import Layout from "../components/Layout";

export default class Index extends Component {
  static async getInitialProps() {
    return {
      sales: await getGarageSales()
    };
  }

  render() {
    return (
      <Layout>
        <Map sales={this.props.sales} />
        <GarageSales sales={this.props.sales} />
      </Layout>
    );
  }
}
