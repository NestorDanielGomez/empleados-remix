import React from "react";
import Empleado from "./Empleado";

const ListadoEmpleados = ({ empleados, setEmpleado, eliminarEmpleado }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {empleados && empleados.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">
            Listado de Empleados
          </h2>
          <p className="mt-5 text-center mb-10">
            Administrador de {""}
            <span className="text-indigo-600 font-bold text-xl">Empleados</span>
          </p>
          {empleados.map((empleado) => (
            <Empleado
              key={empleado.id}
              empleado={empleado}
              setEmpleado={setEmpleado}
              eliminarEmpleado={eliminarEmpleado}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">
            Los empleados agregados
          </h2>
          <p className="mt-5 text-center mb-10">
            Administrador de {""}
            <span className="text-indigo-600 font-bold text-xl">
              Apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoEmpleados;
