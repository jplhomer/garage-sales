import css from "styled-jsx/css";
import Link from "next/link";

export default function Button({ href, children, ...props }) {
  const a = (
    <a className="button" {...props}>
      {children}
      <style jsx>{styles}</style>
    </a>
  );

  const btn = (
    <button className="button" {...props}>
      {children}
      <style jsx>{styles}</style>
    </button>
  );

  return href ? <Link href={href}>{a}</Link> : btn;
}

const styles = css`
  .button {
    appearance: none;
    border: 1px solid var(--color-orange);
    background: var(--color-orange);
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
  }

  .button:hover,
  .button:focus {
    background-color: #fff;
    color: var(--color-orange);
  }
`;
