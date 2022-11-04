import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ empleados, setEmpleados, empleado, setEmpleado }) => {
  const [nombre, setNombre] = useState(``);
  const [apellido, setApellido] = useState(``);
  const [email, setEmail] = useState(``);
  const [fechaAlta, setFechaAlta] = useState(``);
  const [comentario, setComentario] = useState(``);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(empleado).length > 0) {
      setNombre(empleado.nombre);
      setNombre(empleado.nombre);
      setApellido(empleado.apellido);
      setEmail(empleado.email);
      setFechaAlta(empleado.fechaAlta);
      setComentario(empleado.comentario);
    }
  }, [empleado]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now(36).toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, apellido, email, fechaAlta, comentario].includes(``)) {
      console.log("al menos un campo esta vacio");
      setError(true);
      return;
    }
    setError(false);

    const nuevoEmpleado = {
      nombre,
      apellido,
      email,
      fechaAlta,
      comentario,
    };

    if (empleado.id) {
      //editando el registro

      nuevoEmpleado.id = empleado.id;
      const registrosActualizados = empleados.map((empleadoState) =>
        empleadoState.id === empleado.id ? nuevoEmpleado : empleadoState
      );
      setEmpleados(registrosActualizados);
      setEmpleado({});
    } else {
      //nuevo registro
      nuevoEmpleado.id = generarId();
      setEmpleados([...empleados, nuevoEmpleado]);
    }

    //reinicio el formulario
    setNombre("");
    setApellido("");
    setEmail("");
    setFechaAlta("");
    setComentario("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento Empleados
      </h2>
      <p className="mt-5 text-center mb-10">
        Añadir Empleados y {""}
        <span className="text-indigo-600 font-bold text-lg ">
          Administralos
        </span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}>
        {error && <Error mensaje="Todos los campos deben estar completos" />}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700-uppercase placeholder-gray-400 rounded-md">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="apellido"
            className="block text-gray-700-uppercase placeholder-gray-400 rounded-md">
            Apellido
          </label>
          <input
            id="apellido"
            type="text"
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700-uppercase placeholder-gray-400 rounded-md">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo Electronico"
            className="border-2 w-full p-2 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700-uppercase placeholder-gray-400 rounded-md">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="comentarios"
            className="block text-gray-700-uppercase placeholder-gray-400 rounded-md">
            Comentarios
          </label>
          <textarea
            id="comentarios"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Comentarios a tener en cuenta"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all cursor-pointer"
          value={empleado.id ? "Editar Empleado" : "Agregar empleado"}
        />
      </form>
    </div>
  );
};

export default Formulario;
