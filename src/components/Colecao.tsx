import { api } from "../services/api";

export function Colecao() {
  async function vtex() {
    const { data } = await api.get(
      "/products/GetProductAndSkuIds?categoryId=100016"
    );
    console.log(data);
  }
  vtex();
  return (
    <section className="flex w-full m-auto justify-center mb-6">
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col items-center mb-6">
          <h2 className="font-bold text-xl">Coleção</h2>
          <span className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
        </div>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <li>
              <a href="#">
                <div className="relative flex justify-center ">
                  <img
                    className="max-w-[160px] md:max-w-[200px]"
                    src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/225692-331-440/Camisa-Giselys-Rosa-Babados-Tricoline-Amb-1.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-2 flex justify-center w-full">
                    <ul className="flex gap-2">
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        P
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        M
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        G
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-sm w-[70%]">
                    Cropped Paloma Vemelho AMB
                  </h3>
                  <span className="text-sm w-[30%] font-bold">R$ 159.90</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="relative flex justify-center ">
                  <img
                    className="max-w-[160px] md:max-w-[200px]"
                    src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/225653-331-440/Saia-Akyra-Rosa-Midi-Amb-1.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-2 flex justify-center w-full">
                    <ul className="flex gap-2">
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        P
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        M
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        G
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-sm w-[70%]">
                    Cropped Paloma Vemelho AMB
                  </h3>
                  <span className="text-sm w-[30%] font-bold">R$ 159.90</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="relative flex justify-center ">
                  <img
                    className="max-w-[160px] md:max-w-[200px]"
                    src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/225636-331-440/Blusa-Deiby-Rosa-Canelada-Manga-Princesa-Amb-1.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-2 flex justify-center w-full">
                    <ul className="flex gap-2">
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        P
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        M
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        G
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-sm w-[70%]">
                    Cropped Paloma Vemelho AMB
                  </h3>
                  <span className="text-sm w-[30%] font-bold">R$ 159.90</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="relative flex justify-center ">
                  <img
                    className="max-w-[160px] md:max-w-[200px]"
                    src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/225650-331-440/Cropped-Paloma-Vermelho-Amb-1.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-2 flex justify-center w-full">
                    <ul className="flex gap-2">
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        P
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        M
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        G
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-sm w-[70%]">
                    Cropped Paloma Vemelho AMB
                  </h3>
                  <span className="text-sm w-[30%] font-bold">R$ 159.90</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="relative flex justify-center">
                  <img
                    className="max-w-[160px] md:max-w-[200px]"
                    src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/225692-331-440/Camisa-Giselys-Rosa-Babados-Tricoline-Amb-1.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-2 flex justify-center w-full">
                    <ul className="flex gap-2">
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        P
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        M
                      </li>
                      <li className="bg-white text-sm w-7 h-7 flex items-center justify-center rounded-[50%] drop-shadow-md">
                        G
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-sm w-[70%]">
                    Cropped Paloma Vemelho AMB
                  </h3>
                  <span className="text-sm w-[30%] font-bold">R$ 159.90</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
