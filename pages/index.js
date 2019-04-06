import Link from "next/link";
import Header from "../components/header";
import Map from "../components/Map";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Map />
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
