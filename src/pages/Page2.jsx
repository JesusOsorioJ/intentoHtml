import { useEffect, useRef } from "react";
import {
  BottonPer,
  data,
  EfectoAparecer,
  EfectoPrincipal,
  EfectoTexto,
  Footer,
  Menu,
} from "../MyComponent";

export default function Page2({
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
    quiensoy.current?.scrollIntoView({ behavior: "smooth" });
  }, []);


    const juanleon = useRef(null);
  

  return (
    <div ref={quiensoy} className="text-white text-[16px]">
      {/* 1 */}
      <EfectoPrincipal />
      <Menu
        inicio={inicio}
        cuadros={cuadros}
        hablemos={hablemos}
        quiensoy={quiensoy}
        fotografia={fotografia}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        lang={lang}
        setLang={setLang}
      />

      <section
        className="flex flex-col justify-between gap-10 items-center py-30 px-10 lg:px-30 h-screen
      bg-[url(./assets/obama.jpg)]  bg-cover min-h-screen w-full bg-blend-multiply bg-[#000000a8]
      "
      >
        <div className="flex flex-col gap-5 items-center">
          <EfectoAparecer
            delay={5000}
            size="min-h-[120px]"
            translate="translate-y-full"
            idFigure="11111"
          >
            <p className="text-[70px] uppercase">{data[lang].nav_quienSoy}</p>
          </EfectoAparecer>
          <div>
            <EfectoTexto
              delay={4000}
              classAdd="max-w-[800px]"
              idData="333333"
              data={data[lang].efectoTexto_intro}
            />
          </div>
        </div>
        <div>
          <EfectoAparecer
            delay={8000}
            size="min-h-[80px]"
            translate="translate-y-full"
            idFigure="fsdfsdf"
          >
            <button onClick={() => {
                juanleon.current?.scrollIntoView({ behavior: "smooth" });
              }} className="word-container">{data[lang].acciones_botonSeguir}</button>
          </EfectoAparecer>
        </div>
      </section>

      
      <section ref={juanleon}  className="flex flex-col gap-5 justify-start items-center py-20 px-5 lg:px-30 bg-black min-h-screen">
        <EfectoAparecer
          size="min-h-[120px]"
          translate="translate-y-full"
          idFigure="11dfgdfg111"
        >
          <p className="text-[60px] uppercase">Juan León Voitier</p>
        </EfectoAparecer>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex flex-col justify-center">
            <EfectoTexto
              idData="te34trsfsdf"
              classAdd="max-w-[400px]"
              data={data[lang].iampanama}
            />
            <EfectoAparecer
              className="min-w-[300px]"
              size="min-h-[80px]"
              translate="translate-y-full"
              idFigure="ffsdf4rf34"
              delay={4000}
            >
              <BottonPer text={data[lang].acciones_botonSeguir} referencia={fotografia} />
            </EfectoAparecer>
          </div>
          <div className="size-[200px] lg:hidden my-[-60px] bg-[url(./assets/comida1.jpg)] bg-cover" />
          <div className="size-[200px] lg:hidden self-end bg-[url(./assets/comida3.jpg)] bg-cover" />
          <div className="hidden lg:flex flex-col ">
            <EfectoAparecer
              className="ml-20 my-[-30px] min-w-[400px]"
              size="min-h-[200px]"
              translate="translate-y-full"
              idFigure="hge4tree"
            >
              <div className="h-[200px] w-[400px] bg-[url(./assets/comida1.jpg)] bg-cover" />
            </EfectoAparecer>
            <EfectoAparecer
              className="min-w-[400px]"
              size="min-h-[300px]"
              translate="translate-y-full"
              idFigure="jghjghj"
              delay={300}
            >
              <div className="h-[300px] w-[400px] bg-[url(./assets/comida3.jpg)] bg-cover" />
            </EfectoAparecer>
          </div>
        </div>
      </section>

      <div className="bg-[url(./assets/landing2.jpg)] bg-cover h-[50vh] w-full bg-blend-multiply bg-[#00000073]" />


      <section ref={fotografia} className="flex flex-col gap-10 justify-start items-center py-20 px-5 lg:px-30 bg-black min-h-screen">
        <EfectoAparecer
          size="min-h-[120px]"
          translate="translate-y-full"
          idFigure="sdf4ttreg"
        >
          <p className="text-[60px] uppercase">{data[lang].iamphotografer}</p>
        </EfectoAparecer>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="size-[200px] lg:hidden mb-[-60px] bg-[url(./assets/obama.jpg)] bg-cover" />
          <div className="size-[200px] lg:hidden self-end bg-[url(./assets/landing2.jpg)] bg-cover" />
          <div className="hidden lg:flex flex-col ">
            <EfectoAparecer
              className="ml-20 my-[-30px] min-w-[400px]"
              size="min-h-[200px]"
              translate="translate-y-full"
              idFigure="hffghyrt"
            >
              <div className="h-[200px] w-[400px] bg-[url(./assets/obama.jpg)] bg-cover" />
            </EfectoAparecer>
            <EfectoAparecer
              className="min-w-[400px]"
              size="min-h-[300px]"
              translate="translate-y-full"
              idFigure="rwerwerw"
              delay={300}
            >
              <div className="h-[300px] w-[400px] bg-[url(./assets/landing2.jpg)] bg-cover" />
            </EfectoAparecer>
          </div>
          <div className="flex flex-col justify-center">
            <EfectoTexto
              idData="gdfgdfg"
              classAdd="max-w-[400px]"
              data={data[lang].definity}
            />
            <EfectoAparecer
              className="min-w-[300px]"
              size="min-h-[80px]"
              translate="translate-y-full"
              idFigure="dfdfsdrtw"
              delay={4000}
            >
              <BottonPer text={data[lang].acciones_botonSeguir} referencia={hablemos}/>
            </EfectoAparecer>
          </div>
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
