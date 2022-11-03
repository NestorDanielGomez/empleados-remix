const Empleado = ({ empleado }) => {
  const { nombre, apellido, email, fechaAlta, comentario } = empleado;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Apellido: {""}
        <span className="font-normal normal-case">{apellido}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fechaAlta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Comentario: {""}
        <span className="font-normal normal-case">{comentario}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded">
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Empleado;
