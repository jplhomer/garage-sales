export default function GarageSales({ sales }) {
  return sales.map(sale => {
    return <p key={sale.id}>{sale.address}</p>;
  });
}
