function Header() {
  return (
    <header>
      <h1>Waukee Garage Sale Day - Saturday, April 27, 2019</h1>
      <style jsx>{`
        h1 {
          font-family: "Bungee Inline", sans-serif;
          font-size: 1.5em;
        }

        header {
          border-top: 5px solid orange;
          padding: 0.5em;
        }
      `}</style>
    </header>
  );
}

export default Header;
