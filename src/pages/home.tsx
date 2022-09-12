import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Vendedor } from "../components/Vendedor";
import { Porque } from "../components/Porque";
import { Colecao } from "../components/Colecao";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 antialiased">
        <Colecao />
        <Porque />
        <Vendedor />
        <Footer />
      </main>
    </>
  );
}
