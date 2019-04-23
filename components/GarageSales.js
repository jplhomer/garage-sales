import GarageSale from "./GarageSale";
import Button from "./Button";

export default function GarageSales({ sales, onSaleSelected }) {
  return (
    <section>
      <header>
        <h2>Garage Sales</h2>
        <Button href="/add">Add Your Sale</Button>
      </header>
      {sales.map(sale => {
        return <GarageSale key={sale.id} sale={sale} onClick={onSaleSelected} />;
      })}
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        h2 {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}
