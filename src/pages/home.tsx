import { Header } from "../components/Header";
import { WhatsappLogo, FacebookLogo, InstagramLogo } from "phosphor-react";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Footer />
      </main>
    </>
  );
}
