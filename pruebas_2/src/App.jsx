import { useState } from "react";
import "./App.css";
import { tareas } from "./data/tareas";
import Lista from "./components/Lista";

function App() {
  const [listaTareas, setListaTareas] = useState(tareas);

  const [valorInput, setValorInput] = useState("");

  const handleSubmit = (submit) => {
    submit.preventDefault();
    setListaTareas([
      ...listaTareas,
      { id: listaTareas.length + 1, name: valorInput },
    ]);
    setValorInput("");
  };

  const inputChange = (e) => {
    setValorInput(e.target.value);
  };

  return (
    <>
      <Lista
        tareas={listaTareas}
        inputChange={inputChange}
        valorInput={valorInput}
        handleSubmit={handleSubmit}
        setListaTareas={setListaTareas}
      />
    </>
  );
}

export default App;
