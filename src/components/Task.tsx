interface TaskProps {
  createTask: (event: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

function Task({ createTask, error }: TaskProps) {
  return (
    <form style={{ marginBottom: "5rem" }} onSubmit={createTask}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <input type="text" placeholder="Task" name="task" />
        <button type="submit">Agregar</button>
      </div>
      <p style={{ color: "red" }}>{error !== "" && error}</p>
    </form>
  );
}

export default Task;
