import { Component } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import SaleForm from "../components/SaleForm";
const DynamicLogin = dynamic(() => import("../components/Login"), { ssr: false });

export default class Add extends Component {
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <h1>Add a Garage Sale</h1>

          <DynamicLogin />

          <SaleForm />
        </div>
      </Layout>
    );
  }
}
