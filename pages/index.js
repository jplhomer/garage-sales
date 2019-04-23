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
  state = {
    selectedSale: {}
  };

  static async getInitialProps() {
    return {
      sales: await getGarageSales()
    };
  }

  selectSale(sale) {
    this.setState({ selectedSale: sale });
  }

  render() {
    return (
      <Layout>
        <div className="grid">
          <div className="map">
            <DynamicMap
              sales={this.props.sales}
              onSaleSelected={sale => this.selectSale(sale)}
              selectedSale={this.state.selectedSale}
            />
          </div>
          <div className="wrapper">
            <GarageSales
              sales={this.props.sales}
              onSaleSelected={sale => this.selectSale(sale)}
              selectedSale={this.state.selectedSale}
            />
          </div>
        </div>
        <style jsx>{`
          @media (min-width: 500px) {
            .grid {
              display: flex;
              height: 100%;
            }

            .grid .map {
              width: 50%;
            }

            .grid .wrapper {
              width: 50%;
            }
          }

          @media (min-width: 900px) {
            .grid .map {
              width: 60%;
            }

            .grid .wrapper {
              width: 40%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
