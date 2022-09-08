import className from "classnames";
import Logo from "./LogoAMB";
import { Moon, SquaresFour, X } from "phosphor-react";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(true);

  const changeScrollHeader = () => {
    window.screenY >= 100 ? setScrollHeader(true) : setScrollHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollHeader);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 items-center p-4 z-50 bg-white">
      <nav className="container m-auto flex items-center justify-between text-gray-700">
        <a href="#">
          <Logo />
        </a>

        <div
          className={className(
            "gap-10 items-center md:pt-0 w-full md:flex-row md:h-12 md:right-0 opacity-0 md:opacity-100 ",
            {
              "block fixed bg-white top-0 right-0 h-full w-8/12 border opacity-100 pt-24 transition-all duration-300 justify-start":
                open,
              "flex-col hidden md:block transition-all duration-300": !open,
            }
          )}
        >
          <ul className="flex flex-col gap-4 md:pl-12 items-center md:flex-row md:gap-1 text-left">
            <li className="hover:text-gray-400 py-4 px-6">
              <a href="#" className="font-sans" title="">
                Novidades
              </a>
            </li>
            <li className="hover:text-gray-400 py-4 px-6">
              <a href="#" className="font-sans" title="">
                Coleções
              </a>
            </li>
            <li className="hover:text-gray-400 py-4 px-6">
              <a href="#" className="font-sans" title="">
                Promoções
              </a>
            </li>
            <li className="hover:text-gray-400 py-4 px-6">
              <a href="#" className="font-sans" title="">
                Contato
              </a>
            </li>
            <X
              size={32}
              className="block cursor-pointer absolute top-7 right-8 md:hidden"
              onClick={() => setOpen(!open)}
            />
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="block md:hidden py-4 mx-2 rounded focus:outline-none group"
            onClick={() => setOpen(!open)}
          >
            <SquaresFour size={28} />
          </button>
        </div>
      </nav>
    </header>
  );
}
