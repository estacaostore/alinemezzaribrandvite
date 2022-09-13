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
        <section className="bg-green-900 m-auto flex w-full">
          <div className="flex justify-between w-[980px] m-auto items-center py-6">
            <div>
              <div className="flex flex-col gap-8 max-w-md">
                <h1 className="flex flex-col text-4xl font-bold text-white gap-2">
                  Modern Interior <span>Design Studio</span>
                </h1>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  iusto molestias delectus perferendis, architecto vero
                  dignissimos
                </p>
                <div className="flex gap-4">
                  <a className="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-3xl transition-all duration-300" href="#">
                    Shop Now
                  </a>
                  <a
                    className="px-4 py-3 border border-white rounded-3xl text-white"
                    href="#"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <img className="w-[100px]" src="/images/Assunto.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <Colecao />
        <Porque />
        <Vendedor />
        <Footer />
      </main>
    </>
  );
}
