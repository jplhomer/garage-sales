export default function GarageSale({ sale }) {
  return (
    <div className="sale">
      <div className="address">{sale.address}</div>
      <div className="hours">
        {normalizeHour(sale.startTime)} - {normalizeHour(sale.endTime)}
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

function normalizeHour(time) {
  if (!time) return "";

  const [hour, minutes] = time.split(":");

  const amPm = parseInt(hour) + 1 > 12 ? "pm" : "am";
  const hourText = parseInt(hour) > 12 ? hour % 12 : hour;

  return `${parseInt(hourText)}:${minutes} ${amPm}`;
}
