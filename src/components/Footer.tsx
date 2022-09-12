import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  PaperPlaneTilt,
  PinterestLogo,
  WhatsappLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "./LogoAMB";

export function Footer() {
  return (
    <footer className="bg-gray-300 w-full m-auto flex justify-center">
      <div className="max-w-4xl flex flex-col gap-6 p-6">
        <div className="flex flex-col md:flex-col gap-2">
          <h3 className="flex items-center gap-2">
            <Envelope size={25} />
            Subscribe to newsletter
          </h3>
          <form action="" className="flex gap-3">
            <div className="border border-gray-400 rounded-md p-2 bg-white">
              <input
                type="email"
                name="email"
                id=""
                className="md:w-[250px] focus:outline-none"
              />
            </div>
            <button className="bg-green-900 px-3 rounded-md text-white">
              <PaperPlaneTilt size={28} />
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="md:w-2/4 flex flex-col gap-6 mr-4">
            <Link className="transition-all duration-300" to="/">
              <Logo />
            </Link>
            <div className="py-2">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                veritatis autem voluptas architecto nihil dolore quam nisi,
                assumenda odit esse sunt eum ut iste sapiente unde amet ad nulla
                ratione.
              </p>
            </div>

            <ul className="flex gap-2">
              <li>
                <a
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  href="https://www.instagram.com/alinemezzaribrand/"
                  target="_blank"
                >
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  href="https://www.facebook.com/alinemezzaribrand"
                  target="_blank"
                >
                  <FacebookLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  href="https://br.pinterest.com/alinemezzaribrand/"
                  target="_blank"
                >
                  <PinterestLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5545991355885"
                  target="_blank"
                >
                  <WhatsappLogo size={32} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-0">
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Atacado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Varejo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Lojas
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-md hover:text-white transition-all duration-300"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] border-gray-400 py-2">
          <span className="text-gray-400 text-sm w-[60%]">
            Copyright @2022. All Rights Reserved. Designed with love by Anderson
          </span>
          <ul>
            <li>
              <a href="#" className="text-sm">
                Políticas de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
