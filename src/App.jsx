import { Children, useEffect, useRef, useState } from "react";

function App() {
  return (
    <div className="text-white text-[16px]">
      {/* 1 */}
      {/* <EfectoPrincipal image="landing.png"/> */}
      <Menu />

      <section className="absolute top-0  bg-[url(./assets/obama.jpg)] bg-cover h-screen w-full brightness-50 z-[-1]" />

      <section className="flex flex-col justify-between items-center p-30   bg-cover h-screen ">
        <div className="flex flex-col items-center">
          <EfectoAparecer
            delay={5000}
            size="h-[120px]"
            translate="translate-y-full"
            idFigure="11111"
          >
            <p className="text-[70px]">¿QUIEN SOY?</p>
          </EfectoAparecer>
          <div>
            <EfectoTexto
              delay={4000}
              classAdd="w-[800px]"
              idData="333333"
              data="Desde mi niñez recuerdo tener fascinación por las imágenes que desprenden emociones fuertes, las fotografías que siempre nos muestran los monitores de “windows” o el motor de búsqueda “bing”, los cuadros que se muestran en los despachos de empresas, la profundidad que transmiten los contrastes que se crean en las fotos en blanco y negro. Recuerdo bien que los espacios minimalistas en la casa de mi tío Marcos mostraban tranquilidad, orden y paz; y era posible verlo como una fotografía sin necesidad de realmente congelar esa escena en un dispositivo o en ese entonces, en un rollo."
            />
          </div>
        </div>
        <div>
          <EfectoAparecer
            delay={8000}
            size="h-[80px]"
            translate="translate-y-full"
            idFigure="fsdfsdf"
          >
            <p className="word-container">SEGUIR VIENDO</p>
          </EfectoAparecer>
        </div>
      </section>

      <section className="flex flex-col justify-start items-center p-20  bg-black h-screen">
        <EfectoAparecer
          size="h-[120px]"
          translate="translate-y-full"
          idFigure="11dfgdfg111"
        >
          <p className="text-[60px]">Juan León Voitier</p>
        </EfectoAparecer>
        <div className="flex gap-20">
        <div className="flex flex-col justify-center">

          <EfectoTexto
            idData="te34trsfsdf"
            classAdd="w-[400px]"
            data="Soy Panameño, nací en la Provincia de Colón, por obra y gracia de Dios, para otros por que el universo así lo quiso, una provincia con lugares hermosos, bañada por el mar Caribe en toda su extensión y una cultura de raíces negras donde el baile congo indescriptiblemente con el tumbao de sus tambores despierta en nosotros sentimientos de pertenencia y orgullo."
          />
           <EfectoAparecer
              className="ml-20 w-[300px]"
              size="h-[80px]"
              translate="translate-y-full"
              idFigure="ffsdf4rf34"
              delay={4000}
            >
              <BottonPer />
              gfhgh
          </EfectoAparecer>
          </div>
          <div className="flex flex-col">
            <EfectoAparecer
              className="ml-20 my-[-30px] w-[400px]"
              size="h-[200px]"
              translate="translate-y-full"
              idFigure="hge4tree"
            >
              <div className="h-[200px] w-[400px] bg-[url(./assets/comida1.jpg)] bg-cover" />
            </EfectoAparecer>
            <EfectoAparecer
              className="w-[400px]"
              size="h-[300px]"
              translate="translate-y-full"
              idFigure="jghjghj"
            >
              <div className="h-[300px] w-[400px] bg-[url(./assets/comida3.jpg)] bg-cover" />
            </EfectoAparecer>
          </div>
        </div>
      </section>

      <section className=" bg-[url(./assets/landing2.jpg)] bg-cover h-[50vh] w-full brightness-50 z-[-1]" />

   
      <section className="flex flex-col justify-start items-center p-20  bg-black h-screen">
        <EfectoAparecer
          size="h-[120px]"
          translate="translate-y-full"
          idFigure="sdf4ttreg"
        >
          <p className="text-[60px]">Soy Fotógrafo Profesional de Fauna Salvaje</p>
        </EfectoAparecer>
        <div className="flex gap-20">
        
          <div className="flex flex-col">
            <EfectoAparecer
              className="ml-20 my-[-30px] w-[400px]"
              size="h-[200px]"
              translate="translate-y-full"
              idFigure="hjfjgjyh"
            >
              <div className="h-[200px] w-[400px] bg-[url(./assets/comida1.jpg)] bg-cover" />
            </EfectoAparecer>
            <EfectoAparecer
              className="w-[400px]"
              size="h-[300px]"
              translate="translate-y-full"
              idFigure="bbmhjk"
            >
              <div className="h-[300px] w-[400px] bg-[url(./assets/comida3.jpg)] bg-cover" />
            </EfectoAparecer>
          </div>
          <div className="flex flex-col justify-center">

          <EfectoTexto
            idData="tyu675"
            classAdd="w-[400px]"
            data="Definitivamente que el arte está en cada uno de nosotros y se hace tangible para nuestras mentes el día que decidimos reconocerlo como parte de nuestra vida, creo que está impregnado en alguna parte de nuestra alma y somos nosotros quienes decidimos si desarrollarlo o no, cómo desarrollarlo y cuáles serán las herramientas que utilizaremos para transmitirlo y hacerlo tangible a los sentidos, en mi caso la Fotografía."
          />
           <EfectoAparecer
              className="ml-20 w-[300px]"
              size="h-[80px]"
              translate="translate-y-full"
              idFigure="55856"
              delay={4000}
            >
              <BottonPer />
              gfhgh
          </EfectoAparecer>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const BottonPer = ({ textasd="SEGUIR"}) => {
  return (
    <div className={`m-10 text-[20px] group border  max-h-[70px] relative  flex flex-col items-center justify-center overflow-y-hidden`}>
      <div className="z-10 min-h-[35px] mx-10  group-hover:text-black duration-500 ease-in-out" >{textasd}</div>
      <div className={`absolute top-0 min-h-[70px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-white`}/>
    </div>
  )
}

function App3() {
  return (
    <div className="text-white">
      {/* 1 */}
      <EfectoPrincipal image="landing.png" />
      <Menu />
      <section className="flex justify-end bg-[url(./assets/landing.png)] bg-cover h-screen w-screen">
        <div className="flex flex-col gap-[30px] items-end px-[120px] py-[80px] justify-between ">
          <img className="h-10 w-10" src="./assets/logoJuanLeon.png" alt="" />
          <div className="flex flex-col gap-9 w-fit m-[60px] ">
            <div className="flex flex-col">
              <p className="text-[50px]">
                Biologo y <span className="text-[#E9D8A6]">fotografo</span>
              </p>
              <p className="text-[25px]">
                Proyectando la vida a través de la cámara
              </p>
            </div>
            <a
              href="#"
              className="bg-[#005F73] text-[18px] hover:bg-[#263f43] w-[228px] h-[55px] rounded-[20px] flex items-center justify-center"
            >
              <div>Ver Portafólio</div>
            </a>
          </div>
          <div />
        </div>
      </section>

      {/* 2 */}
      <section className="flex flex-col justify-center items-center gap-[30px] py-[100px] ">
        <p className="text-[50px] w-[537px] text-center leading-[50px]">
          Dale un toque especial a tus{" "}
          <span className="text-[#005F73] ">espacios</span>
        </p>
        <p className="text-[18px] w-[631px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ullamcorper magna eget lacus lacinia, ut faucibus ante molestie.
        </p>
        <div className="flex flex-col gap"></div>
        {["sdasd", "sadasda", "asdasd"].map((d) => (
          <Tarjeta key={d} url={d} />
        ))}
      </section>

      {/* 3 */}
      <section className="bg-[#005F73] flex justify-center items-center gap-[200px] py-[150px] ">
        <p className="text-[60px] w-[325px] text-center">
          ¿Te <span className="text-[#E9D8A6] ">gusta</span> lo que ves?
        </p>
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex flex-col gap-[40px] ">
            <p className="text-[18px]  w-[456px] text-center">
              Reciba una asesoría personalizada para ayudarte a seleccionar la
              foto que más se adapte a tus espacios.
            </p>
          </div>
          <button className="flex justify-center items-center h-[55px] w-[228px] bg-[#E9D8A6] rounded-[20px] text-black">
            !Hablemos!
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;



const Footer = () => {
  return (
    <footer className="flex flex-col gap-[100px] bg-gray-800 text-white p-4">
      <div className="flex gap-[100px] pt-[180px] pl-[140px]">
        <div className="flex flex-col gap-[30px]">
          <div className="text-[#E9D8A6] text-[22px] ">Enlaces</div>
          <div className="flex flex-col gap-[10px]  text-[18px] f">
            <p className="hover:text-[#E9D8A6]">{data["es"].nav_home}</p>

            <p className="hover:text-[#E9D8A6]">{data["es"].nav_quienSoy}</p>
            <p className="hover:text-[#E9D8A6]">{data["es"].nav_cuadros}</p>
            <p className="hover:text-[#E9D8A6]">{data["es"].nav_fotografias}</p>
            <p className="hover:text-[#E9D8A6]">Blog{data["es"].nav_home}</p>
            <p className="hover:text-[#E9D8A6]">Políticas de Privacidad{data["es"].nav_home}</p>
            <p className="hover:text-[#E9D8A6]">Términos y Condiciones{data["es"].nav_home}</p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="text-[#E9D8A6] text-[22px] ">Sígueme</div>
          <div className="flex flex-col gap-[10px]  text-[18px] f">
            <p className="hover:text-[#E9D8A6]">Instagram</p>
            <p className="hover:text-[#E9D8A6]">Facebook</p>
            <p className="hover:text-[#E9D8A6]">Pinteres</p>
          </div>
        </div>
      </div>
      <p className="self-center">
        Todos los derechos reservados © 2022 | Juan León. Sitio desarrollado por
        MiGuayaba.com en MGPanel
      </p>
    </footer>
  );
};




const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[50px] left-[70px] z-10 w-[55px] h-[30px] flex items-center justify-center"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 55 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={`transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[12px]" : ""
            }`}
            width="47"
            height="5"
            fill="#D9D9D9"
          />
          <rect
            className={`transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
            y="12"
            width="36"
            height="6"
            fill="#D9D9D9"
          />
          <rect
            className={`transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[12px]" : ""
            }`}
            y="25"
            width="55"
            height="5"
            fill="#E9D8A6"
          />
        </svg>
      </button>
      <div
        className={`fixed top-0 duration-300 flex flex-col h-screen justify-between bg-[#001219AB] backdrop-opacity-10 px-[70px] py-[50px] pr-[150px]
          ${!isOpen && "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-[100px] my-[120px] ">
          <div />
          <div className="flex flex-col gap-5">
            <div className="group">
              <a
                href="#"
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out"
              >
                HOME
              </a>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group">
              <a
                href="#"
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out"
              >
                CUADROS
              </a>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group">
              <a
                href="#"
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out"
              >
                FOTOGRAFIAS
              </a>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group">
              <a
                href="#"
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out"
              >
                ¿QUIEN SOY?
              </a>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group">
              <a
                href="#"
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out"
              >
                PORTAFOLIO
              </a>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group">
              <a
                href="#"
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out"
              >
                !HABLEMOS!
              </a>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
          </div>
          <div className="flex gap-4">
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
};

const EfectoAparecer = ({
  children,
  size,
  translate,
  idFigure,
  delay = 0,
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Reemplaza la clase cuando el elemento sea visible

          const fondo = document.getElementById(idFigure);
          setTimeout(() => {
            fondo.classList.replace("translate-y-full", "text-[16px]");
          }, delay);

          // Deja de observar para que la animación se dispare una sola vez
          observer.unobserve(element);
        }
      },
      { threshold: 0.9 } // Se activa cuando al menos el 10% del elemento es visible
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${size} overflow-hidden ${className}`}>
      <div
        id={idFigure}
        className={`${translate} ${size} duration-300 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

const EfectoTexto = ({ data, delay = 0, idData, classAdd }) => {
  const array = data.split(/(?=\s)|/g);

  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Reemplaza la clase cuando el elemento sea visible

          array.forEach((i, index) => {
            const text = document.getElementById(`letra${idData}${index}`);

            if (text) {
              setTimeout(() => {
                text.classList.replace("text-[0px]", "text-[18px]");
              }, index * 15 + delay);
            }
          });

          observer.unobserve(element);
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap items-end h-fit ${classAdd}`}
    >
      {array.map((d, i) => (
        <div
          id={`letra${idData}${i}`}
          className={`duration-200 text-[0px] `}
          key={i}
        >
          {d == " " ? "\u00A0" : d}
        </div>
      ))}
    </div>
  );
};

function EfectoPrincipal({ image }) {
  window.addEventListener("load", () => {
    const fondo = document.getElementById("fondo");
    setTimeout(() => {
      fondo.classList.add("opacity-0");
    }, 2500);
    setTimeout(() => {
      fondo.classList.add("scale-300");
    }, 1500);

    const name = document.getElementById("name");
    setTimeout(() => {
      name.classList.replace("scale-300", "scale-100");
    }, 2000);

    const fondo1 = document.getElementById("fondo1");
    setTimeout(() => {
      fondo1.classList.replace("bg-white", "bg-transparent");
    }, 500);

    const fondo2 = document.getElementById("fondo2");
    setTimeout(() => {
      fondo2.classList.add("hidden");
    }, 3500);
  });

  return (
    <div
      id="fondo2"
      className="fixed h-screen w-full text-white overflow-hidden "
    >
      <div
        id="name"
        className={`bg-[url(./assets/${image})] h-screen  bg-cover scale-300 duration-1000`}
      />
      <div
        id="fondo1"
        className="absolute top-0 bg-white h-screen w-screen duration-2000"
      />

      <div
        id="fondo"
        className="flex flex-col absolute top-0  items-center justify-center size-full duration-1000"
      >
        <div className="bg-black size-full" />
        <div className="size-full">
          <svg
            width="100%"
            viewBox="0 0 900 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="textMask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="40%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Montserrat, sans-serif"
                  fontSize="50"
                  fontWeight="700"
                  fill="black"
                  width="10"
                  color="white"
                >
                  <tspan x="50%" dy="0">
                    JUAN
                  </tspan>
                  <tspan x="50%" dy="1.2em">
                    LEÓN
                  </tspan>
                </text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="black"
              mask="url(#textMask)"
            />
          </svg>
        </div>

        <div className="bg-black size-full" />
      </div>
    </div>
  );
}

const Facebook = () => {
  return (
    <div>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="currentColor"
        className="hover:text-[#E9D8A6]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2222 0H8.75C3.94444 0 0 3.94444 0 8.77778V26.25C0 31.0556 3.94444 35 8.75 35H26.2222C31.0556 35 35 31.0556 35 26.2222V8.77778C35 3.94444 31.0556 0 26.2222 0ZM22.1944 17.5H18.8889V28.3333H14.7222V17.5H12.5V13.0556H14.4444V11.1667C14.4444 9.38889 15.3333 6.58333 19.0833 6.58333H22.5V10.2778H20.0833C19.6944 10.2778 19.1667 10.5278 19.1667 11.3889V13.0556H22.5833L22.1944 17.5Z"
          fill="white hover:text-[#E9D8A6]"
        />
      </svg>
    </div>
  );
};

const Tarjeta = ({ url }) => {
  return (
    <div className="flex flex-col">
      <img src="" alt="" />
      <div>
        <p className="text-[18px] font-[600] ">
          Lorem ipsum dolor sit ame - 14x10’’
        </p>
        <p className="text-[16px]">Desde $95.00</p>
      </div>
    </div>
  );
};

const Twitter = () => {
  return (
    <div>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="currentColor"
        className="hover:text-[#E9D8A6]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_19)">
          <path
            d="M26.25 0H8.75C3.93793 0 0 3.93622 0 8.75V26.25C0 31.0621 3.93793 35 8.75 35H26.25C31.0621 35 35 31.0621 35 26.25V8.75C35 3.93622 31.0621 0 26.25 0ZM17.5 24.7914C13.4724 24.7914 10.2082 21.5259 10.2082 17.5C10.2082 13.4724 13.4724 10.2082 17.5 10.2082C21.5259 10.2082 24.7918 13.4724 24.7918 17.5C24.7918 21.5259 21.5259 24.7914 17.5 24.7914ZM26.9793 10.2082C25.77 10.2082 24.7918 9.2286 24.7918 8.02069C24.7918 6.81278 25.77 5.83319 26.9793 5.83319C28.1886 5.83319 29.1668 6.81278 29.1668 8.02069C29.1668 9.2286 28.1886 10.2082 26.9793 10.2082Z"
            fill="white hover:text-[#E9D8A6]"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_19">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};


const data = {
  es: {
    // Menú y navegación
    menu: "Menú",
    nav_home: "Inicio",
    nav_cuadros: "Cuadros",
    nav_fotografias: "Fotografías",
    nav_quienSoy: "¿Quién Soy?",
    nav_portafolio: "Portafolio",
    nav_hablemos: "!HABLEMOS!",

    // Efecto de texto (introducción)
    efectoTexto_intro:
      "Desde mi niñez recuerdo tener fascinación por las imágenes que desprenden emociones fuertes, las fotografías que siempre nos muestran los monitores de “windows” o el motor de búsqueda “bing”, los cuadros que se muestran en los despachos de empresas, la profundidad que transmiten los contrastes que se crean en las fotos en blanco y negro. Recuerdo bien que los espacios minimalistas en la casa de mi tío Marcos mostraban tranquilidad, orden y paz; y era posible verlo como una fotografía sin necesidad de realmente congelar esa escena en un dispositivo o en ese entonces, en un rollo.",

    // Acciones y botones
    acciones_seguirViendo: "SEGUIR VIENDO",
    acciones_botonSeguir: "SEGUIR",
    acciones_portafolioBtn: "Ver Portafólio",

    // Presentación principal
    presentacion_biologoFotografo: "Biólogo y fotógrafo",
    presentacion_proyectandoVida: "Proyectando la vida a través de la cámara",

    // Sección especial / asesoría
    seccionEspecial_toqueEspecialEspacios: "Dale un toque especial a tus espacios",
    seccionEspecial_asesoriaPersonalizada:
      "Reciba una asesoría personalizada para ayudarte a seleccionar la foto que más se adapte a tus espacios.",
    seccionEspecial_teGustaLoQueVes: "¿Te gusta lo que ves?",

    // Footer
    footer_enlaces: "Enlaces",
    footer_inicio: "Inicio",
    footer_quienSoy: "¿Quién Soy?",
    footer_cuadros: "Cuadros",
    footer_fotografias: "Fotografías",
    footer_blog: "Blog",
    footer_politicasPrivacidad: "Políticas de Privacidad",
    footer_terminosCondiciones: "Términos y Condiciones",
    footer_sigueme: "Sígueme",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",
    footer_pinterest: "Pinterest",
    footer_rights:
      "Todos los derechos reservados © 2022 | Juan León. Sitio desarrollado por MiGuayaba.com en MGPanel"
  },
  en: {
    // Menú y navegación
    menu: "Menu",
    nav_home: "Home",
    nav_cuadros: "Artworks",
    nav_fotografias: "Photographs",
    nav_quienSoy: "Who am I?",
    nav_portafolio: "Portfolio",
    nav_hablemos: "Let's Talk!",

    // Efecto de texto (introducción)
    efectoTexto_intro:
      "Since my childhood, I remember being fascinated by images that evoke strong emotions, the photographs always shown on Windows monitors or the Bing search engine, the frames displayed in company offices, and the depth conveyed by the contrasts in black and white photos. I vividly recall that the minimalist spaces in my Uncle Marcos' house exuded tranquility, order, and peace; and it was possible to view it as a photograph without having to truly freeze that scene on a device or, back then, on a film roll.",

    // Acciones y botones
    acciones_seguirViendo: "KEEP WATCHING",
    acciones_botonSeguir: "CONTINUE",
    acciones_portafolioBtn: "View Portfolio",

    // Presentación principal
    presentacion_biologoFotografo: "Biologist and Photographer",
    presentacion_proyectandoVida: "Projecting life through the camera",

    // Sección especial / asesoría
    seccionEspecial_toqueEspecialEspacios: "Give your spaces a special touch",
    seccionEspecial_asesoriaPersonalizada:
      "Receive personalized advice to help you select the photo that best suits your spaces.",
    seccionEspecial_teGustaLoQueVes: "Do you like what you see?",

    // Footer
    footer_enlaces: "Links",
    footer_inicio: "Home",
    footer_quienSoy: "Who am I?",
    footer_cuadros: "Artworks",
    footer_fotografias: "Photographs",
    footer_blog: "Blog",
    footer_politicasPrivacidad: "Privacy Policy",
    footer_terminosCondiciones: "Terms and Conditions",
    footer_sigueme: "Follow me",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",
    footer_pinterest: "Pinterest",
    footer_rights:
      "All rights reserved © 2022 | Juan León. Site developed by MiGuayaba.com on MGPanel"
  }
};
