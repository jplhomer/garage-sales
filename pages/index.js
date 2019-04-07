import { Component } from "react";
import GarageSales from "../components/GarageSales";
import { getGarageSales } from "../api/sales";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default class Index extends Component {
  static async getInitialProps() {
    return {
      sales: await getGarageSales()
    };
  }

  render() {
    return (
      <Layout>
        <DynamicMap sales={this.props.sales} />
        <div className="wrapper">
          <GarageSales sales={this.props.sales} />
        </div>
      </Layout>
    );
  }
}
