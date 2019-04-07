import Link from "next/link";

function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Waukee Garage Sale Day</a>
        </Link>
      </h1>
      <div className="date">Saturday, April 27, 2019</div>
      <style jsx>{`
        h1 {
          font-family: "Bungee Inline", sans-serif;
          font-size: 1.5em;
          margin-bottom: 0.5rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        header {
          border-top: 5px solid orange;
          padding: 0.5em;
        }

        @media (max-width: 500px) {
          text-align: center;
        }
      `}</style>
    </header>
  );
}

export default Header;
