import { useEffect, useRef, useState } from "react";

export default function TimeInput({ value, onChange, ...props }) {
  let ref = useRef(null);
  const [isNative, setIsNative] = useState(true);

  useEffect(() => {
    if (ref.current.type !== "time") {
      setIsNative(false);
    }

    return () => {};
  }, []);

  return isNative ? (
    <input type="time" ref={ref} value={value} onChange={e => onChange(e.target.value)} {...props} />
  ) : (
    <select value={value} onChange={e => onChange(e.target.value)} {...props}>
      {timeOptions.map(o => (
        <option value={o.value} key={o.value}>
          {o.text}
        </option>
      ))}
    </select>
  );
}

const timeOptions = [...Array(14).keys()].reduce((options, idx) => {
  const hour = idx + 6; // Start at 6am
  const hourText = hour > 12 ? hour % 12 : hour;

  return options.concat(
    ["00", "30"].map(minutes => {
      return {
        value: `${hour}:${minutes}`,
        text: `${hourText}:${minutes} ${hour > 11 ? "pm" : "am"}`
      };
    })
  );
}, []);
