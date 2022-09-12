import { WhatsappLogo } from "phosphor-react";

export function Vendedor() {
  return (
    <section className="flex w-full py-6 justify-center bg-slate-200">
      <div>
        <div className="text-center text-xl pb-3">
          <h2>Vendedoras</h2>
        </div>
        <div className="flex py-6">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-600 transition-all duration-300 group flex flex-col items-center"
                title="Vendedora Ivone"
              >
                <div className="absolute bottom-12 right-8 p-[2px] text-center  rounded-2xl bg-white opacity-70">
                  <WhatsappLogo size={20} className="text-green-900" />
                </div>
                <img
                  src="/images/jessyca.jpg"
                  alt=""
                  className="w-[100px] rounded-[50%] group-hover:border-[1px] group-hover:border-black border-[1px] transition-all duration-300"
                />
                <div className="flex flex-col text-center">
                  <h3 className="text-lg">Jessyca</h3>
                  <span className="text-sm">Sta Terezinha Itaipu - PR</span>
                </div>
              </a>
            </li>

            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-600 transition-all duration-300 group flex flex-col items-center"
                title="Vendedora Ivone"
              >
                <div className="absolute bottom-12 right-8 p-[2px] text-center  rounded-2xl bg-white opacity-70">
                  <WhatsappLogo size={20} className="text-green-900" />
                </div>
                <img
                  src="/images/pamela.jpg"
                  alt=""
                  className="w-[100px] rounded-[50%] group-hover:border-[1px] group-hover:border-black border-[1px] transition-all duration-300"
                />
                <div className="flex flex-col text-center">
                  <h3 className="text-lg">Pamela</h3>
                  <span className="text-sm">Sta Terezinha Itaipu - PR</span>
                </div>
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-600 transition-all duration-300 group flex flex-col items-center"
                title="Vendedora Ivone"
              >
                <div className="absolute bottom-12 right-8 p-[2px] text-center  rounded-2xl bg-white opacity-70">
                  <WhatsappLogo size={20} className="text-green-900" />
                </div>
                <img
                  src="/images/flaviane.jpg"
                  alt=""
                  className="w-[100px] rounded-[50%] group-hover:border-[1px] group-hover:border-black border-[1px] transition-all duration-300"
                />
                <div className="flex flex-col text-center">
                  <h3 className="text-lg">Flaviane</h3>
                  <span className="text-sm">Sta Terezinha Itaipu - PR</span>
                </div>
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-600 transition-all duration-300 group flex flex-col items-center"
                title="Vendedora Kety"
              >
                <div className="absolute bottom-12 right-8 p-[2px] text-center  rounded-2xl bg-white opacity-70">
                  <WhatsappLogo size={20} className="text-green-900 " />
                </div>
                <img
                  src="/images/kety.jpg"
                  alt=""
                  className="w-[100px] rounded-[50%] group-hover:border-[1px] group-hover:border-black border-[1px] transition-all duration-300"
                />
                <div className="flex flex-col text-center">
                  <h3 className="text-lg">Kety</h3>
                  <span className="text-sm">Bom Retiro - SP</span>
                </div>
              </a>
            </li>

            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-600 transition-all duration-300 group flex flex-col items-center"
                title="Vendedora Ivone"
              >
                <div className="absolute bottom-12 right-8 p-[2px] text-center  rounded-2xl bg-white opacity-70">
                  <WhatsappLogo size={20} className="text-green-900" />
                </div>
                <img
                  src="/images/ivone.jpg"
                  alt=""
                  className="w-[100px] rounded-[50%] group-hover:border-[1px] group-hover:border-black border-[1px] transition-all duration-300"
                />
                <div className="flex flex-col text-center">
                  <h3 className="text-lg">Ivone</h3>
                  <span className="text-sm">Bom Retiro - SP</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
