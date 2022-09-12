import {
  ArrowCounterClockwise,
  NewspaperClipping,
  ShoppingBagOpen,
  Truck,
} from "phosphor-react";

export function Porque() {
  return (
    <section className="flex w-full justify-center py-6">
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl items-center px-6">
        <div className="flex flex-col gap-4">
          <div className="max-w-md mb-6">
            <h1 className="text-lg mb-4 font-medium">
              Porque escolher Aline Mezzari Brand
            </h1>
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quisquam, odit repellat ipsam nemo illum consequuntur
            </span>
          </div>
          <ul className="grid grid-cols-2 gap-4 mb-4">
            <li className="md:w-[50%]">
              <div className="relative before:content-[''] before:w-7 before:h-7 before:bg-yellow-100 before:absolute before:block before:bottom-[0] before:left-[10px] before:rounded-[50%] before:opacity-50">
                <Truck size={32} className="mb-3" />
              </div>
              <div>
                <h3 className="font-medium mb-3">Envio para todo o Brasil</h3>
                <p className="text-sm">
                  Facilidade na hora de receber seus pedidos, temos parcerias
                  com as principais transportadoras e correios.
                </p>
              </div>
            </li>
            <li className="md:w-[50%]">
              <div className="relative before:content-[''] before:w-7 before:h-7 before:bg-yellow-100 before:absolute before:block before:bottom-[0] before:left-[10px] before:rounded-[50%] before:opacity-50">
                <ShoppingBagOpen size={32} className="mb-3" />
              </div>
              <div>
                <h3 className="font-medium mb-3">Fácil de comprar</h3>
                <p className="text-sm">
                  Atendimento personalizado por whatsapp com pedido minimo
                  acessivel.
                </p>
              </div>
            </li>
            <li className="md:w-[50%]">
              <div className="relative before:content-[''] before:w-7 before:h-7 before:bg-yellow-100 before:absolute before:block before:bottom-[0] before:left-[10px] before:rounded-[50%] before:opacity-50">
                <ArrowCounterClockwise size={32} className="mb-3" />
              </div>
              <div>
                <h3 className="font-medium mb-3">Lançamentos Semanais</h3>
                <p className="text-sm">Coleção atualizada semanalmente.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="max-w-[300px]"
            src="/images/Cropped-Paloma-Off-Amb-.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
