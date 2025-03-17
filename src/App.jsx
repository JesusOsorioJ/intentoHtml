import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { useRef, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "es");

  const inicio = useRef(null);

  const cuadros = useRef(null);
  const hablemos = useRef(null);

  const quiensoy = useRef(null);
  const fotografia = useRef(null);

  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Page1
              inicio={inicio}
              cuadros={cuadros}
              hablemos={hablemos}
              quiensoy={quiensoy}
              fotografia={fotografia}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              lang={lang || "es"}
              setLang={setLang}
            />
          }
        />
        <Route
          path="/about"
          element={
            <Page2
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
