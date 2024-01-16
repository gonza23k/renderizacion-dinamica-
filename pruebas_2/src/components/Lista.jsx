export default function Lista({
  tareas,
  inputChange,
  valorInput,
  handleSubmit,
  setListaTareas,
}) {
  const eliminarTrea = (tarea) => {
    const nuevasTareas = tareas.filter((e) => e.name !== tarea.name);
    setListaTareas(nuevasTareas);
  };
  const completarTarea = (tarea) => {
    const copiaTareas = [...tareas];
    const tareaCompletada = tareas.findIndex((e) => e.id === tarea.id);
    copiaTareas[tareaCompletada].completado = true;
    setListaTareas(copiaTareas);
  };
  return (
    <>
      <ul>
        {tareas.length > 0 ? (
          tareas.map((tarea, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
            >
              <li style={{ color: tarea.completado ? "green" : "red" }}>
                {tarea.name}
              </li>
              <button onClick={() => eliminarTrea(tarea)}>Borrar</button>
              <button onClick={() => completarTarea(tarea)}>
                Completar tarea
              </button>
            </div>
          ))
        ) : (
          <p>Sin tareas</p>
        )}
      </ul>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Agrega tu tarea"
          onChange={inputChange}
          value={valorInput}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}
