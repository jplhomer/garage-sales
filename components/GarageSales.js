import GarageSale from "./GarageSale";
import Button from "./Button";

export default function GarageSales({ sales }) {
  return (
    <section>
      <header>
        <h2>Garage Sales</h2>
        <Button href="/add">Add Your Sale</Button>
      </header>
      {sales.map(sale => {
        return <GarageSale key={sale.id} sale={sale} />;
      })}
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h2 {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}
