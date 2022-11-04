import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoEmpleados from "./components/ListadoEmpleados";

function App() {
  const [empleados, setEmpleados] = useState([]);
  const [empleado, setEmpleado] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const LS = JSON.parse(localStorage.getItem("empleados")) ?? [];
    };

    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    //cuando el componente este listo o hubo un cambio en el array de pacientes.
    localStorage.setItem("empleados", JSON.stringify(empleados));
  }, [empleados]);

  const eliminarEmpleado = (id) => {
    const empleadosActualizados = empleados.filter((empleado) => {
      empleado.id !== id;
    });
    setEmpleados(empleadosActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-5 md:flex">
        <Formulario
          empleados={empleados}
          setEmpleados={setEmpleados}
          empleado={empleado}
          setEmpleado={setEmpleado}
        />
        <ListadoEmpleados
          empleados={empleados}
          setEmpleado={setEmpleado}
          eliminarEmpleado={eliminarEmpleado}
        />
      </div>
    </div>
  );
}

export default App;
