import GarageSale from "./GarageSale";

export default function GarageSales({ sales }) {
  return (
    <div>
      <h2>Garage Sales</h2>
      {sales.map(sale => {
        return <GarageSale key={sale.id} sale={sale} />;
      })}
    </div>
  );
}
