import { useEffect } from "react";
import {
  Carrusel,
  data,
  EfectoAparecer,
  EfectoPrincipal,
  Footer,
  Menu,
} from "../MyComponent";

export default function Page1({
  inicio,
  cuadros,
  hablemos,
  quiensoy,
  fotografia,
  isOpen,
  setIsOpen,
  lang,
  setLang,
}) {
  useEffect(() => {
    inicio.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="text-white scroll-smooth">
      <EfectoPrincipal />
      <Menu
        lang={lang}
        setLang={setLang}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inicio={inicio}
        cuadros={cuadros}
        hablemos={hablemos}
        quiensoy={quiensoy}
        fotografia={fotografia}
      />
      <section
        ref={inicio}
        className="flex justify-end bg-[url(./assets/landing.png)] bg-cover min-h-screen"
      >
        <div className="flex flex-col gap-[30px] items-end px-[120px] py-[80px] justify-between">
          <div className="bg-[url(./assets/logoJuanLeon.png)] h-[160px] w-[250px] bg-cover" />

          <div className="flex flex-col gap-9 w-fit lg:m-[60px]">
            <EfectoAparecer
              delay={4000}
              size="min-h-[120px]"
              translate="translate-y-full"
              idFigure="dasdasd"
            >
              <div className="flex flex-col">
                <p className="text-[50px]">
                  {data[lang].presentacion_biologoFotografo}
                  <span className="text-[#E9D8A6]">
                    {data[lang].presentacion_biologoFotografo2}
                  </span>
                </p>
                <p className="text-[25px]">
                  {data[lang].presentacion_proyectandoVida}
                </p>
              </div>
            </EfectoAparecer>

            <EfectoAparecer
              delay={4500}
              size="min-h-[120px]"
              translate="translate-y-full"
              idFigure="fsdfsdfs"
            >
              <button
                onClick={() =>
                  cuadros.current?.scrollIntoView({ behavior: "smooth" })
                }
                href="#portafolio"
                className="w-[250px] text-[20px] group bg-[#005F73] max-h-[50px] relative flex flex-col overflow-y-hidden"
              >
                <div className="z-[10] min-h-[50px] mx-6 hover:text-black duration-500 ease-in-out flex flex-col items-center justify-center">
                  {data[lang].acciones_portafolioBtn}
                </div>
                <div className="absolute z-1 top-0 min-h-[50px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-white" />
              </button>
            </EfectoAparecer>
          </div>
          <div />
        </div>
      </section>

      <div className="bg-[url(./assets/landing2.jpg)] h-[60vh] w-screen bg-cover bg-blend-multiply bg-[#000000a8]" />

      {/* Sección 2 */}
      <section
        ref={cuadros}
        className="flex flex-col justify-center items-center gap-[30px] py-[100px]"
      >
        <EfectoAparecer
          className=" px-10"
          size="min-h-[200px]"
          translate="translate-y-full"
          idFigure="fgdf64tggg"
        >
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <p className="text-[50px] max-w-[537px] text-center leading-[50px]">
              {data[lang].seccionEspecial_toqueEspecialEspacios}
            </p>
            <p className="text-[18px] max-w-[631px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ullamcorper magna eget lacus lacinia, ut faucibus ante molestie.
            </p>
          </div>
        </EfectoAparecer>

        
          <Carrusel images={["21.png", "22.png", "23.png", "21.png", "22.png", "23.png"]} />
      </section>

      {/* Sección 3 */}
      <section className="bg-[#005F73] flex flex-col lg:flex-row justify-center items-center gap-[50px] lg:gap-[200px] py-[150px]">
        <p className="text-[60px] w-[325px] text-center">
          {data[lang].seccionEspecial_teGustaLoQueVes}
        </p>
        <div className="flex flex-col items-center gap-[30px]">
          <p className="text-[18px] max-w-[456px] text-center">
            {data[lang].recibe}
          </p>
          <button
            onClick={() => {
              hablemos.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex justify-center items-center h-[55px] w-[228px] bg-[#E9D8A6] rounded-[20px] text-black"
          >
            {data[lang].nav_hablemos}
          </button>
        </div>
      </section>

      <Footer
        lang={lang}
        inicio={inicio}
        cuadros={cuadros}
        hablemos={hablemos}
        quiensoy={quiensoy}
        fotografia={fotografia}
      />
      <div ref={hablemos} />
    </div>
  );
}
