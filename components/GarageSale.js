export default function GarageSale({ sale }) {
  return (
    <div className="sale">
      <div className="address">{sale.address}</div>
      <div className="hours">
        {sale.start} - {sale.end}
      </div>
      <style jsx>{`
        .sale {
          margin-bottom: 0.5rem;
        }
        .hours {
          color: var(--color-gray);
        }
      `}</style>
    </div>
  );
}
