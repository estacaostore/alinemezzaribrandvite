import Logo from "./LogoAMB";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  List,
  PinterestLogo,
  WhatsappLogo,
  X,
} from "phosphor-react";
import classNames from "classnames";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="containerm-auto fixed top-0 left-0 w-full h-20 items-center p-4 z-50 bg-white mb-2 md:mb-5 drop-shadow-lg">
      <div className="flex max-w-5xl gap-4 mx-auto items-center justify-between text-gray-700">
        <div className="ml-4 md:ml-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="">
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex gap-3">
              <li>
                <Link
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  to="#"
                >
                  Coleções
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  to="#"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  to="#"
                >
                  Atendimento
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                  to="#"
                >
                  Sobre nós
                </Link>
              </li>
            </ul>
            <div>
              <ul>
                <li>
                  <a
                    className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5545991355885"
                    target="_blank"
                  >
                    <WhatsappLogo size={25} className="text-green-900" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={classNames(
              "fixed top-0 w-[70%] min-h-screen bg-white border-x-gray-800 drop-shadow-sm transition-all duration-300",
              {
                "right-[-100%]": open === false,
                "right-[0] fixed": open === true,
              }
            )}
          >
            <div className="flex p-4">
              <div className="flex flex-col gap-10 w-[100%] p-6">
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                      to="#"
                    >
                      Coleções
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                      to="#"
                    >
                      Produtos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                      to="#"
                    >
                      Atendimento
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                      to="#"
                    >
                      Sobre nós
                    </Link>
                  </li>
                </ul>

                <div>
                  <ul className="flex gap-4">
                    <li>
                      <a
                        className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                        href="https://www.instagram.com/alinemezzaribrand/"
                        target="_blank"
                      >
                        <InstagramLogo size={25} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                        href="https://www.facebook.com/alinemezzaribrand"
                        target="_blank"
                      >
                        <FacebookLogo size={25} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                        href="https://br.pinterest.com/alinemezzaribrand/"
                        target="_blank"
                      >
                        <PinterestLogo size={25} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg text-black hover:text-gray-500 transition-all duration-300"
                        href="https://api.whatsapp.com/send?1=pt_BR&phone=5545991355885"
                        target="_blank"
                      >
                        <WhatsappLogo size={25} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button onClick={() => setOpen(!open)}>
                  <X size={25} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <List size={25} />
          </button>
        </div>
      </div>
    </header>
  );
}
