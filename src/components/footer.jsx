import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-bg-2">
      <div className="flex flex-col items-start justify-center max-lg:justify-start">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="flex-[2]  px-6 max-lg:p-5 max-lg:pt-15 max-lg:flex-none">
            <h2 className="text-p text-[3rem]  font-bold tracking-tight leading-[1.2] max-md:text-[2.5rem]">
              Reserve a sua <br />
              <span className="text-red-500">
                Cupdale{" "}
                <span className="text-[2rem] font-normal align-top">®</span>
              </span>{" "}
              agora mesmo!
            </h2>
          </div>
          <div className="flex-[2] bg-[#040404] w-full h-screen flex items-center justify-center max-lg:h-full max-lg:py-10">
            <div className="max-w-[600px] w-full flex flex-col justify-start items-center px-4">
              <p className="mb-6 text-s text-[2rem] font-bold tracking-tight max-md:text-[1.5rem]">
                COPO CUPDALE® — PRETO
              </p>

              <Image
                src="/CUPDALE.png"
                width={1000}
                height={1000}
                alt="Copo Cupdale"
                className="mb-8 w-[150px] h-[180px] object-contain"
              />

              <div className="w-full flex flex-col items-center ">
                <p className="font-semibold text-s text-[1.25rem]">
                  R$465,99 <span className="text-red-500 ">no Pix</span>
                </p>
                <p className="mb-6 font-semibold text-s text-[1rem]">
                  ou R$ 279,99 em até 2x sem juros
                </p>
                <button
                  className="w-full h-[45px] border border-red-500 text-red-500 rounded-full text-[.9rem] font-semibold flex items-center justify-center
        hover:bg-red-500 hover:text-s transition-all duration-300 mb-6"
                >
                  Reservar
                </button>
              </div>
              <div className="mt-4 mb-8 w-full h-[1px] bg-brd-2"></div>

              <div className="w-full flex flex-col items-start gap-3 mb-6">
                <p className="mb-2 text-s text-[2rem] font-bold tracking-tight max-md:text-[2.5rem]">
                  Características
                </p>

                <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Capacidade
                  </p>
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    750ml
                  </p>
                </div>

                <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Controle de Temperatura
                  </p>
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    0°C até 90°C
                  </p>
                </div>

                <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Material
                  </p>
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Aço Inox Premium
                  </p>
                </div>

                <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Duração da Bateria
                  </p>
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Até 24h de uso
                  </p>
                </div>

                <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    Carregamento
                  </p>
                  <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                    USB-C Rápido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 p-2 w-full flex items-center justify-between mix-blend-exclusion">
        <p className="text-s text-[.8rem]">
          © {new Date().getFullYear()} Cupdale®. Todos os direitos reservados.
        </p>
        <p className="text-s text-[.8rem]">Feito com ❤️ por paulovdev</p>
      </div>
    </footer>
  );
};

export default Footer;
