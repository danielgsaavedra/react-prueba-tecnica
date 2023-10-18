interface TaskProps {
  createTask: (event: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

function Task({ createTask, error }: TaskProps) {
  return (
    <form style={{ marginBottom: "3rem" }} onSubmit={createTask}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input type="text" placeholder="Ingresa un tarea" name="task" />
        <button type="submit">Agregar</button>
      </div>
      <p style={{ color: "red" }}>{error !== "" && error}</p>
    </form>
  );
}

export default Task;
