import className from "classnames";
import Logo from "./LogoAMB";
import { List, Moon, SquaresFour, X } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 bg-slate-100 w-full shadow h-20 items-center p-4 ">
      <nav className="container m-auto flex items-center justify-between text-gray-700">
        <a href="#">
          <Logo />
        </a>

        <div
          className={className("gap-10 items-center md:pt-0 w-full md:flex-row md:h-12 md:right-0 opacity-0 md:opacity-100 " , {
            "block fixed bg-slate-300 top-0 right-0 h-full w-8/12  opacity-100 pt-24 transition-all duration-300": open,
            "flex-col hidden md:block transition-all duration-300": !open,
          })}
        >
          <ul className="flex flex-col gap-10 md:pl-12 items-center md:flex-row md:gap-9">
            <li className="hover:text-gray-800 py-4 px-6">Home</li>
            <li className="hover:text-gray-800 py-4 px-6">Contato</li>
            <li className="hover:text-gray-800 py-4 px-6">Produtos</li>
            <X
              size={32}
              className="block cursor-pointer absolute top-7 right-8 md:hidden"
              onClick={() => setOpen(!open)}
            />
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Moon size={32} />
          <button
            className="block md:hidden py-4 mx-2 rounded focus:outline-none group"
            onClick={() => setOpen(!open)}
          >
            <SquaresFour size={32} />
          </button>
        </div>

        {/* <button className="block md:hidden py-4 mx-2 rounded focus:outline-none group">
          <List size={32} />

          <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 ">
            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <li className="hover:text-black py-4 px-6 w-full">Home</li>
              <li className="hover:text-black py-4 px-6 w-full">Contato</li>
              <li className="hover:text-black py-4 px-6 w-full">Produtos</li>
            </ul>
          </div>
        </button> */}
      </nav>
    </header>
  );
}
