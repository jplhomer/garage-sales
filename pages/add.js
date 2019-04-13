import { Component } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import SaleForm from "../components/SaleForm";
import { UserContext } from "../src/user-context";

const DynamicLogin = dynamic(() => import("../components/Login"), { ssr: false });

export default class Add extends Component {
  render() {
    return (
      <Layout>
        <UserContext.Consumer>
          {({ user }) => (
            <div className="wrapper">
              <h1>Add a Garage Sale</h1>

              {!user && <p style={{ textAlign: "center" }}>Please sign in to create a garage sale.</p>}
              <DynamicLogin />

              {user && <SaleForm />}
            </div>
          )}
        </UserContext.Consumer>
      </Layout>
    );
  }
}
