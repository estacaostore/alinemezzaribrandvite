import { Header } from "../components/Header";
import { WhatsappLogo, FacebookLogo, InstagramLogo } from "phosphor-react";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full max-w-[1024px] m-auto">
          <div
            className="pt-24 grid grid-cols-16 items-center relative
             gap-10 max-w-[1024px] ml-6 mr-6"
          >
            <div className="w-[340px] bg-pink-500 h-[430px] flex pb-8 justify-center items-end justify-self-center translate-x-6">
              <img
                className="w-[240px] max-w-[100%]"
                src="https://alinemezzarbrandweb.vercel.app/images/home.jpg"
                alt=""
              />
            </div>
            <div className="top-[47%] left-[-5rem] gap-8 absolute md:top-[35%] transform rotate-[-90deg] flex">
              <a href="#">
                <WhatsappLogo size={24} />
              </a>
              <a href="#">
                <FacebookLogo size={24} />
              </a>
              <a href="#">
                <InstagramLogo size={24} />
              </a>
            </div>
            <div className="p-[0 0 3rem 6rem]">
              <h1 className="text-4xl font-bold mb-4">
                Dressed to Impress New Collection
              </h1>
              <p>
                O gosto por se vestir para si e ser sua melhor inspiração diária
                é o guia motivacional de toda mulher. E nesta sequência de
                lançamento Aline Mezzari Brand, voce recebe o melhor da estação
                para compor cada look com sucesso: peças coloridas, couro e
                casacos da melhor qualidade.
              </p>
              <span className="inline-block text-2xl text-[#EF1C8F] mb-6">
                16/05/2022
              </span>

              <div className="flex items-center">
                <a
                  href="#"
                  className="inline-block pt-4 pb-4 pl-6 pr-6 bg-[#BFBFBF] hover:bg-[#A1A1A1] transition-all duration-1000"
                >
                  Atacado
                </a>
                <a
                  href="#"
                  className="inline-block pt-4 pb-4 pl-8 pr-8 bg-[#EF1C8F] hover:bg-[#8f0a53] text-white shadow drop-shadow-md transition-all duration-1000"
                >
                  Varejo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
