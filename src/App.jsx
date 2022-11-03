import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoEmpleados from "./components/ListadoEmpleados";

function App() {
  const [empleados, setEmpleados] = useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-5 md:flex">
        <Formulario empleados={empleados} setEmpleados={setEmpleados} />
        <ListadoEmpleados empleados={empleados} />
      </div>
    </div>
  );
}

export default App;
