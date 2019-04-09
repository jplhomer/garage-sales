import { Component } from "react";
import Layout from "../components/Layout";
import SaleForm from "../components/SaleForm";

export default class Add extends Component {
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <h1>Add a Garage Sale</h1>

          <SaleForm />
        </div>
      </Layout>
    );
  }
}
