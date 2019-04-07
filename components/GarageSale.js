export default function GarageSale({ sale }) {
  return (
    <div className="sale">
      <div className="address">{sale.address}</div>
      <div className="hours">
        {sale.start} - {sale.end}
      </div>
      <style jsx>{`
        .sale {
          padding: 0.5rem 0;
        }
        .hours {
          color: var(--color-gray);
        }
      `}</style>
    </div>
  );
}
