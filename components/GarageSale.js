export default function GarageSale({ sale, onClick }) {
  return (
    <div className="sale" onClick={() => onClick(sale)}>
      <div className="address">{sale.address}</div>
      <div className="hours">
        {normalizeHour(sale.startTime)} - {normalizeHour(sale.endTime)}
      </div>
      <style jsx>{`
        .sale {
          padding: 0.5rem 0 0.5rem 1em;
          cursor: pointer;
          margin: 0 -1em;
        }
        .sale:hover {
          background-color: #efefef;
        }
        .hours {
          color: var(--color-gray);
        }
      `}</style>
    </div>
  );
}

function normalizeHour(time) {
  if (!time) return "";

  const [hour, minutes] = time.split(":");

  const amPm = parseInt(hour) + 1 > 12 ? "pm" : "am";
  const hourText = parseInt(hour) > 12 ? hour % 12 : hour;

  return `${parseInt(hourText)}:${minutes} ${amPm}`;
}
