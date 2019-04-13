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
          background-color: #efefef;
          background-color: orange;
          color: white;
          text-shadow: 1px 1px 1px black;
        }

        @media (max-width: 700px) {
          text-align: center;
        }

        @media (min-width: 700px) {
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .date {
            text-transform: uppercase;
            font-weight: bold;
          }

          h1 {
            margin-bottom: 0;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
