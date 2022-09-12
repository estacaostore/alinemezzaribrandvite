import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Vendedor } from "../components/Vendedor";
import { Porque } from "../components/Porque";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 antialiased">
        <Porque />
        <Vendedor />
        <Footer />
      </main>
    </>
  );
}
