import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Vendedor } from "../components/Vendedor";
import { Porque } from "../components/Porque";
import { Colecao } from "../components/Colecao";
import { Slide } from "../components/Slide";
import { Cardholder, Tag, Truck } from "phosphor-react";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 antialiased">
        <Slide />
        <section className="w-full m-auto p-4">
          <div className="flex flex-col items-center">
            <ul className="grid gap-3 grid-cols-2 md:grid-cols-3">
              <li>
                <div className="flex gap-2 items-center">
                  <Tag size={38} className="text-yellow-600" />
                  <div>
                    <h3 className="text-sm md:text-md text-yellow-600 font-bold">
                      5% Off extra
                    </h3>
                    <p className="text-sm text-gray-600">
                      via PIX ou à vista no cartão
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <Truck size={38} className="text-yellow-600" />
                  <div>
                    <h3 className="text-sm md:text-md text-yellow-600 font-bold">
                      Envio par todo Brasil
                    </h3>
                    <p className="text-sm text-gray-600">
                      Confira as regas para sua região.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <Cardholder size={38} className="text-yellow-600" />
                  <div>
                    <h3 className="text-sm md:text-md text-yellow-600 font-bold">
                      Parece em até 3x sem juros
                    </h3>
                    <p className="text-sm text-gray-600">
                      Parcela mínima de R$ 100
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-green-900 m-auto flex w-full mb-20">
          <div className="flex justify-between w-[980px] m-auto items-center py-6 px-6">
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
                  <a
                    className="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-3xl transition-all duration-300"
                    href="#"
                  >
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
